function Card({
  children,
  className = ""
}) {

  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
        transition-all
        duration-200
        hover:shadow-md
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;