import React, { useState, useRef } from 'react';
import './DynamicTextFields.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Country, State, City } from 'country-state-city';
import { useEffect } from "react";
import Select from "react-select";
import Row from 'react-bootstrap/Row';
function DynamicTextFields() {
    const [isFocused, setIsFocused] = useState(false); //initially other fields wont be displayed
    const inputRef = useRef(null);
    // 
    // country-state-city:
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    useEffect(() => {
        console.log(selectedCountry);
        console.log(selectedCountry?.isoCode);
        console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
    }, [selectedCountry]);


    const handleFocus = () => {
        setIsFocused(true);
    };

    // const handleBlur = () => {
    //     setIsFocused(true);
    // };                          

    return (
        // flex used
        <div>
            <Row className='row1'>
                <Col xs={12} lg={3} className='col'>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            id="staffAddress"
                            type="text"
                            placeholder="address"
                            name="staffAddress"
                            ref={inputRef}
                            onFocus={handleFocus}
                        // onBlur={handleBlur}
                        />
                        <label htmlFor="staffAddress" className='text-muted'>ADDRESS*</label>
                    </Form.Floating>
                </Col>
                {isFocused && (
                    <>
                        <Col xs={12} lg={3} className='col'>
                            <Form.Floating className="mb-2">
                                <Form.Control
                                    id="address1"
                                    type="text"
                                    placeholder="address1"

                                />
                                <label htmlFor="address1" className='text-muted'>ADDRESS LINE 1</label>
                            </Form.Floating>
                        </Col>
                        <Col xs={12} lg={3} className='col'>
                            <Form.Floating className="mb-2">
                                <Form.Control
                                    id="address2"
                                    type="text"
                                    placeholder="address2"
                                />
                                <label htmlFor="address2" className='text-muted'>ADDRESS LINE 2</label>
                            </Form.Floating>
                        </Col>
                        <Col xs={12} lg={3} className='col' >
                            <Form.Floating className="mb-2">
                                <Form.Control
                                    id="address3"
                                    type="text"
                                    placeholder="address3"

                                />
                                <label htmlFor="address3" className='text-muted'>ADDRESS LINE 3</label>
                            </Form.Floating>
                        </Col>

                        {/* country-state-city: */}
                        <Col xs={12} lg={3} className='col'>
                            <label htmlFor="country">Country:</label>
                            <Select className="dynamicSelect" style={{ zIndex: 100, outline: 'none', border: 'none' }}
                                options={Country.getAllCountries()}
                                getOptionLabel={(options) => {
                                    return options["name"];
                                }}
                                getOptionValue={(options) => {
                                    return options["name"];
                                }}
                                value={selectedCountry}
                                onChange={(item) => {
                                    setSelectedCountry(item);
                                }}
                            />

                        </Col>
                        <Col xs={12} lg={3} className='col'>
                            <label htmlFor="state">State:</label>
                            <Select style={{ zIndex: 100 }}
                                options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
                                getOptionLabel={(options) => {
                                    return options["name"];
                                }}
                                getOptionValue={(options) => {
                                    return options["name"];
                                }}
                                value={selectedState}
                                onChange={(item) => {
                                    setSelectedState(item);
                                }}
                            />
                        </Col>
                        <Col xs={12} lg={3} className='col '>
                            <label htmlFor="city">City:</label>
                            <Select className="dynamicSelect" style={{ zIndex: 100 }}
                                options={City.getCitiesOfState(
                                    selectedState?.countryCode,
                                    selectedState?.isoCode
                                )}
                                getOptionLabel={(options) => {
                                    return options["name"];
                                }}
                                getOptionValue={(options) => {
                                    return options["name"];
                                }}
                                value={selectedCity}
                                onChange={(item) => {
                                    setSelectedCity(item);
                                }}
                            />
                        </Col>

                    </>
                )}
            </Row>
        </div>
    );
}

export default DynamicTextFields;
