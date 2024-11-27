export default function handler(req, res) {
  // res.send(req.method);

  switch (req.method) {
    case "PATCH":
      res.send("ShortLink 수정");
      break;

    case "GET":
      res.send("ShortLink 조회");
      break;

    default:
      res.send();
      break;
  }
}
