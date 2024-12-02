import mongoose from "mongoose";

const qrCodeSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    url: { type: String, default: "" },
    createdAt: { type: String, default: "" },
    updatedAt: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const QRCode =
  mongoose.models["QRCode"] || mongoose.model("QRCode", qrCodeSchema);

export default QRCode;
