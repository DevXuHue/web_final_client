import { XCircleIcon } from "@heroicons/react/outline";
import { toast, ToastBar, Toaster } from "react-hot-toast";

const DismissableToast = () => {
  return (
    <div>
      <Toaster
        reverseOrder={false}
        position='top-center'
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#fff",
            color: "#333",
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button
                    className='rounded-full p-1 ring-primary-400 transition hover:bg-[#444] focus:outline-none focus-visible:ring'
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <XCircleIcon />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
};

export default DismissableToast;
