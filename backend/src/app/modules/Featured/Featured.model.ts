import { Schema, model } from "mongoose";
import { IFeatured } from "./Featured.interface";

const FeaturedSchema = new Schema<IFeatured>(
  {
    product: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

export const FeaturedModel = model<IFeatured>("Featured", FeaturedSchema);
