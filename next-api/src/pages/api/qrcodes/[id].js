export default function Handler(req, res) {
  switch (req.method) {
    case "GET":
      res.send(req.query.id);
      break;

    case "PATCH":
      res.send({
        title: "위키피디아 Next.js",
        url: "https://en.wikipedia.org/wiki/Next.js",
        id: req.query.id,
      });
      break;

    case "DELETE":
      res.status(204).send();
      break;

    case "POST":
      res.status(404).send();
      break;

    default:
      res.status(400).send();
      break;
  }
}
