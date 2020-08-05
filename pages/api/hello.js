// This function can be deployed as Serverless Functions (also known as Lambdas).
// req = request data (instance of http.IncomingMessage, plus some pre-built middlewares)
// res = response data (instance of http.ServerResponse, plus some helper functions )
export default (req, res) => {
  res.status(200).json({ text: 'Hello' })
}