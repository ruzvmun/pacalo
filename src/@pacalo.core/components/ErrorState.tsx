import clsx from "clsx";
import type React from "react";
import { useCallback } from "react";

export interface ErrorStateProps {
  title?: string;
  message?: string;
  emoji?: string;
  retryLabel?: string;
  onRetry?: () => void;
  className?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Oops! Something went wrong",
  message = "We couldn't load your content.",
  emoji = "😞",
  retryLabel = "Try Again",
  onRetry,
  className,
}) => {
  const handleRetry = useCallback(() => {
    if (onRetry) onRetry();
    else if (typeof window !== "undefined") window.location.reload();
  }, [onRetry]);

  return (
    <div
      className={clsx(
        "flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-pink-100 px-4",
        className
      )}
      role="alert"
      aria-live="assertive"
    >
      <div className="text-center p-4 max-w-xs">
        <div className="text-6xl mb-4 animate-bounce" aria-hidden>
          {emoji}
        </div>
        <h2 className="text-lg font-bold text-red-600 mb-3">{title}</h2>
        {message && <p className="text-sm text-red-500 mb-4">{message}</p>}

        <button
          onClick={handleRetry}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm"
        >
          {retryLabel}
        </button>
      </div>
    </div>
  );
};

export default ErrorState;
