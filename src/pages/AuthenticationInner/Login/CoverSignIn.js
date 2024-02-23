import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Input, Label, Row ,Button} from 'reactstrap';
import AuthSlider from '../authCarousel';


const CoverSignIn = () => {
document.title=" SignIn ";
    return (
        <React.Fragment>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
              
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Card className="overflow-hidden">
                                    <Row className="g-0">
                                        <AuthSlider />

                                        <Col lg={6}>
                                            <div className="p-lg-5 p-4">
                                                <div>
                                                    <h5 className="text-primary">Welcome Back !</h5>
                                                    
                                                </div>

                                                <div className="mt-4">
                                                    <form action="/">

                                                        <div className="mb-3">
                                                            <Label htmlFor="username" className="form-label">Username</Label>
                                                            <Input type="text" className="form-control" id="username" placeholder="Enter username" required/>
                                                        </div>

                                                        <div className="mb-3">
                                                            <div className="float-end">
                                                                <Link to="/auth-pass-reset-cover" className="text-muted">Forgot password?</Link>
                                                            </div>
                                                            <Label className="form-label" htmlFor="password-input">Password</Label>
                                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                                <Input type="password" className="form-control pe-5 password-input" placeholder="Enter password" id="password-input"  required/>
                                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                            </div>
                                                        </div>

                                                        <div className="form-check">
                                                            <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                            <Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Label>
                                                        </div>

                                                        <div className="mt-4">
                                                            <Button color="success" className="w-100" type="submit">Sign In</Button>
                                                        </div>

                                                    

                                                    </form>
                                                </div>

                                                <div className="mt-5 text-center">
                                                    <p className="mb-0">Don't have an account ? <a href="/auth-signup-cover" className="fw-semibold text-primary text-decoration-underline"> SignUp</a> </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </React.Fragment>
    );
};

export default CoverSignIn;