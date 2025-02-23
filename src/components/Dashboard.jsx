import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaBell, FaSmile } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { PiSquaresFourLight } from "react-icons/pi";
import { SiTicktick } from "react-icons/si";
import { CgDanger } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

import { Line, Pie, Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const revenueData = {
    labels: [
      "19 June",
      "20 June",
      "21 June",
      "22 June",
      "23 June",
      "24 June",
      "25 June",
    ],
    datasets: [
      {
        label: "Total Revenue",
        data: [1000, 2500, 3500, 4500, 5500, 6500, 7000],
        fill: false,
        borderColor: "#17a2b8",
        tension: 0.4,
      },
    ],
  };

  const budgetData = {
    labels: ["Over Budget", "On Budget", "Under Budget"],
    datasets: [
      {
        data: [10, 33, 57],
        backgroundColor: ["#dc3545", "#007bff", "#28a745"],
      },
    ],
  };

  const projectCards = [
    {
      title: "Insurance App",
      company: "Verti",
      budget: "70,000€",
      profitability: "-2,500€",
      progress: "100 hours over Budget!",
      progressColor: "danger",
      image: "https://via.placeholder.com/50",
    },
    {
      title: "Neo",
      company: "Bankia",
      budget: "70,000€",
      profitability: "4,000€",
      progress: "1000 sold hours",
      progressColor: "warning",
      image: "https://via.placeholder.com/50",
    },
    {
      title: "VR Website",
      company: "Barça",
      budget: "70,000€",
      profitability: "4,000€",
      progress: "2000 sold hours",
      progressColor: "info",
      image: "https://via.placeholder.com/50",
    },
    {
      title: "VR Website",
      company: "Barça",
      budget: "70,000€",
      profitability: "4,000€",
      progress: "1100 sold hours",
      progressColor: "success",
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col md={10}>
          <Row>
            <Col md={2}>
              <div className="card rounded">
                <div className="mx-1 mt-1">
                  <PiSquaresFourLight
                    className="h2"
                    style={{ color: "green" }}
                  />
                  <div className="text-center">
                    <h2 className="fw-bold">5</h2>
                    <p>Total Project</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="card rounded">
                <div className="mx-1 mt-1">
                  <SiTicktick className="h2" style={{ color: "green" }} />

                  <div className="text-center">
                    <h2 className="fw-bold">1</h2>
                    <p>Completed</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="card rounded">
                <div className="mx-1 mt-1">
                  <PiSquaresFourLight
                    className="h2"
                    style={{ color: "green" }}
                  />
                  <div className="text-center">
                    <h2 className="fw-bold">3</h2>
                    <p>Ongoing</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={2}>
              <div className="card rounded bg-danger">
                <div className="mx-1 mt-1 ">
                  <CgDanger className="h2" />
                  <div className="text-center">
                    <h2 className="fw-bold">1</h2>
                    <p>Delayed</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="card rounded">
                <div className="mx-1 mt-1">
                  <IoPersonOutline className="h2" style={{ color: "green" }} />
                  <div className="text-center">
                    <h2 className="fw-bold">5</h2>
                    <p>Employees</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <Card body className="shadow-sm h-100">
                <Line data={revenueData} />
              </Card>
            </Col>
            <Col md={4}>
              <Card body className="shadow-sm h-100">
                <Doughnut data={budgetData} />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col
          md={2}
          className="d-flex flex-column justify-content-start bg-white shadow"
          style={{ height: "490px" }}
        >
          <h5>Team Mood</h5>
          {["Andrea", "Alvaro", "Juan", "Jose", "Maria"].map((name, idx) => (
            <card key={idx} body className="shadow-sm my-2 p-1">
              <img
                src="https://media.istockphoto.com/id/1664876848/photo/happy-crossed-arms-and-portrait-of-asian-man-in-studio-smile-for-career-work-and-job.jpg?s=612x612&w=0&k=20&c=2vYaOMnlmzMEmB441bTWHUyeFXRIh56wE79QAhVWYBk="
                alt=""
                className="rounded-circle "
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
              <span className="mx-1">{name}</span>{" "}
              <FaSmile className="text-warning" />
              <input type="range" class="form-range" id="customRange1"></input>
            </card>
          ))}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <span className="fs-2 fw-semibold me-2">Budget Status</span>
          <Button variant="success" className="me-2">
            + Add New Project
          </Button>
          <Button variant="outline-success" className="text-success me-2">
            <FiDownload /> <span className="gap-1"></span>
            Download Report
          </Button>
          <Button variant="outline-success" className="text-success me-2">
            <SlCalender />
            <span className="gap-1"></span>
            dd/mm/yyy - dd/mm/yyy
          </Button>
          <Button variant="outline-success" className="text-success">
            <IoFilterSharp /> <span className="gap-1"></span>
            Filter
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        {projectCards.map((project, index) => (
          <Col md={3} key={index}>
            <Card body className="shadow-sm">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-0">{project.title}</h6>
                  <small>{project.company}</small>
                </div>
                <img
                  src="https://m.blog.hu/te/teologus/image/45_talalkoztam_istennel_teologus_blog_ifjusagi_reggeli_ahitat_sarga_teolgus_iges_kepek_hajas_istvan_teologus_bulyaki_adam.jpg"
                  alt="project"
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <hr />
              <p>Total Budget: {project.budget}</p>
              <p className={`text-${project.progressColor}`}>
                Profitability: {project.profitability}
              </p>
              <div className={`progress bg-light`}>
                <div
                  className={`progress-bar bg-${project.progressColor}`}
                  style={{ width: "100%" }}
                >
                  {project.progress}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
