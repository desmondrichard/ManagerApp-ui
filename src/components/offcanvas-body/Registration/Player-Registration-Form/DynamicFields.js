import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DynamicFields = () => {
    const [fields, setFields] = useState([]);
    const [optionsLabel, setOptionsLabel] = useState('');

  
    const addFields = () => {
        const newFieldSet = {  
            id: fields.length,
            radioLabel: optionsLabel || 'Options',
            radios: [
                { id: `radioA-${fields.length}`, label: 'Provided' },
                { id: `radioB-${fields.length}`, label: 'Not Provided'},
            ],
            text: { id: `text-${fields.length}`, placeholder: 'Enter text' },
            
        };
        setFields([...fields, newFieldSet]);
        setOptionsLabel(''); // Clear input after adding fields
    };

    return (
        <div>
            <Form.Group controlId="optionsLabel">
                <Form.Label>Enter Label for Options:</Form.Label>
                <Form.Control
                    type="text"
                    value={optionsLabel}
                    onChange={(e) => setOptionsLabel(e.target.value)}
                />
            </Form.Group>
            <div className='text-center my-2' >
                <Button onClick={addFields}><i className="bi bi-plus fa-8x" style={{ fontSize: '20px', borderRadius: '30px' }}></i></Button>
            </div>
            <Form>
                {fields.map((field) => (
                    <div key={field.id} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginBottom: '10px' }}>
                            <Row>
                                <Col md={6}>
                                    <Form.Label>{field.radioLabel}</Form.Label>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        {field.radios.map((radio) => (
                                            <div key={radio.id} style={{ marginRight: '10px' }}>
                                                <Form.Check
                                                    type="radio"
                                                    id={radio.id}
                                                    label={radio.label}
                                                    name={`radioGroup-${field.id}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <Form.Label>QUANTITY</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id={field.text.id}
                                    />
                                </Col>
                            </Row>

                        </div>
                    </div>
                ))}
            </Form>
        </div>
    );
};

export default DynamicFields;