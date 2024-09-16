import Job from "../models/job.model.js"
import Comment from "../models/comment.model.js"

const JobController = {
    allJobs : async(req, res) =>{
        try{
            const jobList = await Job.find();
            res.json(jobList);
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },
    oneJob: async(req, res) =>{
        try{
            const oneJob = await Job.findById(req.params.id);
            res.json(oneJob);
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },
    oneJobWithComments : async(req, res)=>{
        try{
            const jobWithComments = await Job.findOne({_id: req.params.id}).populate('comments');
            res.json(jobWithComments)
        }catch(err){
            res.status(400).json(err)
        }
    },
    createJob: async(req, res) =>{
        try{
            const newJob = await Job.create(req.body);
            res.json(newJob);
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },
    editJob: async(req, res) =>{
        try{
            const options = {
                new: true, // returned result is the updated object 
                runValidators: true // to enable the validation in update
            }
            const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, options);
            res.json(updatedJob);
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },
    deleteJob: async(req, res) =>{
        try{
            const deletedJob = await Job.findByIdAndDelete(req.params.id);
            await Comment.findOneAndDelete({job : deletedJob._id}) // delete the corresponding comments
            res.json(deletedJob);
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },

}

export default JobController;