

const ReviewToast = ({err, showerror, setShowError}) => {

  let message

  console.log("geeeoeoeoe")

  if (err === "making") {message = "error making review"}
  if (err === "loading") {message = "error loading reviews"}
  if (err === "deleting") {message = "error deleting review"}
  if (err === "editing") {message = "error editing review"}

  if (showerror) {
    return (
      <div>
       <div id="toast-success" class="fixed flex items-center w-full max-w-3xs p-4 space-x-4 text-gray-500 bg-white divide-gray-200 rounded-lg shadow-sm bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800" role="alert">
       <button class="absolute top-0 right-3 bg-transparent border-none outline-none"
       onClick={() => setShowError(false)}
       >x</button>
       <div class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
        </svg>
        <span class="sr-only">Error icon</span>
      </div>
      <div class="ms-2 text-sm font-normal">{message}</div>
      </div>
      </div>
  )
  }
 
      
}

export default ReviewToast