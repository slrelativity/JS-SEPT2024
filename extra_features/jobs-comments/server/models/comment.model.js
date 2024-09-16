import {model, Schema} from "mongoose";

const CommentSchema = new Schema({
    username:{
        type: String,
    },
    content:{
        type: String,
    },  
    rating:{
        type: Number,
    },  
    job: {
        type: Schema.Types.ObjectId,
        ref: "Job"
    }
},{timestamps: true})

const Comment = model("Comment", CommentSchema);
export default Comment;