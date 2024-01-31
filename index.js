// Import required modules
const mongoose = require("mongoose");

// Connect to MongoDB (make sure your MongoDB server is running)
mongoose.connect("mongodb://localhost:27017/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Check for MongoDB connection errors
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Define a schema for the user
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// Create a model based on the schema
const User = mongoose.model("User", userSchema);

// Create a new user and save it to the database
async function createUser() {
  try {
    const newUser = new User({
      username: "john_doe",
      email: "john@example.com",
      password: "password123",
    });

    const savedUser = await newUser.save();
    console.log("User saved successfully:", savedUser);
  } catch (error) {
    console.error("Error saving user:", error);
  }
}

const bookSchema = new mongoose.Schema({
    title: String,
    id: Number,
})

const Book = mongoose.model("Book", bookSchema);

async function createBook() {
    try {
        const newBook = new Book({
            title: "Ansh's book",
            id: 1,
        })

        const savedBook = await newBook.save();
        console.log("Book saved successfully:", savedBook);
    } catch (error) {
        console.log("Error saving book:", error);
    }
}
createUser();
createBook();

// fetching data from database