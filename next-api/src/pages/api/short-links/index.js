export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      res.status(201).send({
        title: "위키피디아 Next.js",
        url: "https://en.wikipedia.org/wiki/Next.js",
      });
      break;

    case "GET":
      res.send([
        {
          id: "abc",
          title: "위키피디아 Next.js",
          url: "https://en.wikipedia.org/wiki/Next.js",
        },
        {
          id: "def",
          title: "코드잇 자유게시판",
          url: "https://codeit.kr/community/general",
        },
        {
          id: "ghi",
          title: "코드잇 질문답변",
          url: "https://www.codeit.kr/community/questions",
        },
      ]);
      break;

    default:
      res.status(404).send();
  }
}
