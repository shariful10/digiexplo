import { Schema, model } from "mongoose";
import { ICategory } from "./category.interface";

const CategorySchema = new Schema<ICategory>(
  {
    title: {
      type: String,
      required: [true, "Category Title is required"],
      unique: true,
    },
  },
  { timestamps: true }
);

export const CategoryModel = model<ICategory>("Categorie", CategorySchema);
