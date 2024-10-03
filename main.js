const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({
    message: "Hey, I am Node Js in Docker Container",
    developedBy: "Adarsh L K",
    github: "https://github.com/adarshlkdev",
    linkedin: "https://www.linkedin.com/in/adarshlkdev/",
    website: "https://adarshlkdev.vercel.app/",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
