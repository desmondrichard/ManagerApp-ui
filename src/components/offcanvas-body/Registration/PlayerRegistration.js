import React, { useEffect, useState } from 'react';
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
import DImage from 'react-bootstrap/Image';

function PlayerRegistration(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Data Binding:
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch('http://192.168.1.192/ManagerApi/GetAllDataAndImages')
      .then((data) => data.json())
      .then((data) => {
        // console.log("data",data);
        // console.log("Success in getting players data", data);
        setShowData(data);  // showData=data;
      })
  }, [])

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
        <Container fluid className='py-2 mt-3 bg-light' style={{ zIndex: '-100' }}>
          <Row>
            <Col xl={2} lg={2} md={2} sm={4} xs={4}>
              <SearchButton />
            </Col>
            <Col xl={{span:2,offset:8}} lg={{ span: 2, offset: 7 }} md={{ span: 2, offset: 6 }} sm={{ span: 4, offset: 3 }} xs={4}>
              <ExploreOptions />
            </Col>
            <Col sm={1} xs={2}></Col>
          </Row>
        </Container>
      </div>

      {/* Table Data Binding: */}
      {
        (showData) ?
          (<Table striped hover responsive className='tableHead my-3 table-dark'
          >
            <thead>
              <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                <th >PLAYER ID</th>
                <th >PLAYER IMAGE</th>
                <th >IMAGE ID</th>
                <th>PLAYER NAME</th>
                <th>DISPLAY NAME</th>
                <th>MOBILE NO</th>
                <th>EMAIL ID</th>
                <th>SPECIALIZATION</th>
                <th>JERSEY NO</th>
                <th>CLUB</th>
                <th>ACTION</th>
                <th>DOWNLOAD AS</th>
              </tr>
            </thead>
            {
              showData.map((showData, i) => {
                console.log("ShowData", showData);
                return (
                  <tbody className='table-light' key={i}>
                    <tr className='text-center'>
                      <td>{showData.playerData.alldataplayerId ? showData.playerData.alldataplayerId : 'N/A'}</td>
                      {/* blob to image: */}
                      <td>{showData.playerImage ? <img src={`data:image;base64,${showData.playerImage.imageData}`} alt="img" style={{ width: '30px', height: '30px' }} /> : <DImage src={require('./../../../assets/dummy_profile_img.png')} alt="img" style={{ width: '30px', height: '30px' }}></DImage>}</td>
                      <td>{(showData.playerImage ? showData.playerImage.imageId : "N/A")}</td>
                      <td>{showData.playerData.playerName ? showData.playerData.playerName : 'N/A'}</td>
                      <td>{showData.playerData.displayName ? showData.playerData.displayName : 'N/A'}</td>
                      <td>{showData.playerData.mobileNo ? showData.playerData.mobileNo : 'N/A'}</td>
                      <td>{showData.playerData.emailId ? showData.playerData.emailId : 'N/A'}</td>
                      <td>{showData.playerData.specialization ? showData.playerData.specialization : 'N/A'}</td>
                      <td>{showData.playerData.jerseyNo ? showData.playerData.jerseyNo : 'N/A'}</td>
                      <td>{showData.playerData.club ? showData.playerData.club : 'N/A'}</td>
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

