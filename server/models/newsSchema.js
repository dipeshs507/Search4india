var mongoose = require ("mongoose");
var newsSchema = mongoose.Schema({ 
    category: {
        type: String,
        required:true
    },
    id: {
        type: String
    },
    name: {
        type: String
    },
    author: {
        type: String,
        required:false
    },
    title: {
        type: String,
        required: false
    },
   description: {
        type: String,
        required:false
    },
    url: {
        type: String,
        required: false
    },
   urlToImage: {
        type: String,
        required:false
    },
    publishedAt: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
}, { timestamps: true });

module.exports = mongoose.model("news", newsSchema);
