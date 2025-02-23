import React from "react";
import { VscBellDot } from "react-icons/vsc";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <a className="navbar-brand me-auto" href="#">
          <span className="text-success">H</span>OURS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#"
                style={{ borderBottom: "3px solid green", marginTop: "0px" }}
              >
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Clients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Time
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Reports
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2 ms-auto">
          <a className="nav-link text-light" href="#">
            <VscBellDot size={30} style={{ color: "white" }} />
          </a>
          <img
            src="https://media.istockphoto.com/id/1664876848/photo/happy-crossed-arms-and-portrait-of-asian-man-in-studio-smile-for-career-work-and-job.jpg?s=612x612&w=0&k=20&c=2vYaOMnlmzMEmB441bTWHUyeFXRIh56wE79QAhVWYBk="
            alt=""
            className="rounded-circle "
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          <a className="nav-link text-light" href="#">
            Mario
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
