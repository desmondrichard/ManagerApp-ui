import React, { useState, useEffect } from 'react';
import './SupportStaffRegistration.css';
import Header from '../../../Header';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import SearchButton from '../../../ModalComponents/SearchButton';
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
import DImage from 'react-bootstrap/Image';
import Skeleton from '@mui/material/Skeleton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin for table support
import html2canvas from 'html2canvas';
// download:
import * as XLSX from 'xlsx';
//search:
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function SupportStaffRegistration(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    //next btn:
    const [key, setKey] = useState("0")

    //pdf:
    const [loader, setLoader] = useState(false);

    //Data Binding:
    const [showData, setShowData] = useState(null);
    useEffect(() => {
        fetch('http://192.168.1.192/ManagerApi/GetStaffAllDataAndImages')
            .then((data) => data.json())
            .then((data) => {
                // console.log("data",data);
                // console.log("Success in getting data", data);
                setShowData(data);  // showData=data;
            })
    }, [])

    // download excel:
    const handleDownloadExcel = async () => {
        try {
            const response = await fetch('http://192.168.1.192/ManagerApi/GetStaffAllDataAndImages');
            const data = await response.json();
            console.log("response", data);

            // Extract playerData from the response and replace empty values(cells) with "n/a":
            const playerData = data.map(item => {
                const sanitizedData = {};
                for (const key in item.playerData) {
                    sanitizedData[key] = item.playerData[key] || 'n/a';
                }
                return sanitizedData;
            });

            var wb = XLSX.utils.book_new();
            var ws = XLSX.utils.json_to_sheet(playerData);

            XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
            XLSX.writeFile(wb, "MyExcel.xlsx");
        } catch (error) {
            console.error("Error fetching or processing data for Excel download", error);
        }
    };


    //download pdf:

    const handleDownloadPdf = () => {
        const capture = document.querySelector('.tableHead');
        setLoader(true);

        setTimeout(() => {
            html2canvas(document.body, {
                allowTaint: true,
                useCors: true
            })
                .then(function (canvas) {
                    const imgData = canvas.toDataURL('img/png');
                    const doc = new jsPDF('p', 'mm', 'a4');
                    doc.addImage(imgData, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), 0, 'FAST', 0);
                    doc.save('data.pdf');
                    setLoader(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoader(false);
                });
        }, 1000); // Delay of 1000 milliseconds (1 second)
    }


    function getDataFromChild(k) {
        setKey(k);
    }

    function getPreviousKeyFromChild(k) {
        setKey(k);
    }
    //search:
    const [search, setSearch] = useState('');

    function handleModalClose() {
        setShow(false);
    }
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
                            <p>{key}</p>
                            <Accordion activeKey={key}>
                                {/* Accordion:1 */}
                                <StaffPersonalInformation activationKey={key} onActivationKeyChild={getDataFromChild} />
                                {/* Accordion:2 */}
                                <StaffKittingDetails activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:3 */}
                                <StaffIDCardDetails activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:4 */}
                                <StaffBankAccountDetails activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:5 */}
                                <StaffFoodInformation activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:6 */}
                                <StaffTravelInformation activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:7 */}
                                <StaffPreviousRepresentation activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:8 */}
                                <StaffEmergencyContact activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:9 */}
                                <StaffSocialMediaInfo onCloseModal={handleModalClose} onPreviousActivationKey={getPreviousKeyFromChild} />
                            </Accordion>
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
                <Container fluid className='py-2 mt-3' style={{ zIndex: '-100', backgroundColor: 'rgb(245, 242, 242)' }}>
                    <Row>
                        <Col xl={2} lg={2} md={2} sm={4} xs={4}>
                            {/* <SearchButton /> */}
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { maxWidth: '28ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                            </Box>
                            <div>
                                <TextField style={{ zIndex: '0' }}
                                    id="filled-multiline-flexible"
                                    label="Search"
                                    multiline
                                    maxRows={5}
                                    variant="filled"
                                    placeholder='Ex:Admin'
                                    onChange={(e) => setSearch(e.target.value)}
                                    inputProps={{
                                        maxLength: 6,
                                    }}
                                />
                            </div>
                        </Col>
                        <Col xl={{ span: 2, offset: 8 }} lg={{ span: 2, offset: 7 }} md={{ span: 2, offset: 6 }} sm={{ span: 4, offset: 3 }} xs={4}>
                            <div >
                                <FormControl variant="filled" sx={{ width: '26ch' }}>
                                    <InputLabel id="demo-simple-select-filled-label" style={{ zIndex: '0' }}>Download</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={age}
                                        onChange={handleChange}

                                    >
                                        <MenuItem value={10} onClick={() => handleDownloadExcel()} style={{ whiteSpace: 'nowrap' }}>
                                            Download Excel
                                        </MenuItem>
                                        <MenuItem value={20} onClick={() => handleDownloadPdf()} style={{
                                            whiteSpace: 'nowrap'
                                        }}>
                                            Download PDF
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </Col>
                        <Col sm={1} xs={2}></Col>
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
                                <th>Player Image</th>
                                <th>Staff Name</th>
                                <th>Player ID</th>
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

                        <tbody className='table-light' >
                            {
                                showData
                                    .filter(item =>
                                        search.length < 2 || search.toLowerCase() === '' ? item : item.playerData.supportStaffName.slice(0, 2).toLowerCase() === search.slice(0, 2)
                                    )
                                    .map((showData, i) => {
                                        console.log("showData", showData)
                                        return (
                                            <tr className='text-center' key={i}>
                                                <td>{showData.playerImage ? <img src={`data:image;base64,${showData.playerImage.imageData}`} alt="img" style={{ width: '40px', height: '35px' }} /> : <DImage src={require('./../../../../assets/dummy_profile_img.png')} alt="img" style={{ width: '30px', height: '30px' }}></DImage>}</td>
                                                <td>{showData.playerData.supportStaffName ? showData.playerData.supportStaffName : 'N/A'}</td>
                                                <td>{showData.playerData.alldataStaffId ? showData.playerData.alldataStaffId : 'N/A'}</td>
                                                <td>{showData.playerData.designation ? showData.playerData.designation : 'N/A'}</td>
                                                <td>{showData.playerData.mobileNo ? showData.playerData.mobileNo : 'N/A'}</td>
                                                <td>{showData.playerData.emailId ? showData.playerData.emailId : 'N/A'}</td>
                                                <td>{showData.playerData.specialization ? showData.playerData.specialization : 'N/A'}</td>
                                                <td>{showData.playerData.jerseyNo ? showData.playerData.jerseyNo : 'N/A'}</td>
                                                <td>{showData.playerData.club ? showData.playerData.club : 'N/A'}</td>
                                                <td className='d-flex'><Button variant="primary" className='me-1'><i className="bi bi-binoculars"></i></Button><Button variant="success" className='me-1'><i className="bi bi-pencil-square"></i></Button><Button variant="warning"><i className="bi bi-trash"></i></Button></td>
                                                <td><Button variant="dark" className='me-1'><i className="bi bi-filetype-pdf"></i></Button><Button variant="dark" className='me-1'><i className="bi bi-file-earmark-spreadsheet"></i></Button></td>
                                            </tr>
                                        )
                                    })
                            }
                        </tbody>

                    </Table>) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
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