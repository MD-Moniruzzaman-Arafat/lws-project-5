export default function InputField({
  name,
  type,
  placeholder,
  register,
  rules,
  label,
  errors,
}) {
  return (
    <>
      <div className="mb-2">
        <div className="relative">
          <input
            type={type}
            className={`w-full px-3 py-2 border rounded text-xs outline-none transition-all duration-200
        ${
          errors[name]
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-300 focus:border-blue-500'
        }
      `}
            placeholder={placeholder}
            aria-label={label}
            {...register(name, rules)}
          />
        </div>
      </div>
    </>
  );
}
