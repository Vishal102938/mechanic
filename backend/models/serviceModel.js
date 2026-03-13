import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    houseNumber: { type: String, required: true },
    street: { type: String, required: true },
    landmark: { type: String },
    pincode: { type: String, required: true },
    state: { type: String, default: "Delhi" },
    district: { type: String, required: true },
    locality: { type: String, required: true },
    serviceType: { type: String, required: true },
    description: { type: String },

    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const ServiceRequest = mongoose.model("ServiceRequest", serviceSchema);
export default ServiceRequest;