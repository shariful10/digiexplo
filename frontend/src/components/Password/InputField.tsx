import React from 'react'

interface InputFieldProps {
   title: string,
   name: string
}

const InputField = ({ title, name }: InputFieldProps) => {
   return (
      <div className="mb-5 md:mb-8">
         <label
            htmlFor="Old Password"
            className="text-base block font-medium text-gray-900 md:mb-2"
         >
            {title}
         </label>
         <input
            type="password"
            name={name}
            className="bg-white border-2 border-gray-300 text-gray-600 focus:outline-none focus:border-primary w-full ps-5 p-2.5 rounded-md"
            placeholder="******"
            required
         />
      </div>
   )
}

export default InputField