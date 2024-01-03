import React, { useState, useEffect } from 'react';
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

    //Data Binding:
    const [showData, setShowData] = useState(null);
    useEffect(() => {
        fetch('http://192.168.1.192/ManagerApi/GetStaffAllDataAndImages')
            .then((data) => data.json())
            .then((data) => {
                // console.log("data",data);
                console.log("Success in getting data", data);
                setShowData(data);  // showData=data;
            })
    }, [])
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

            {/* Table Data Binding: */}
            {
                showData ?
                    (<Table striped hover responsive className='tableHead my-3 table-dark'
                    >
                        <thead>
                            <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
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
                                <th>Download As</th>
                            </tr>
                        </thead>
                        {
                            showData.map((showData, i) => {
                                console.log("showData", showData)
                                return (
                                    <tbody className='table-light' key={i}>
                                        <tr className='text-center'>
                                            <td>{showData.playerData.supportStaffName ? showData.playerData.supportStaffName : '-'}</td>
                                            <td>3</td>
                                            <td>{showData.playerData.alldataStaffId ? showData.playerData.alldataStaffId : '-'}</td>
                                            <td>5</td>
                                            <td>{showData.playerData.designation ? showData.playerData.designation : '-'}</td>
                                            <td>{showData.playerData.mobileNo ? showData.playerData.mobileNo : '-'}</td>
                                            <td>{showData.playerData.emailId ? showData.playerData.emailId : '-'}</td>
                                            <td>{showData.playerData.specialization ? showData.playerData.specialization : '-'}</td>
                                            <td>{showData.playerData.jerseyNo ? showData.playerData.jerseyNo : '-'}</td>
                                            <td>{showData.playerData.club ? showData.playerData.club : '-'}</td>
                                            <td className='d-flex'><Button variant="primary" className='me-1'><i className="bi bi-binoculars"></i></Button><Button variant="success" className='me-1'><i className="bi bi-pencil-square"></i></Button><Button variant="warning"><i className="bi bi-trash"></i></Button></td>
                                            <td><Button variant="dark" className='me-1'><i className="bi bi-filetype-pdf"></i></Button><Button variant="dark" className='me-1'><i className="bi bi-file-earmark-spreadsheet"></i></Button></td>
                                        </tr>
                                    </tbody>

                                )
                            })
                        }
                    </Table>) : (<h4>Loading...</h4>)
            }
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