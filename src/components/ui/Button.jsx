function Button({
  children,
  onClick,
  disabled = false,
  type = "button"
}) {

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        rounded-xl
        bg-blue-600
        px-5
        py-2.5
        text-sm
        font-semibold
        text-white
        shadow-sm

        transition-all
        duration-200

        hover:-translate-y-0.5
        hover:bg-blue-700
        hover:shadow-md

        active:translate-y-0
        active:scale-95

        disabled:cursor-not-allowed
        disabled:opacity-50
        disabled:hover:translate-y-0
        disabled:hover:shadow-sm
      "
    >
      {children}
    </button>
  );
}

export default Button;