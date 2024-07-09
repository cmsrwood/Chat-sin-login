const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173"
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8800"
const BACKEND_PORT = process.env.PORT || 8800

module.exports = {
  FRONTEND_URL,
  BACKEND_URL,
  BACKEND_PORT
};