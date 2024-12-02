import QRCode from "../../../db/models/QRCode";
import dbConnect from "@/db/dbConnect";

export default async function Handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const qrCode = await QRCode.findById(id);
      res.send(qrCode);
      break;

    case "PATCH":
      const updateQRCode = await QRCode.findByIdAndUpdate(id, req.body, {
        new: true,
        // true면 업데이트된 값을 반환
        // 값을 주지 않으면 수정 전의 이전 값을 반환
      });
      res.send(updateQRCode);
      break;

    case "DELETE":
      await QRCode.findByIdAndDelete(id);
      res.status(204).send();
      break;

    default:
      res.status(400).send();
      break;
  }
}
