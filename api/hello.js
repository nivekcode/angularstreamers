export default function handler(req, res) {
  console.log('ENV VARIABLES:', process.env);
  const {TEST}=process.env;
  res.status(200).json({ variable: TEST, foo: 'bar' });
}
