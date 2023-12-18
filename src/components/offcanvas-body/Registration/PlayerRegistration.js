import React, { useState } from 'react';
import Header from '../../Header';
import './PlayerRegistration.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchButton from '../../ModalComponents/SearchButton';
import ExploreOptions from '../../ModalComponents/ExploreOptions';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import SupportStaffRegistration from './Support-Staff-Registration-Form/SupportStaffRegistration';
import PersonalInformation from './Player-Registration-Form/PersonalInformation';
import ProficiencyForm from './Player-Registration-Form/ProficiencyForm';
import KittingDetailsForm from './Player-Registration-Form/KittingDetailsForm';
import Iddetails from './Player-Registration-Form/Iddetails';
import BankAccountDetails from './Player-Registration-Form/BankAccountDetails';
import FoodInformation from './Player-Registration-Form/FoodInformation';
import Travelinformation from './Player-Registration-Form/Travelinformation';
import RepresentationInfo from './Player-Registration-Form/RepresentationInfo';
import EmergencyContact from './Player-Registration-Form/EmergencyContact';
import SocialMediaInfo from './Player-Registration-Form/SocialMediaInfo';



function PlayerRegistration(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>PLAYERS LIST</div>

        {/* modal start: */}
        <>
          <Button variant="primary" onClick={handleShow} className='mt-3 addPlayers'>
            ADD PLAYERS
          </Button>

          <Modal centered
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className='modal-xl'
          >
            <Modal.Header closeButton style={{ backgroundColor: 'black' }}>
              <Modal.Title className='text-white'><h5>PLAYERS FORM</h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <RegistrationForm /> */}
              {/* Accordion:1 */}
              <PersonalInformation />
              {/* Accordion:2 */}
              <ProficiencyForm />
              {/* Accordion:3 */}
              <KittingDetailsForm />
              {/* Accordion:4 */}
              <Iddetails />
              {/* Accordion:5 */}
              <BankAccountDetails />
              {/* Accordion:6 */}
              <FoodInformation />
              {/*Accordion:7 */}
              <Travelinformation />
              {/* Accordion:8 */}
              <RepresentationInfo />
              {/* Accordion:9 */}
              <EmergencyContact />
              {/* Accordion:10 */}
              <SocialMediaInfo />
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
            <th >Player Image</th>
            <th>Player Name</th>
            <th>Display Name</th>
            <th>Mobile No</th>
            <th>Email Id</th>
            <th>Specialization</th>
            <th>Jersey No</th>
            <th>Club</th>
            <th>Action</th>
            <th>Download As</th>
          </tr>
        </thead>
        <tbody className='table-light'>
          <tr className='text-center'>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td className='d-flex'><Button variant="primary" className='me-1'><i className="bi bi-binoculars"></i></Button><Button variant="success" className='me-1'><i className="bi bi-pencil-square"></i></Button><Button variant="warning"><i className="bi bi-trash"></i></Button></td>
            <td><Button variant="dark" className='me-1'><i className="bi bi-filetype-pdf"></i></Button><Button variant="dark" className='me-1'><i className="bi bi-file-earmark-spreadsheet"></i></Button></td>
          </tr>

        </tbody>
      </Table>
      {/* Sample support staff Registraion Form: */}
      <hr />
      <SupportStaffRegistration />
    </div>
  )
}

export default PlayerRegistration


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

