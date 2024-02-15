import React from "react";
const getRole = async(req,res) => {
const user = req.cookies.user
return user
}
const DashboardSectionTitle = async  () => {
const role = await getRole()
	return (
		<div className="text-center text-primary text-2xl w-[210px] pb-2 mx-auto font-semibold border-b-2 border-b-primary">
			User Profile Page
		</div>
	);
};

export default DashboardSectionTitle;
