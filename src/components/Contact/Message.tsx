import React from "react";
import Card from "../Card";
// import Form from "./Form";
// import clsx from "clsx";

// type MyInputProps = {
//   id: string;
//   name: string;
//   label: string;
//   placeholder?: string;
//   type?: string;
//   errors?: string;
//   size?: number;
//   value: string;
//   onChange: (e: React.ChangeEvent<any>) => void;
//   onBlur?: (e: React.ChangeEvent<any>) => void;
// };

// const MyInput = ({
//   id,
//   name,
//   label,
//   placeholder = "",
//   type = "text",
//   errors,
//   value,
//   size,
//   onChange,
//   onBlur,
// }: MyInputProps) => {
//   return (
//     <div className="group relative">
//       <label
//         htmlFor={id}
//         className={clsx(
//           errors ? "text-red-700 group-focus-within:text-red-700" : "text-gray-300 group-focus-within:text-violet-500",
//           "block select-none text-sm font-medium"
//         )}
//       >
//         {errors ? errors : label}
//       </label>
//       <div className="relative mt-1 rounded-md">
//         {type === "textarea" ? (
//           <textarea
//             className="block w-full rounded-md py-1 pl-2 pr-2 text-lg font-medium focus:border-violet-600 focus:ring-violet-500"
//             id={id}
//             name={name}
//             required
//             autoComplete="off"
//             value={value}
//             maxLength={size ? size : undefined}
//             onChange={e => {
//               if (onBlur) onBlur(e);
//               onChange(e);
//             }}
//             rows={6}
//             onBlur={onBlur}
//             placeholder={placeholder}
//           />
//         ) : (
//           <input
//             className="block w-full rounded-md py-1 pl-2 pr-2 text-lg font-medium focus:border-violet-600 focus:ring-violet-500"
//             id={id}
//             name={name}
//             type={type}
//             required
//             value={value}
//             maxLength={size ? size : undefined}
//             onChange={e => {
//               if (onBlur) onBlur(e);
//               onChange(e);
//             }}
//             onBlur={onBlur}
//             placeholder={placeholder}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

const Message = () => {
  return (
    <Card className="group col-span-12 h-auto md:col-span-8">
      <>a</>
    </Card>
  );
};

export default React.memo(Message);
