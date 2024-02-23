import Link from "next/link";
import AddProductForm from "./AddProductForm";
import DashboardHeader from "../../DashboardHeader";

const AddProduct = () => {
  return (
    <div className="px-5 lg:px-0">
      {/* Breadcrumbs */}
      <DashboardHeader
        url="dashboard"
        currentPage="Add Product"
        title="Add Product"
      />
      <AddProductForm />
    </div>
  );
};

export default AddProduct;
