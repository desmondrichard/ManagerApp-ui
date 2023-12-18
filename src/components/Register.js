import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image0 from 'react-bootstrap/Image';
import { Link, NavLink } from 'react-router-dom';
import Image1 from 'react-bootstrap/Image';
import Image2 from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import './Register.css';
import { useFormik } from 'formik';

// Validation:
const validate = values => {
    const errors = {};
    if (!values.fullname) {
        errors.fullname = "*Required";
    } else if (values.fullname.length < 3) {
        errors.fullname = "Full name should be at least 3 characters long"
    }
    if (!values.username) {
        errors.username = "*Required";
    } else if (values.fullname.length > 20) {
        errors.username = "Username must not exceed 20 characters.";
    } else if (!/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(values.username)) {
        errors.username = "Enter Valid username";
    }
    if (!values.email) {
        errors.email = "*Required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "*Invalid email address";
    }
    if (!values.dob) {
        errors.dob = "*Required";
    }
    if (!values.mobile) {
        errors.mobile = "*Required";
    } else if (isNaN(Number(values.mobile))) {
        errors.mobile = "Must be a number.";
    } else if (values.mobile.length !== 10) {
        errors.mobile = "Mobile number must be 10 digits.";
    }
    if (!values.password) {
        errors.password = "*Required";
    } else if (values.password.length < 8) {
        errors.password = "Minimum 8 characters required";
    }
    if (!values.confirmpassword) {
        errors.confirmpassword = "*Required";
    } else if (values.password !== values.confirmpassword) {
        errors.confirmpassword = "Passwords do not match.";
    }
    return errors;
}

function Register() {
    // const [email, setEmail] = useState();
    // const [pwd, setPwd] = useState();
    // const [name, setName] = useState();
    // const [dob, setDob] = useState();
    // const [number, setNumber] = useState();

    // password show/hide:
    const [visible, setVisible] = useState(true);
    const [visible1, setVisible1] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        alert('signup success');
    }

    // Formik:
    const formik = useFormik({
        initialValues: {
            fullname: '',
            username: '',
            email: '',
            dob: '',
            mobile: '',
            password: '',
            confirmpassword: ''
        },
        validate,
        onSubmit: values => {
            alert(`Hello!,${values.fullname}you have successfully signed up`);
        }
    });
    // console.log(name);
    // console.log(formik.values.fullname);
    // console.log(formik.values);

    return (
        <div className='pt-1 '>
            <Card className='mx-3 cardBg'>
                <Row className='row11parent'>
                    <Col md={7}>
                        <Image0 src={require('../assets/mountain2.jpg')} fluid className='borderRadius d-none d-md-block' style={{ height: '100%' }}></Image0>
                    </Col>
                    <Col md={5}>
                        <Container className='pt-1'>
                            <Form onSubmit={formik.handleSignup}>
                                <legend className='text-center ' style={{ fontWeight: 'bold' }}>Register</legend>
                                <hr style={{ border: '2px solid #198754' }} />

                                {/*Full Name Field: */}
                                <Form.Group className="mb-1" controlId="Name">
                                    <Form.Label className='font'>Full Name</Form.Label>
                                    <Form.Control size="sm" className='shadow-none' type="text" name='fullname' placeholder="Enter Your Full Name" value={formik.values.fullname} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    {
                                        formik.touched.fullname && formik.errors.fullname ? <span className='span'>{formik.errors.fullname}</span> : null
                                    }
                                </Form.Group>

                                {/*Username Field: */}
                                <Form.Group className="mb-1" controlId="username">
                                    <Form.Label className='font'>UserName</Form.Label>
                                    <Form.Control size="sm" className='shadow-none' type="text" name='username' placeholder="Enter Your UserName" value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    {
                                        formik.touched.username && formik.errors.username ? <span className='span'>{formik.errors.username}</span> : null
                                    }
                                </Form.Group>

                                {/* Email Field: */}
                                <Form.Group className="mb-1" controlId="formGroupEmail">
                                    <Form.Label className='font'>Email address</Form.Label>
                                    <Form.Control size="sm" className='shadow-none' type="email" placeholder="Enter email" name='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    {
                                        formik.touched.email && formik.errors.email ? <span className='span'>{formik.errors.email}</span> : null
                                    }
                                </Form.Group>

                                {/* DOB Field: */}
                                <Form.Group className="mb-3" controlId="DOB">
                                    <Form.Label className='font'>D.O.B</Form.Label>
                                    <Form.Control size="sm" className='shadow-none' type="date" placeholder="Enter Date of Birth" name='dob' value={formik.values.dob} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    {
                                        formik.touched.dob && formik.errors.dob ? <span className='span'>{formik.errors.dob}</span> : null
                                    }
                                </Form.Group>

                                {/* Mobile Field: */}
                                <Form.Group className="mb-1" controlId="Phone">
                                    <Form.Label className='font'>Phone Number</Form.Label>
                                    <InputGroup className='number'>
                                        <InputGroup.Text id="inputGroup-sizing-sm">+91
                                            <Form.Control size="sm" className='paddingStyle shadow-none' type="text" placeholder="Enter Phone Number" name='mobile' value={formik.values.mobile} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                        </InputGroup.Text>
                                    </InputGroup>
                                    {
                                        formik.touched.mobile && formik.errors.mobile ? <span className='span'>{formik.errors.mobile}</span> : null
                                    }
                                </Form.Group>

                                {/* Password Field: */}
                                <Form.Group className="mb-1" controlId="Password">
                                    <Form.Label className='font'>Password </Form.Label>
                                    <div className='pwd' >
                                        <Form.Control size="sm" className='shadow-none' type={
                                            visible ? "password" : "text"}
                                            placeholder="Password" name='password' value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                        <div className='p-2 pwd-toggle' onClick={() => setVisible(!visible)}>
                                            {visible ? <Image1 className='img1' style={{ height: '18px' }} src={require('../assets/eye-close.png')}></Image1> :
                                                <Image2 className='img1' style={{ height: '14px' }} src={require('../assets/eye-open.png')}></Image2>}
                                        </div>
                                    </div>
                                    {
                                        formik.touched.password && formik.errors.password ? <span className='span'>{formik.errors.password}</span> : null
                                    }
                                </Form.Group>

                                {/* ConfirmPassword Field: */}
                                <Form.Group className="mb-1" controlId="ConfirmPassword">
                                    <Form.Label className='font'>Confirm Password</Form.Label>
                                    <div className='pwd' >
                                        <Form.Control size="sm" className='shadow-none' type={
                                            visible1 ? "password" : "text"} name='confirmpassword' placeholder="Confirm Password" value={formik.values.confirmpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                        <div className='p-2 pwd-toggle' onClick={() => setVisible1(!visible1)}>
                                            {visible1 ? <Image1 className='img1' style={{ height: '18px' }} src={require('../assets/eye-close.png')}></Image1>
                                                : <Image2 className='img1' style={{ height: '14px' }} src={require('../assets/eye-open.png')}></Image2>
                                            }
                                        </div>
                                    </div>
                                    {
                                        formik.touched.confirmpassword && formik.errors.confirmpassword ? <span className='span'>{formik.errors.confirmpassword}</span> : null
                                    }
                                </Form.Group>
                                {/* Submit Button: */}
                                <div className="d-grid gap-2 my-2">
                                    <NavLink to='/'> <Button type='submit' value='submit' variant="outline-success" className='mt-2 w-100 fw-bold fs-4' size="sm" onClick={(e) => handleSubmit(e)}>
                                        Sign Up
                                    </Button>
                                    </NavLink>
                                </div>
                            </Form>
                            <div className='text-center py-2'>
                                <p>Already Have an Account ? <span className='text-danger signUp'><Link to='/'>Login</Link> </span></p>
                            </div>

                        </Container>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Register