const Job = require('../Models/jobSchema');

const createJob = async (req, res) => {
    try {
        const { jobTitle, jobDescription, location, salary, categoryKeywords, expertise, skills } = req.body;
        const newJob = await Job.create({
            jobTitle,
            jobDescription,
            location,
            salary,
            categoryKeywords,
            expertise,
            skills,
        });
        await newJob.save();
        return res.status(200).json({
            message: "Job has been successfully created.",
            newJob,
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    };
};

module.exports = { createJob };