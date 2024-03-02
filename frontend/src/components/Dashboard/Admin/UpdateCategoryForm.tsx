import React, { FormEvent } from "react";
import { IoClose } from "react-icons/io5";

interface AddCategoryFormProps {
  handleCategoryUpdate: (e: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
}

const UpdateCategoryForm = ({
  handleCategoryUpdate,
  onClose,
}: AddCategoryFormProps) => {
  return (
    <div className="lg:h-[100vh] flex justify-center items-center absolute top-0 w-full bg-black bg-opacity-20">
      <div
        className={`p-8 md:p-10 rounded-md box-shadow border border-[#F1F1F4] max-w-lg w-full mt-5 md:mt-10 bg-white relative`}
      >
        <div
          className="absolute top-8 right-8 cursor-pointer"
          onClick={() => onClose()}
        >
          <IoClose size={20} />
        </div>
        <h3 className="text-textColor text-[17px] font-semibold mb-5">
          Update Category
        </h3>
        <form onSubmit={handleCategoryUpdate}>
          <div className="mb-5 md:mb-8">
            <label
              htmlFor="title"
              className="text-base block font-medium text-gray-900 md:mb-2"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              className="bg-white border-2 border-gray-300 text-gray-600 focus:outline-none focus:border-gray-400 w-full ps-5 p-2.5 rounded-md"
              placeholder="Graphics Content"
              required
            />
          </div>
          <div className="text-right">
            <input
              type="submit"
              className="text-white bg-primary px-4 py-2.5 rounded-md cursor-pointer uppercase"
              value="Update"
              onClick={() => {
                setTimeout(onClose, 800);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategoryForm;
