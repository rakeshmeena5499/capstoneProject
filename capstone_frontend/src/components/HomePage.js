import {Link, useNavigate} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import {
  BsFillBookFill,
  BsGithub,
  BsFillShareFill,
  BsFillPersonPlusFill,
  BsFillCpuFill
} from "react-icons/bs";

import {RiLoginBoxLine} from "react-icons/ri";

import styles from "./styles/HomePage.module.css";

import psnLogo from "./assets/psn-logo-large.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Row className={styles.container}>
        
        <Col className={styles.colContainerRight}>
          <div className={styles.colWithButtons}>
            <img src={psnLogo} alt="PSN logo" width={120} className="mb-3" />
            <Row>
              <h1 className="text-success mb-3">See what is happening in the world right now</h1>
            </Row>
            <br />
            <Row>
              <h3 className="text-success mb-3">Join our social network today</h3>
            </Row>{" "}
            <br />
            <Row>
              <Link to="/sign-in" className={styles.linkTextFormat}><Button variant="success" className={`${styles.btnHomePage} mb-3`}>Sign In <RiLoginBoxLine /></Button></Link>
            </Row>
            <Row>
            <Link to="/sign-up" className={styles.linkTextFormat}><Button variant="success" className={styles.btnHomePage}>Sign Up <BsFillPersonPlusFill /></Button></Link>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;