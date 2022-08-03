import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, SchoolMenu } from './Components';
import { Courses, Course, Student, Students, StudentCourse } from './Pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <SchoolMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:studentId" element={<Student />} />
        <Route path="/students/new" element={<Student />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<Course />} />
        <Route path="/courses/new" element={<Course />} />

        <Route path="/student-courses" element={<StudentCourse />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
