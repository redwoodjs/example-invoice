export default ({ onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-primary-700"
    >
      {children}
    </button>
  )
}
