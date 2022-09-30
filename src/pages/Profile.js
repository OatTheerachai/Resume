import React from "react";
import { Container, Row } from "react-bootstrap";
import "../assets/css/profile.css";

const Profile = () => {
  return (
    <Container>
      <h2 className="title__separate">Profile</h2>
      <Row>
        <div className="profile__box">
          <img
            alt=""
            src={require("../assets/images/ux-ui-design.jpeg")}
            className="img-fluid"
          />
          <span className="text-center mt-2">Name Project</span>
        </div>
        <div className="profile__box">
          <img
            alt=""
            src={require("../assets/images/ux-ui-design.jpeg")}
            className="img-fluid"
          />
          <span className="text-center mt-2">Name Project</span>
        </div>
        <div className="profile__box">
          <img
            alt=""
            src={require("../assets/images/ux-ui-design.jpeg")}
            className="img-fluid"
          />
          <span className="text-center mt-2">Name Project</span>
        </div>
        <div className="profile__box">
          <img
            alt=""
            src={require("../assets/images/ux-ui-design.jpeg")}
            className="img-fluid"
          />
          <span className="text-center mt-2">Name Project</span>
        </div>

        {/* <Col xl={3} sm={5} className="profile__box">
          <img
            alt=""
            src={require("../assets/images/ux-ui-design.jpeg")}
            className="img-fluid"
          />
          <span className="text-center mt-2">Name Project</span>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Profile;
