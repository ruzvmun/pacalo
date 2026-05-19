// contexts/ConfirmDialogContext.tsx
import type React from 'react'
import { createContext, useContext, useCallback, useState } from 'react'
import { ConfirmDialog } from './ConfirmDialog'

interface ConfirmDialogOptions {
  title: string
  message: string
  confirmButtonText?: string
  cancelButtonText?: string
}

interface ConfirmDialogContextType {
  confirm: (options: ConfirmDialogOptions) => Promise<boolean>
}

const ConfirmDialogContext = createContext<ConfirmDialogContextType | undefined>(undefined)

export const ConfirmDialogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dialog, setDialog] = useState<{
    isOpen: boolean
    options: ConfirmDialogOptions
    resolve: (value: boolean) => void
  } | null>(null)

  const confirm = useCallback((options: ConfirmDialogOptions) => {
    return new Promise<boolean>(resolve => {
      setDialog({
        isOpen: true,
        options,
        resolve,
      })
    })
  }, [])

  const handleClose = useCallback(() => {
    if (dialog) {
      dialog.resolve(false)
      setDialog(null)
    }
  }, [dialog])

  const handleConfirm = useCallback(() => {
    if (dialog) {
      dialog.resolve(true)
      setDialog(null)
    }
  }, [dialog])

  return (
    <ConfirmDialogContext.Provider value={{ confirm }}>
      {children}
      {dialog && (
        <ConfirmDialog
          open={dialog.isOpen}
          title={dialog.options.title}
          message={dialog.options.message}
          confirmButtonText={dialog.options.confirmButtonText}
          cancelButtonText={dialog.options.cancelButtonText}
          onConfirm={handleConfirm}
          onCancel={handleClose}
        />
      )}
    </ConfirmDialogContext.Provider>
  )
}

export const useConfirmDialog = () => {
  const context = useContext(ConfirmDialogContext)
  if (!context) {
    throw new Error('useConfirmDialog must be used within a ConfirmDialogProvider')
  }
  return context
}
