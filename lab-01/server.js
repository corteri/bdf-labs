// Tasks 4-6: the same server rewritten with Express, with three routes
// and a 404 handler for every unknown path.
// Run with:  node server.js   (or npm start)
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const STUDENT = {
  name: "Aditya Srivastava",
  registrationNumber: "252U1R8001",
  section: "113[S-014]",
};

// GET /  -> plain welcome text
app.get("/", (request, response) => {
  response.status(200).send("Welcome to my first Express server!");
});

// GET /about  -> JSON with my name and section
app.get("/about", (request, response) => {
  response.status(200).json({
    name: STUDENT.name,
    registrationNumber: STUDENT.registrationNumber,
    section: STUDENT.section,
    lab: "Lab 1: Node.js and Express server",
  });
});

// GET /time  -> the current date and time
app.get("/time", (request, response) => {
  const now = new Date();
  response.status(200).json({
    iso: now.toISOString(),
    readable: now.toString(),
  });
});

// Anything else -> 404
app.use((request, response) => {
  response.status(404).json({
    status: 404,
    error: "Not Found",
    message: `No route matches ${request.method} ${request.originalUrl}`,
  });
});

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});
