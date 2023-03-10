const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUiExpress = require("swagger-ui-express");
const mongoose = require("mongoose");

const app = express();
dotenv.config();
app.use(cors({ origin: "*" }));
app.use("/public", express.static("./public"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// swagger setUp start here
const swaggerOption = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "practiceAPI",
      description: "Maile api banudai xu",
      contact: {
        name: "Mohan Gurung",
      },
      servers: ["http://localhost:5000"],
    },
  },
  apis: ["./routes/*.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/doc", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));

// routes

// service
// app.use("/service", (res, req) => {
//   res.status(200).json([
//     {
//       headline: "services",
//       price: "125$",
//       duration: "Day",
//       size: "30 ft",
//       capacity: "Max person 5",
//       Bed: "King Beds",
//       services: "Wifi,Television,Bathroom",
//     },
//     {
//       headline: "services",
//       price: "125$",
//       duration: "Day",
//       size: "30 ft",
//       capacity: "Max person 5",
//       Bed: "King Beds",
//       services: "Wifi,Television,Bathroom",
//     },
//     {
//       headline: "services",
//       price: "125$",
//       duration: "Day",
//       size: "30 ft",
//       capacity: "Max person 5",
//       Bed: "King Beds",
//       services: "Wifi,Television,Bathroom",
//     },
//   ]);
// });

//Home
const Home = require("./routes/Home");
app.use("/home", Home);

// contact
app.use("/contact", (req, res) => {
  res.status(200).json([
    {
      headline: "Contact",
    },
  ]);
});

//about
const about = require("./routes/About");
app.use("/about", about);

// Rooms
const room = require("./routes/rooms");
app.use("/room", room);

//Testimonials
const testimonials = require("./routes/testimonials");
app.use("/testimonials", testimonials);

// blogs
const blogs = require("./routes/blogs");
app.use("/blogs", blogs);

// images
const images = require("./routes/multiImagees");
app.use("/images", images);

// Another-Form
// const anotherForm = require("./routes/anotherFrom");
// app.use("/anotherForm", anotherForm);

// server setUp
// app.listen(4000);
// console.log("Server is running at port" + process.env.PORT);
// Mongodb connection

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 4000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => app.listen(PORT),
    console.log("Application is running at port:" + PORT)
  )
  .catch((err) => console.log(err));
