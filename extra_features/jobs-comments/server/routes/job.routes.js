import { Router} from "express";
import JobController from "../controllers/job.controller.js";
import CommentController from "../controllers/comment.controller.js";

const router = Router();

router.route("/jobs")
    .get(JobController.allJobs)
    .post(JobController.createJob)

router.route("/jobs/:id")
    .get(JobController.oneJobWithComments)
    .put(JobController.editJob)
    .delete(JobController.deleteJob) // and the corresponding comments

router.route("/comments/:jobId")
    .post(CommentController.addComment)  

router.route("/comments")
    .get(CommentController.allComments)


export default router;
