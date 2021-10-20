import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../Header/Header.css'

const Footer = () => {
    return (
        <div>
            <div className='footer mt-5 text-light bg-dark p-3'>
                <Row xs={1} md={4} xl={4} className="g-4">
                    <Col>
                        <Card.Body>
                            <Card.Title> <h3>Contact Information</h3> </Card.Title>
                            <hr />
                            <Card.Text>
                                <p>1675/A, O.R Nizam Road Chittagong Bangladesh</p>
                                <p> <a href="/">http://cscrbd.com/</a></p>
                                <p> <a href="/">info@cscrbd.com</a></p>
                                <p>031-656565</p>
                                <div>
                                    <i className="fab fa-facebook-f p-2"></i>
                                    <i className="fab fa-twitter p-2"></i>
                                    <i className="fab fa-instagram p-2"></i>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title> <h3>Doctors</h3> </Card.Title>
                            <hr />
                            <Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <ul>
                                            <ol>
                                                <p><a href="/">Dr. Md. Gofranul Hoque</a></p><hr />
                                                <p><a href="/">Dr. S. M. Tariq</a></p><hr />
                                                <p><a href="/">Dr. Md. Qumrul Ahsan.</a></p><hr />
                                                <p><a href="/">Dr. Md. Ibrahim Chowdhury</a></p><hr />
                                            </ol>
                                        </ul>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title> <h3>Services</h3> </Card.Title>
                            <hr />
                            <Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <ul>
                                            <ol>
                                                <p><a href="/home">IMPLANTS</a></p><hr />
                                                <p><a href="#doctors">DENTISTRY</a></p><hr />
                                                <p><a href="#clients">VENEERS</a></p><hr />
                                                <p><a href="#solutions">TEETH WHITENING</a></p><hr />
                                            </ol>
                                        </ul>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <div>
                            <h3 className='pt-3'>Contact Us</h3>
                            <hr />
                            <form>
                                <div class="form-group">
                                    <label className='p-2' for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label  className='p-2' for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div className='p-4'>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                                </form>
                        </div>
                    </Col>
                </Row>
                <hr />
            <p> <small className='text-light'>Doctor's Dental Care &copy; 2021 | All Rights Reserved</small> </p>
            </div>
        </div>
    );
};

export default Footer;