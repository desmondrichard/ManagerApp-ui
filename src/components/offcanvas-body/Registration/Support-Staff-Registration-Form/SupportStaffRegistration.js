import React, { useState } from 'react';
import './SupportStaffRegistration.css';
import Header from '../../../Header';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SearchButton from '../../../ModalComponents/SearchButton';
import ExploreOptions from '../../../ModalComponents/ExploreOptions';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import PlayerRegistration from '../PlayerRegistration';
import StaffPersonalInformation from './Support-Staff-Modal-Forms/StaffPersonalInformation';
import StaffKittingDetails from './Support-Staff-Modal-Forms/StaffKittingDetails';
import StaffIDCardDetails from './Support-Staff-Modal-Forms/StaffIDCardDetails';
import StaffBankAccountDetails from './Support-Staff-Modal-Forms/StaffBankAccountDetails';
import StaffFoodInformation from './Support-Staff-Modal-Forms/StaffFoodInformation';
import StaffTravelInformation from './Support-Staff-Modal-Forms/StaffTravelInformation';
import StaffPreviousRepresentation from './Support-Staff-Modal-Forms/StaffPreviousRepresentation';
import StaffEmergencyContact from './Support-Staff-Modal-Forms/StaffEmergencyContact';
import StaffSocialMediaInfo from './Support-Staff-Modal-Forms/StaffSocialMediaInfo';
function SupportStaffRegistration(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Header />
            <div className='text-center'>
                <div className='playersList'>STAFFS LIST</div>

                {/* modal start: */}
                <>
                    <Button variant="primary" onClick={handleShow} className='mt-3 addPlayers'>
                        ADD STAFFS
                    </Button>

                    <Modal centered
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        className='modal-xl'
                    >
                        <Modal.Header closeButton style={{ backgroundColor: 'black' }}>
                            <Modal.Title className='text-white'><h5>SUPPORT STAFFS FORM</h5></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/* Accordion:1 */}
                            <StaffPersonalInformation />
                            {/* Accordion:2 */}
                            <StaffKittingDetails />
                            {/* Accordion:3 */}
                            <StaffIDCardDetails />
                            {/* Accordion:4 */}
                            <StaffBankAccountDetails />
                            {/* Accordion:5 */}
                            <StaffFoodInformation />
                            {/* Accordion:6 */}
                            <StaffTravelInformation />
                            {/* Accordion:7 */}
                            <StaffPreviousRepresentation />
                            {/* Accordion:8 */}
                            <StaffEmergencyContact />
                            {/* Accordion:9 */}
                            <StaffSocialMediaInfo />
                        </Modal.Body>
                        {/* Footer: */}
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                {/* modal end: */}
                {/* Search,Select Components: */}
                <Container fluid className='py-2 mt-3 bg-light'>
                    <Row>
                        <Col md={2} sm={4}>
                            <SearchButton />
                        </Col>
                        <Col md={2} sm={3}>
                            <ExploreOptions />
                        </Col>
                        <Col md={7}></Col>
                    </Row>
                </Container>
            </div>
            <Table striped hover responsive className='tableHead my-3 table-dark'
            >
                <thead>
                    <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                        <th >
                            <Form.Check aria-label="option 1" label="Select to Download All" />
                        </th>
                        <th >Staff Image</th>
                        <th>Staff Name</th>
                        <th>Image ID</th>
                        <th>Player ID</th>
                        <th>Player Image</th>
                        <th>Designation</th>
                        <th>Mobile No</th>
                        <th>Email ID</th>
                        <th>Specialization</th>
                        <th>jersey No</th>
                        <th>Club</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='table-light'>
                    <tr className='text-center'>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>11</th>
                        <th>12</th>
                        <th className='p-1 d-flex'><Button variant="primary" className='me-1'><i className="bi bi-binoculars"></i></Button><Button variant="success" className='me-1'><i className="bi bi-pencil-square"></i></Button><Button variant="warning"><i className="bi bi-trash"></i></Button></th>
                    </tr>

                </tbody>
            </Table>
        </div>
    )
}

export default SupportStaffRegistration

function Apps() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <PlayerRegistration
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

<Apps />