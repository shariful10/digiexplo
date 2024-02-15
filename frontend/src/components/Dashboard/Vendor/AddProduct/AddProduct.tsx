import Link from "next/link";
import AddProductForm from "./AddProductForm";

const AddProduct = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <p className="flex items-center gap-1 font-medium italic">
        <Link
          href="/dashboard"
          className="text-neutral-400 hover:text-black duration-300"
        >
          Products
        </Link>
        /<span>Add Products</span>
      </p>

      <h2 className="text-3xl lg:text-4xl font-bold mt-10 text-neutral-800">
        Add Product
      </h2>
      <AddProductForm />
    </div>
  );
};

export default AddProduct;
