/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";

export const sendRequestToast = (promise: any, message: string, errorMessage?: string) => {
  toast.promise(
    promise,
    {
      loading: "Sending your request...",
      success: () => `${message}`,
      error: (err) => {
        return (
          <div className="flex flex-col items-center justify-center gap-2">
            {errorMessage ? (
              <span>{errorMessage}</span>
            ) : (
              <>
                <span>Something went wrong D:</span>
                <span>{err?.code && err?.message ? `${err.code} - ${err.message}` : ""}</span>
              </>
            )}
          </div>
        );
      },
    },
    {
      duration: 3000,
      position: "bottom-center",
      style: {
        backgroundColor: "#1f1f23",
        color: "#fafafa",
      },
    },
  );
};

export const successToast = (message: string) => {
  toast.success(message, {
    duration: 3000,
    position: "bottom-center",
    style: {
      backgroundColor: "#1f1f23",
      color: "#fafafa",
    },
  });
};

export const errorToast = (message: string) => {
  toast.error(message, {
    duration: 3000,
    position: "bottom-center",
    style: {
      backgroundColor: "#1f1f23",
      color: "#fafafa",
    },
  });
};
