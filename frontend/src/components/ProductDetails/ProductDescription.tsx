import React from "react";

const ProductDescription = ({ description }: { description: string }) => {
  return (
    <div className="space-y-5">
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
