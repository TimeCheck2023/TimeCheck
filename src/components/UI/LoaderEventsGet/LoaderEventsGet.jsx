import React from "react";

export const LoaderEventsGet = () => {
  return (
    <div className="absolute">
      <svg className="animate-spin h-8 w-8 text-violet-600" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20.735a7.962 7.962 0 01-5.291-2.944l-3 2.647A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12h-4a7.963 7.963 0 01-7.408 7.956z"></path>
      </svg>
    </div>
  );
};
