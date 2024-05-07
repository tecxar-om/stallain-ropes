import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as formik from "formik";
import * as yup from "yup";
import axios from "axios";

const ContactUs = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    contactNo: yup.number().required("Contact number is required"),
    name: yup.string().required("name is required"),
    message: yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post("http://localhost:4000/submit-form", values);
      resetForm();
      alert("Form submitted successfully");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 text-left">
          <h1 className="fw-bold">
            <span style={{ color: "#006BB5" }}>Contact</span> with us today
          </h1>
          <p>
            Let's start a conversation to discover comprenhensive solutions for all your rope
            requirements.
          </p>
          <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{
              email: "",
              contactNo: "",
              name: "",
              message: "",
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="mb-3" controlId="validationFormikName">
                  <Form.Label>
                    Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={touched.name && !!errors.name}
                    placeholder="Enter name"
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {touched.name && errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationFormikEmail">
                  <Form.Label>
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={touched.email && !!errors.email}
                    placeholder="Enter email"
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {touched.email && errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationFormikContactNo">
                  <Form.Label>
                    Contact No <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="contactNo"
                    value={values.contactNo}
                    onChange={handleChange}
                    isInvalid={touched.contactNo && !!errors.contactNo}
                    placeholder="Enter contact number"
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {touched.contactNo && errors.contactNo}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationFormikMessage">
                  <Form.Label>
                    Message <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    isInvalid={touched.message && !!errors.message}
                    placeholder="Enter message"
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {touched.message && errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" className="button-class">
                  Get in touch
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="col-lg-6">
          <img
            style={{ width: "100%", height: "auto", maxWidth: "617px", maxHeight: "400px" }}
            src="/contact-us/map.png"
          />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
