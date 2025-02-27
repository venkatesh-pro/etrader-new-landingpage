import React from "react";

const InputField = ({
  id,
  type,
  placeholder,
  isFixed,
  fixedValue,
  register,
  label,
  errors,
  pattern,
  isRequired,
}: {
  id: string;
  type: "text" | "number" | "email";
  placeholder: string;
  isFixed?: boolean;
  fixedValue?: string;
  label: string;
  pattern?: string;
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        className={`h-[56px] w-full p-4 rounded-[12px] ${
          isFixed ? "bg-[#f4f4f4]" : ""
        } border-[1.5px] text-[17px] font-normal border-[#c4c4c4] placeholder:text-light-silver focus:border-[#0071e3] focus:outline-none peer pb-[0px] ${
          errors[label] &&
          "!border-dark-red text-dark-red bg-light-red active:!border-dark-red focus:!border-dark-red"
        }`}
        placeholder={" "}
        value={fixedValue}
        data-filled={fixedValue ? "true" : "false"}
        onInput={(e) => {
          e.target.dataset.filled = e.target.value ? "true" : "false";
        }}
        disabled={isFixed}
        {...register(label, {
          required: isRequired ? "Required" : false,
          pattern: pattern
            ? {
                value: new RegExp(pattern),
                message: "Invalid format",
              }
            : undefined,
        })}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 ease-in-out top-3.5 text-[17px] text-light-silver peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-blue-500 ${
          errors[label] && "!text-dark-red"
        }`}
        data-filled="false"
      >
        {placeholder}
      </label>
      <style>
        {`
          input[data-filled="true"] + label {
            top: 0.5rem;
            font-size: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default InputField;
