import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface ConfirmDialogState {
  isOpen: boolean
  title: string
  message: string
  confirmButtonText?: string
  cancelButtonText?: string
}

const initialState: ConfirmDialogState = {
  isOpen: false,
  title: '',
  message: '',
  confirmButtonText: 'Confirm',
  cancelButtonText: 'Cancel',
}

const confirmDialogSlice = createSlice({
  name: 'confirmDialog',
  initialState,
  reducers: {
    openConfirmDialog: (
      state,
      action: PayloadAction<{
        title: string
        message: string
        confirmButtonText?: string
        cancelButtonText?: string
      }>
    ) => {
      state.isOpen = true
      state.title = action.payload.title
      state.message = action.payload.message
      state.confirmButtonText = action.payload.confirmButtonText || 'Confirm'
      state.cancelButtonText = action.payload.cancelButtonText || 'Cancel'
    },
    closeConfirmDialog: state => {
      state.isOpen = false
    },
  },
})

export const { openConfirmDialog, closeConfirmDialog } = confirmDialogSlice.actions
export default confirmDialogSlice.reducer
