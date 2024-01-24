import React from 'react';
import "./page.properties.css";
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'

export default function Addpagemodel({ page, setPage, opnePageModel }) {

    const [show, setShow] = React.useState(false);
    
    const [formData, setFormData] = React.useState({
        addHeaderComponent: true,
        addSidebarComponent: true,
        pageName: '',
        pageURL: '',
        bgColor: '#d9d9d9',
        textColor: '#000000',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingPageWithHeader = page.find((p) => p.components.headercomponent);

        const newPage = {
            components: {
                headercomponent: formData.addHeaderComponent
                    ? { ...existingPageWithHeader?.components.headercomponent }
                    : {},
                sidebarcomponent: formData.addSidebarComponent ? {} : {},
            },
            id: Math.max(...page.map((item) => item.id), 0) + 1,
            mainPageStyles: {
                bgColor: formData.bgColor,
                color: formData.textColor,
                fontSize: 5,
                margin: [0, 0],
                padding: [0, 0],
            },
            pageName: formData.pageName,
            pageLink: formData.pageURL || '/',
        };

        setPage((prevPage) => [...prevPage, newPage]);
        setShow(false);
        setFormData({
            addHeaderComponent: true,
            addSidebarComponent: true,
            pageName: '',
            pageURL: '',
            bgColor: '#d9d9d9',
            textColor: '#000000',
        });
    };
    return (
        <>

            <Button className='submitbutton' onClick={() => setShow(true)}> Add page</Button>
            <Modal show={show} size='lg' onHide={() => setShow(false)}>
                <div className="topborder"></div>
                <Card className="shadow p-2">
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <h6>Page Properties</h6>

                            <div className="firstblock mb-2">
                                <Form.Label className="mb-0">Add common component</Form.Label>
                                <div className="firstblock gap-1">
                                    <input
                                        type="checkbox"
                                        name="addHeaderComponent"
                                        checked={formData.addHeaderComponent}
                                        onChange={handleInputChange}
                                    />
                                    <label>Header component</label>
                                </div>
                                <div className="firstblock gap-1">
                                    <input
                                        type="checkbox"
                                        name="addSidebarComponent"
                                        checked={formData.addSidebarComponent}
                                        onChange={handleInputChange}
                                    />
                                    <label>Sidebar component</label>
                                </div>
                            </div>

                            <div className="d-flex gap-3 mb-3">
                                <div className="d-grid w-100">
                                    <Form.Label>Page Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="pageName"
                                        value={formData.pageName}
                                        onChange={handleInputChange}
                                        placeholder="Enter page name"
                                    />
                                </div>
                                <div className="d-grid w-100">
                                    <Form.Label>Page URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="pageURL"
                                        value={formData.pageURL}
                                        onChange={handleInputChange}
                                        placeholder="Enter page URL"
                                    />
                                </div>
                            </div>

                            <Form.Label className="fw-bold">MainPage Styles</Form.Label>
                            <div className="firstblock">
                                <div className="firstblock gap-1 mb-3">
                                    <input
                                        type="color"
                                        name="bgColor"
                                        value={formData.bgColor}
                                        onChange={handleInputChange}
                                    />
                                    <label>Background color</label>
                                </div>
                                <div className="firstblock gap-1 mb-3">
                                    <input
                                        type="color"
                                        name="textColor"
                                        value={formData.textColor}
                                        onChange={handleInputChange}
                                    />
                                    <label>Text color</label>
                                </div>
                            </div>

                            <div className="d-grid">
                                <Button className="submitbutton" type="submit">
                                    Create page
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Modal>
        </>
    )
}
