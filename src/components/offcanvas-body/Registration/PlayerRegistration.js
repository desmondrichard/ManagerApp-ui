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
import Form from 'react-bootstrap/Form';
import RegistrationForm from './Player-Registration-Form/RegistrationForm';


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
              <RegistrationForm />
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
            <th >Player Image</th>
            <th>Player Name</th>
            <th>Display Name</th>
            <th>Mobile No</th>
            <th>Email Id</th>
            <th>Specialization</th>
            <th>Jersey No</th>
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
            <th className='p-1 d-flex'><Button variant="primary" className='me-1'><i className="bi bi-binoculars"></i></Button><Button variant="success" className='me-1'><i className="bi bi-pencil-square"></i></Button><Button variant="warning"><i className="bi bi-trash"></i></Button></th>
          </tr>

        </tbody>
      </Table>
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

