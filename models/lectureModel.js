const mongoose = require("mongoose");

const lectureSlotSchema = new mongoose.Schema({
  lectureId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FacultyLectures",
    required: true,
  },
  startedAt: {
    type: Date,
    default: new Date(),
    required: true,
  },
  finishedAt: {
    type: Number,
    default: 50,
    required: true,
  },
  students: [Number],
});

const facultyLectureSchema = new mongoose.Schema({
  classId: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
    default: false,
  },
  availableSlot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LectureSlots",
    required: function () {
      return this.isOpen;
    },
  },
});

facultyLectureSchema.index({ classId: 1, subjectCode: 1 }, { unique: true });

const LectureSlots = mongoose.model("LectureSlots", lectureSlotSchema);

const FacultyLecture = mongoose.model("FacultyLectures", facultyLectureSchema);

module.exports = { FacultyLecture, LectureSlots };
