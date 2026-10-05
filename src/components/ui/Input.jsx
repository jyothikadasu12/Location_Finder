function Input({
  value,
  onChange,
  placeholder,
  onKeyDown
}) {

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className="
        w-full
        rounded-xl
        border
        border-slate-300
        bg-white
        px-4
        py-2.5
        text-sm
        text-slate-800
        placeholder:text-slate-400

        outline-none

        transition-all
        duration-200

        hover:border-slate-400

        focus:border-blue-500
        focus:ring-4
        focus:ring-blue-100
      "
    />
  );
}

export default Input;