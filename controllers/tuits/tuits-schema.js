import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    topic: String,
    username: String,
    time: String,
    title: String,
    image: String,
    replies: Number,
    retuits: Number,
    handle: String,
}, {collection: 'tuits'});
export default schema;
