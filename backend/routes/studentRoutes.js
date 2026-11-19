const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  getDashboardStats,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

/**
 * REST API Routes for Students (Experiment No. 8)
 * Base URL: /api/students
 */

// Route for dashboard analytics / metrics
router.get('/stats', getDashboardStats);

// Routes for student collection: Read All (GET) & Create (POST)
router.route('/')
  .get(getAllStudents)
  .post(createStudent);

// Routes for individual student document: Read One (GET), Update (PUT), Delete (DELETE)
router.route('/:id')
  .get(getStudentById)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;
