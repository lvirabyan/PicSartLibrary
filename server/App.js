const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/book");
const app = express();
const cors = require('cors');
const AuterRouter = require("./authRouter")

const BookCntroler = require("./controllers/booksController");
const port = 3003;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use("/auth", AuterRouter);



const mongoDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/Library");
    console.log(
      `MongoDB connected: ${conn.connection.host}:${conn.connection.port}`
    );
  } catch (error) {
    process.exit(1);
  }
};

mongoDB();
app.post("/api/books", async (req, res) => {
  try {

    const book = new Book(req.body);
    console.log(book);
    const x = await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
app.get("/api/books", async (req, res) => {
  try {
    console.log("popopo");
    const book = new Book(req.body);
    console.log(book);
    const x = await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
app.use("/book", BookCntroler);
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});









