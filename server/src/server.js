const app = require("./app");

const PORT = process.env.PORT || 3000;
async function startServer() {
  app.listen(PORT, () => {
    console.log(`Backend Server listening on http://localhost:${PORT}`);
  });
}

startServer();
