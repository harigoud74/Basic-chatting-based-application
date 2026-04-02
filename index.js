const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 3000;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const { create } = require("domain");
const methodOverride = require("method-override")
const { channel } = require("diagnostics_channel");
const mysql = require("mysql2");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
main()
  .then((res) => {
    console.log("connection is setuped to database!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatapp");
}
app.get("/chats", async (req, res) => {
  let chats = await Chat.find({});
  res.render("index.ejs", { chats });
});
// To add new chat.
app.get("/chats/new", (req, res) => {
  res.render("newChats.ejs");
});

app.post("/chats", (req, res) => {
  let { from, to, message } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    message: message,
    created_at: new Date(),
  });
  // save to the database.
  newChat
    .save()
    .then((res) => {
      console.log("New chat is saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});
// Edit the chat.
app.get("/chats/:id/edit",async(req,res)=>{
  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("chatEdit.ejs",{chat});
});

app.put("/chats/:id",async(req,res)=>{
  let {id} = req.params;
  let {newMessage} = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    {message:newMessage},
    {runValidators:true ,new:true}
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

// Delete the chat.
app.delete("/chats/:id/delete",async(req,res)=>{
  let {id} = req.params;
  let delMsg = await Chat.findByIdAndDelete(id);
  console.log(delMsg);
  res.redirect("/chats");

});

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(port, (req, res) => {
  console.log("server is started", port);
});
