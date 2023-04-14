import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import homepageRouter from "./routes/homepageRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import bodyParser from "body-parser";

// Configure dotenv
dotenv.config();

// Connect to the DB
connectDB();

const __dirname = path.resolve();

// Create express App
const app = express();

// Set views engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", "views");

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));
 
// Parses the text as json
app.use(bodyParser.json());

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap'));// redirect bootstrap
app.use('/css', express.static(__dirname + '/public/assets/scss'));
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));

app.use(express.static(path.join(__dirname, "public")));

// Use routers
app.use(homepageRouter);
app.use(categoryRouter);

// Create server and Listenning
app.listen(8082, () => {
  console.log("Server is listenning at port 8082");
});
