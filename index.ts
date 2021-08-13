import express, { Application, Response, Request } from "express";
import cors from "cors";
import userRouter from "./src/routes/routers";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";

const app: Application = express();
const swaggerYAMLDoc = YAML.load("./swaggerConfigApi.yml");
const swaggerJSONDoc = require("./swaggerConfigJson.json");

app.use(express.json());

app.use(cors());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSONDoc));
app.use("/api", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World to my home page");
});

app.use("*", (req: Request, res: Response) => {
  res.status(400).json({
    request: "Failed",
    success: false,
    page: "Not Found",
  });
});

app.listen(5000, "localhost", () => {
  console.log("Server is up and running at : http://localhost:5000");
});
