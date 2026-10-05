function LoadingSpinner() {

  return (
    <div className="flex items-center justify-center p-4">

      <div
        className="
          h-6
          w-6
          animate-spin
          rounded-full
          border-2
          border-slate-300
          border-t-blue-600
        "
      />

      <span className="ml-3 text-sm text-slate-500">
        Searching...
      </span>

    </div>
  );
}

export default LoadingSpinner;