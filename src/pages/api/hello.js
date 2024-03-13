// pages/api/hello.js

export default function handler(req, res) {
  // Example data
  const data = {
    message: 'Hello, World!'
  };

  // Respond with the data
  res.status(200).json(data);
}
