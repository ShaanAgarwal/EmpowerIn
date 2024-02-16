const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require('cors');
const userRoutes = require("./Routes/userRoutes");
const contactUsRoutes = require("./Routes/contactUsRoutes");
const candidateRoutes = require("./Routes/candidateRoutes");
const forgotPasswordRoutes = require("./Routes/forgotPasswordRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const { connectDatabase } = require("./Config/connectDatabase");
const { sendEmailSingle } = require("./Utils/EmailSendingViaNodemailer/sendEmailSingle");

dotenv.config();

connectDatabase();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/user", userRoutes);
app.use("/api/contactUs", contactUsRoutes);
app.use("/api/candidate", candidateRoutes);
app.use("/api/forgotPassword", forgotPasswordRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "The API is running successfully.", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server error.", success: false });
  }
});

app.post("/", async (req, res) => {
  try {
    const { toEmail, subject, text } = req.body;
    await sendEmailSingle(toEmail, subject, text);
    return res.status(200).json({ message: "Email Sent Successfully", success: true })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error", success: false });
  }
});

app.listen(8080, (req, res) => {
  console.log("Server is running on PORT 8080");
});