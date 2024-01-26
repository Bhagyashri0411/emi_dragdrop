import React, { useEffect } from "react";
// 8080544375
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "./login.model.css"
import { ToastContainer, toast } from "react-toastify";
import Loadercomponent from "../CommonComponents/Loadercompoent";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../../Redux/Action";

export default function Login({location, history}) {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, password]);



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(userName, password))
    };
    return (
        <Container>
            <ToastContainer />
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                {loading ? <Loadercomponent /> :
                    <Col md={8} lg={5} xs={12}>
                        <div className="topborder"></div>
                        <Card className="shadow p-2">
                            <Card.Body>
                                <h2 className="fw-bold mb-5 text-center text-uppercase">Login</h2>
                                <Form onSubmit={handleSubmit}>
                                    <div className="d-grid mb-3">
                                        <Form.Label>
                                            Username
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Username*" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                    </div>

                                    <div className="d-grid mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password*" value={password} onChange={(e)=> setPassword(e.target.value)} />
                                    </div>
                                    <div className="d-grid">
                                        <Button className="submitbutton" type="submit">
                                            Login
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                }
            </Row>
        </Container>
    );
}