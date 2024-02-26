const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    categoryKeywords: {
        type: [String],
        enum: ['Data Science', 'Python Developer', 'Business Analyst', 'Blockchain', 'Web Designing', 'Java Developer',
            'Operations Manager', 'SAP Developer', 'DotNet Developer', 'Hadoop', 'Database', 'DevOps Engineer', 'Automation Testing',
            'PMO', 'ETL Developer', 'Testing', 'Arts', 'HR', 'Sales', 'Health and fitness', 'Mechanical Engineer', 'Advocate',
            'Network Security Engineer', 'Civil Engineer', 'Electrical Engineering'],
        required: true,
    },
    expertise: {
        type: [String],
        required: true,
    },
    skills: {
        type: [String],
        required: true, // You can make it required or not based on your needs
    },
}, { timestamps: true });

const Job = new mongoose.model('Job', jobSchema);
module.exports = Job;
