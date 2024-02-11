import Link from "next/link";
import React from "react";

const AddProduct = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <p className="flex items-center">
        <Link href="/dashboard/products">Products</Link>/
        <Link href="/dashboard/add-product">Add Products</Link>
      </p>
    </div>
  );
};

export default AddProduct;
