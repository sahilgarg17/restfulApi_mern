const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/student-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection is successful");
}).catch((error) => {
    console.log(`No Connection + ${error}`);
})