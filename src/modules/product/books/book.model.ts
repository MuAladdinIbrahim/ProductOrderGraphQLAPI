import mongoose, { Schema } from "mongoose";

const BookSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number },
  category: {type:String},
});

export default mongoose.model("BookModel", BookSchema);