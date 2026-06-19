import app from "./app";
import { config } from "./config/config";
import connectDB from "./config/db";

const startServer = async () => {
  const port = config.port || 3000;
  await connectDB();

  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
};

startServer();