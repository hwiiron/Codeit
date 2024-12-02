import QRCode from "../../../db/models/QRCode";
import dbConnect from "@/db/dbConnect";

export default async function Handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      // 아래 코드를 사용해서 스키마의 프로퍼티 값을 출력해 주세요.
      const props = Object.keys(QRCode.schema.paths);
      console.log(props);

      const qrCodes = await QRCode.find();

      res.send(qrCodes);
      break;

    case "POST":
      const newQRCode = await QRCode.create(req.body);

      res.status(201).send(newQRCode);
      break;

    default:
      res.status(400).send();
      break;
  }
}
