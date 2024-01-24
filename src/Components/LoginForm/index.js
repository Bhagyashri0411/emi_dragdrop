import React from "react";
// 8080544375
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "./login.model.css"
import { ToastContainer, toast } from "react-toastify";
import Loadercomponent from "../CommonComponents/Loadercompoent";

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setLoading(true);
            setTimeout(() => {
                toast.error('Please fill the information', { draggable: true });
                setLoading(false)
            }, 2000);
        }
        else
            toast.success('Submit form successfully', { draggable: true });

        setEmail('');
        setPassword('');

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
                                            Email address
                                        </Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </div>

                                    <div className="d-grid mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
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