import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/sidebar.css";
import Profile from "../assets/images/profile.jpg";
import { FaGithub, FaAngleDoubleDown } from "react-icons/fa";
import { Contact } from "../constants/data";
import { Outlet, NavLink } from "react-router-dom";
import Loading from "./Loading";

const Sidebar = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 2500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <Container className="overflow-auto">
      {loading ? (
        <Loading />
      ) : (
        <Row className="box__item align-items-start justify-content-evenly">
          <Col
            xl={3}
            md={12}
            xs={12}
            className="sidebar box-outer sticky-column fadeIn first"
          >
            <div className="avatar__box">
              <img src={Profile} alt="" className="img-fluid" />
            </div>
            <div className="text-center mt-4">
              <h3 className="name">Theerachai Khakhanmalee</h3>
              <div className="badge">Frontend Developer</div>
            </div>
            <div
              className={`${
                showDetail ? "show-profile" : ""
              } d-md-none d-xs-block text-center mt-4 mb-0 icon-show-menu`}
              onClick={() => setShowDetail(!showDetail)}
            >
              <FaAngleDoubleDown />
            </div>
            <ul className={showDetail ? "show" : undefined}>
              <div className="separation" />
              {Contact.map((data, index) => (
                <li key={index}>
                  <span className="icon__box">{data.icon}</span>
                  <div className="info__box">
                    <span>{data.title}</span>
                    <i>{data.value}</i>
                  </div>
                </li>
              ))}
              <div className="separation" />
              <div className="social__media text-center">
                {/* <i>
                  <FaFacebookF />
                </i>
                <i>
                  <FaInstagram />
                </i> */}
                <a href="https://github.com/OatTheerachai">
                  <FaGithub />
                </a>
              </div>
            </ul>
          </Col>
          <Col
            xl={8}
            md={12}
            xs={12}
            className="content box-outer fadeIn second"
          >
            <nav className="nav-resume">
              <ul>
                <li>
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="resume"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                  >
                    Resume
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="profile"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                  >
                    Profile
                  </NavLink>
                </li> */}
              </ul>
            </nav>
            <main>
              <Outlet />
            </main>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Sidebar;
