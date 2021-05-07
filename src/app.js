import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const PORT = 7000;

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan(`dev`));

app.use(express.static(path.join(__dirname, "/assets")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`🍀 LOL_BOARD WEB PROJECT - http://localhost:${PORT}`);
});
