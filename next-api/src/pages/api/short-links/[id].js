import dbConnect from "@/db/dbConnect";
import ShortLink from "../../../db/models/ShortLink";

export default async function handler(req, res) {
  // res.send(req.method);
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "PATCH":
      const updateShortLink = await ShortLink.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updateShortLink);
      break;

    case "GET":
      const shortLink = await ShortLink.findById(id);
      res.send(shortLink);
      break;

    case "DELETE":
      await ShortLink.findByIdAndDelete(id);
      res.status(204).send();

      break;
    default:
      res.send();
      break;
  }
}
