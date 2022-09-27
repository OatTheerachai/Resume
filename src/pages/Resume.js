import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/resume.css";
import { FaUserGraduate, FaBriefcase } from "react-icons/fa";
import { DataTooltip } from "../constants/DataTooltip";
import Tooltip from "../components/Tooltip";

const Resume = () => {
  return (
    <Container>
      <h2 className="title__separate">Resume</h2>
      {/* Education */}
      <div className="box__title">
        <i className="icon-box">
          <FaUserGraduate />
        </i>
        <span>Education</span>
      </div>
      <div className="timeline">
        {/* item */}
        <li className="timeline__item">
          <h5 className="title timeline__title">Thammasat University</h5>
          <span className="timeline__period">2017 — 2021</span>
          <p className="timeline__description">
            Bachelor of software engineering at Thammasat University Programs of
            Innovative Engineering
          </p>
        </li>
        <li className="timeline__item">
          <h5 className="title title--h4 timeline__title">
            Wisuttikasattree School
          </h5>
          <span className="timeline__period">2015 — 2017</span>
          <p className="timeline__description">Mathematics science program</p>
        </li>
      </div>
      {/*  */}
      <div className="box__title">
        <i className="icon-box">
          <FaBriefcase />
        </i>
        <span>Experience</span>
      </div>
      <div className="timeline">
        <li className="timeline__item">
          <h5 className="title timeline__title">The Assistech Co,Ltd</h5>
          <span className="timeline__period">2021 — present</span>
          <p className="timeline__description">
            My job as Frontend developer is developing Website and Web
            Application,as for the format of the job, it will be a Queue System
            and backoffice using react,redux,nodejs,php and javascript(jquery)
          </p>
        </li>
        <li className="timeline__item">
          <h5 className="title timeline__title">Tabsoft Co,Ltd</h5>
          <span className="timeline__period">
            Intern June 2020 — August 2020
          </span>
          <p className="timeline__description">
            Web applications have a login to choose the date to reserve the
            queue. By choosing to choose from the calendar Then the system will
            have Booking numbers, detail, and QR code.
          </p>
        </li>
      </div>
      <Row>
        <h4 className="title">My Skills</h4>
        <Col xs={12} className="d-flex flex-row flex-wrap position-relative">
          {DataTooltip.map((data, index) => (
            <Tooltip
              key={index}
              color={data.color}
              icon={data.icon}
              title={data.title}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
