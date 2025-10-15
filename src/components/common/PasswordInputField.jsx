import { useState } from 'react';

export default function PasswordInputField({
  name,
  placeholder,
  register,
  rules,
  label,
  errors,
}) {
  const [toggle, setToggle] = useState(false);

  function handleBtnToggle() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className="mb-2">
        <div className="relative">
          <input
            type={toggle ? 'text' : 'password'}
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
          <button
            onClick={handleBtnToggle}
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
          >
            {toggle ? 'hide' : 'show'}
          </button>
        </div>
      </div>
    </>
  );
}
