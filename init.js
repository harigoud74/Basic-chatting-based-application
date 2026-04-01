const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
  .then((res) => {
    console.log("connection is setuped to database!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatapp");
}

const allChats = [
  {
    from: "vinesh",
    to: "ram",
    message: "online ki raa    --",
    
    
    create_at: new Date(),

  },
  {
    from: "hari",
    to: "ram",
    message: "hlo bro how are you",
    create_at: new Date(),
  },
  {
    from: "arjun",
    to: "vinesh",
    message: "hlo bro where are you from",
    create_at: new Date(),
  },
  {
    from: "arjun",
    to: "ram",
    message: "hlo black mountian bro",
    create_at: new Date(),
  },
  {
    from: "mohi",
    to: "vinesh",
    message: "I love you !!    --",
    create_at: new Date(),
  },
];
Chat.insertMany(allChats);
allChats;
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
