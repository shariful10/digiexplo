"use client";
import InputField from "./InputField";

const PageContent = () => {
  return (
    <div className="p-8 md:p-10 rounded-md box-shadow border border-[#F1F1F4] max-w-lg w-full mt-5 md:mt-10">
      <h3 className="text-textColor text-[17px] font-semibold mb-5">
        Change your password
      </h3>
      <form>
        <InputField title={"Old Password"} name={"old-password"} />
        <InputField title={"New Password"} name={"new-password"} />
        <InputField title={"Confirm Password"} name={"confirm-password"} />
        <div className="text-center">
          <input
            type="submit"
            className="text-white bg-primary px-4 py-2.5 rounded-md cursor-pointer uppercase"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default PageContent;
