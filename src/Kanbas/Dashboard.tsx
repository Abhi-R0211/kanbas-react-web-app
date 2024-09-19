import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (10)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <img alt="React" src="Images/React.webp" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img alt="GIT" src="Images/GIT.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1243/Home">
              CS1243 Version control and GIT
            </Link>
            <p className="wd-dashboard-course-title">
              Version control and GIT
            </p>
            <Link to="/Kanbas/Courses/1243/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img alt="C++" src="Images/C++.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1235/Home">
              CS1235 Introduction to C++
            </Link>
            <p className="wd-dashboard-course-title">
            Introduction to C++
            </p>
            <Link to="/Kanbas/Courses/1235/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img alt="DBMS" src="Images/DBMS.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1242/Home">
              CS1242 Database Management Systems
            </Link>
            <p className="wd-dashboard-course-title">
              Database Management Systems
            </p>
            <Link to="/Kanbas/Courses/1242/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img alt="Python" src="Images/Python.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1236/Home">
              CS1236 Python Programming
            </Link>
            <p className="wd-dashboard-course-title">
              Python Programming
            </p>
            <Link to="/Kanbas/Courses/1236/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img alt="ML" src="Images/ML.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1237/Home">
              CS1237 Machine Learning and AI
            </Link>
            <p className="wd-dashboard-course-title">
              Computational Intelligence
            </p>
            <Link to="/Kanbas/Courses/1237/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img alt="Game" src="Images/Game.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1238/Home">
              CS1238 Game Design
            </Link>
            <p className="wd-dashboard-course-title">
              Game Development
            </p>
            <Link to="/Kanbas/Courses/1238/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img alt="Hack" src="Images/Hacking.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1239/Home">
              CS1239 Ethical Hacking
            </Link>
            <p className="wd-dashboard-course-title">
              Ethical Hacking
            </p>
            <Link to="/Kanbas/Courses/1239/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img alt="CNN" src="Images/CNN.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1240/Home">
              CS1240 Convoluted Neural Networks
            </Link>
            <p className="wd-dashboard-course-title">
              Convoluted Neural Networks
            </p>
            <Link to="/Kanbas/Courses/1240/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img alt="Java" src="Images/Java.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1241/Home">
              CS1241 Object Oriented Programming with Java
            </Link>
            <p className="wd-dashboard-course-title">
              Object Oriented Programming with Java
            </p>
            <Link to="/Kanbas/Courses/1241/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

