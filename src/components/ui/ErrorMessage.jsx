function ErrorMessage({
  message
}) {

  if (!message) {
    return null;
  }

  return (
    <div
      className="
        mt-3
        rounded-xl
        border
        border-red-200
        bg-red-50
        p-3
        text-sm
        text-red-600
      "
    >
      ⚠️ {message}
    </div>
  );
}

export default ErrorMessage;