//TODO: seeds script should come here, so we'll be able to put some data in our local env
const mongoose = require("mongoose");
require("../models/User")
require("../models/Item")
require("../models/Comment")
const User = mongoose.model("User");
const Item = mongoose.model("Item");
const Comment = mongoose.model("Comment")
const { faker } = require("@faker-js/faker");
require("mongodb").MongoClient;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("connected"))
    .catch((err) => console.log(err.stack))

const seedItems = []
const seedUsers = []
const seedComments = []

const createRandomItem = () => {
    return {
        "title": faker.commerce.product(),
        "description": faker.commerce.productDescription(),
        "image": "",
        "seller": "638b715a38d3dc004c803d20",
    }
}

const createRandomUser = () => {
    let username = faker.internet.userName()

    return {
        "username": username.replace(/[^A-Za-z0-9]/g, ""),
        "email": faker.internet.email()
    }
}

const createRandomComments = () => {
    return {
        "body": faker.lorem.sentences()
    }
}

for (let i = 0; i < 100; i++) {
    seedItems.push(createRandomItem())
    seedUsers.push(createRandomUser())
    seedComments.push(createRandomComments())

}

const seedDB = async () => {
    await Item.deleteMany({})
    await User.deleteMany({})
    await Comment.deleteMany({})
    await Item.insertMany(seedItems)
    await User.insertMany(seedUsers)
    await Comment.insertMany(seedComments)
}

seedDB()
.then(() => {
    console.log("Connection closed")
    mongoose.disconnect();
})
.catch(err => console.log(err))