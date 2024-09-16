import Comment from "../models/comment.model.js";
import Job from "../models/job.model.js"

const CommentController = {
    allComments : async(req, res) => {
        try{
            const comments = await Comment.find()
            res.json(comments)
        }catch(err){
            res.status(400).json(err)
        }
    },
    addComment : async(req, res) => { 
        try{
            // Save the comment on the Comments table
            const newComment = new Comment(req.body);
            newComment.job = req.params.jobId;
            const savedComment = await newComment.save();
            // Add the comment on the Job table
            const foundJob = await Job.findOne({_id: req.params.jobId});
            foundJob.comments.push(newComment);
            const updatedJob = await foundJob.save();
            res.json(savedComment);
        }catch(err){
            res.status(400).json(err)
        }
    },
    addComment2 : async(req, res) => {
        try{
            // add comment into Comment
            const newComment = new Comment(req.body)
            newComment.job = req.params.jobId
            await newComment.save()
        
            // pushing the newly added comment into Job
            const updatedJob = await Job.findOneAndUpdate(
                {_id:req.params.jobId},
                {$push : {comments : newComment}},
                {new: true}
                )
            res.json(updatedJob)
        }catch(err){
            res.status(400).json(err)
        }
    }
}

export default CommentController;