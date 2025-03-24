import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

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
  errors?: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  isRequired?: boolean;
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        className={`h-[56px] w-full p-4 rounded-[12px] ${
          isFixed ? "bg-[#f4f4f4]" : ""
        } border border-[#c4c4c4] text-[17px] font-normal placeholder:text-light-silver 
          focus:border-[#0071e3] focus:outline focus:outline-[1px] focus:outline-[#0071e3]
          peer pb-[0px] ${
          errors?.[label] &&
          "!border-dark-red text-dark-red bg-light-red active:!border-dark-red focus:!border-dark-red focus:!outline-none"
        }`}
        placeholder={" "}
        value={fixedValue}
        data-filled={fixedValue ? "true" : "false"}
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          target.dataset.filled = target.value ? "true" : "false";
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
        className={`absolute left-4 transition-all duration-200 ease-in-out 
          text-[17px] text-light-silver 
          peer-focus:top-4 peer-focus:text-[10px] peer-focus:text-blue-500
          top-1/2 -translate-y-1/2
          peer-data-[filled=true]:top-4
          peer-data-[filled=true]:text-[10px]
          ${errors?.[label] && "!text-dark-red"}`}
        data-filled="false"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputField;