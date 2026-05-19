import { CircularProgress } from "@mui/material";
import clsx from "clsx";
import type React from "react";

export interface LoadingProps {
  title?: string;
  subtitle?: string;
  emoji?: string;
  progressSize?: number;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  title = "Loading...",
  subtitle = "Please wait a moment.",
  emoji = "🚀",
  progressSize = 60,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4",
        className
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="text-center max-w-xs">
        <div className="relative inline-flex">
          <CircularProgress size={progressSize} className="text-blue-600" />
          <span className="absolute inset-0 flex items-center justify-center text-lg">
            {emoji}
          </span>
        </div>

        <p className="mt-4 text-lg text-blue-600 font-medium">{title}</p>
        {subtitle && (
          <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Loading;
