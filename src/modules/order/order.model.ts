import mongoose, { Schema } from "mongoose";

const OrderSchema: Schema = new Schema({
  status: {
    type: String,
    enum: ["NEW", "PLACED", "SAVED", "CANCELLED", "SHIPPED","DELIVERED", "CLOSED"],
    required: true,
  },
  order_no: { type: String, required: true },
  total_price: { type: Number },
  ship_to: { type: String },
  ordered_at: { type: Date },
  shipped_at: { type: Date },
  delievered_at: { type: Date },
  products:[{type:Schema.Types.ObjectId,ref:'BookModel'}],
  customer : {type:Schema.Types.ObjectId,ref:"CustomerModel"}
});

export default mongoose.model("OderModel", OrderSchema);
