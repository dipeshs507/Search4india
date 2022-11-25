const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://dipeshs507:dipesh507@cluster0.bbodq.mongodb.net/newsapi?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log("Database Not Connected");
        console.log(err);
    });
