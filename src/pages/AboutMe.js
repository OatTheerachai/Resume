import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/about.css";
import { CgWebsite } from "react-icons/cg";
import { FaReact, FaNode, FaMobileAlt, FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiMicrosoftsqlserver, SiRedux } from "react-icons/si";
import Logo from "../assets/images/uikitten.png";
import { Interests } from "../constants/interest";
import { Mobile, Web } from "../constants/AboutMeSkill";
import Tooltip from "../components/Tooltip";

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Col xl={12} md={12} xs={12}>
          <h2 className="title__separate">About Me</h2>
          <p className="mb-4">
            I'm Frontend developer, working in web development and web
            application. I enjoy turning complex design into simple, beautiful
            and intuitive designs.
          </p>
        </Col>
      </Row>
      <h4 className="title">What I'm Doing</h4>
      <Row className="justify-content-around">
        <Col lg={12} className="box__skill">
          <i className="icon">
            <CgWebsite />
          </i>
          <h3>Web Development</h3>
          <div className="icon__stack">
            {Web.map((data, index) => (
              <Tooltip
                key={index}
                color={data.color}
                icon={data.icon}
                title={data.title}
              />
            ))}
          </div>
        </Col>
        <Col lg={12} className="box__skill mb-4">
          <i className="icon">
            <FaMobileAlt />
          </i>
          <h3>Mobile Application</h3>
          <div className="icon__stack">
            {Mobile.map((data, index) => (
              <Tooltip
                key={index}
                color={data.color}
                icon={data.icon}
                title={data.title}
              />
            ))}
          </div>
        </Col>
        <h4 className="title">Interests</h4>
        <Col md={12} className="interests">
          {Interests.map((data, index) => (
            <div className="badge interest-item" key={index}>
              <span>{data.title}</span>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
