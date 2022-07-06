import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

import { RiLoginBoxLine } from "react-icons/ri";

import styles from "./styles/SignIn.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [resData, setResData] = useState(null);

  let navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  async function postSignInInfo(inputData) {
    const response = await axios({
      method: "post",
      url: "localhost:8080/api/auth/signin",
      data: {
        email: inputData.email,
        password: inputData.password,
      },
    });
    
    if (response.data !== null && response.data.status === "fail") {
      showWarningToast(response.data.message);
    }
    
    if (response.data !== null && response.data.status === "success") {
      setResData(response.data);
      
      localStorage.setItem("psnUserId", response.data.payload.user.id);
      localStorage.setItem("psnUserFirstName", response.data.payload.user.firstName);
      localStorage.setItem("psnUserLastName", response.data.payload.user.lastName);
      localStorage.setItem("psnUserEmail", response.data.payload.user.email);
  
      localStorage.setItem("psnToken", response.data.payload.token);
      navigate("/newsfeed");
    }

  }

  function showWarningToast(inputMessage) {
    toast.warn("Invalid email or password", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    console.log("toast");
  }

  return (
    <Container fluid className={styles.container}>
      <ToastContainer />
      <Formik
        validationSchema={schema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, {setSubmitting}) => {
          postSignInInfo(values);
          setSubmitting(false);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isInValid,
          errors,
        }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            className={styles.formContainer}
          >
            <Row className="mb-5 text-center">
              <h1 className="text-success">Sign In</h1>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="signInEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={touched.email && errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="signInPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={touched.password && errors.password}
                />

                <Form.Control.Feedback type="invalid">
                  Please enter your password
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit" variant="success">
              Sign In <RiLoginBoxLine />
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default SignIn;
// import React, { Component } from "react";
// export default function SingIn() {
   
//         return (
//           <form>
//             <h3>Sign In</h3>
//             <div className="mb-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter email"
//               />
//             </div>
//             <div className="mb-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Enter password"
//               />
//             </div>
//             <div className="mb-3">
//               <div className="custom-control custom-checkbox">
//                 <input
//                   type="checkbox"
//                   className="custom-control-input"
//                   id="customCheck1"
//                 />
//                 <label className="custom-control-label" htmlFor="customCheck1">
//                   Remember me
//                 </label>
//               </div>
//             </div>
//             <div className="d-grid">
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </div>
//             <p className="forgot-password text-right">
//               Not an user <a href="/sign-up">Sign Up?</a>
//             </p>
//           </form>
//         )
//       }
    
    
