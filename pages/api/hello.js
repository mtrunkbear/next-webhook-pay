// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { body } = req;
  console.log(body)
  res.status(200).json(body)

}
