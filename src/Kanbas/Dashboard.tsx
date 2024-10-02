import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

        <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/Images/react.webp" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/Images/C++.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1236 C++ Programming
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    C++ Programming
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/Images/Python.png" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1238 Python Programming
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Python Programming
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/Images/ML.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1239 Machine Learning
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Machine Learning
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="Images/Game.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1240 Game Design
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Game Design
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="Images/Hacking.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1241 Ethical Hacking
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Ethical Hacking
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="Images/CNN.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1242 Convoluted Neural Networks
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Convoluted Neural Networks
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col d-flex" style={{ width: "300px" }}>
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="Images/Java.jpg" width="100%" height={160} />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1243 Object Oriented Programming with Java
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Object Oriented Programming with Java
                  </p>
                  <div className="mt-auto">
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}