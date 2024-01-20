import React, { useState, useEffect } from 'react';
import './Accessories.css';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import FilterAccessories from './FilterAccessories';
import Skeleton from '@mui/material/Skeleton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//excel:
import * as XLSX from 'xlsx';
//pdf:
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin for table support
import html2canvas from 'html2canvas';
//search:
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Accessories() {

  //Data Binding:
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch('http://192.168.1.192/ManagerApi/GetAllDataAndImages')
      .then((data) => data.json())
      .then((data) => {
        // console.log("data",data);
        console.log("Success in getting data", data);
        setShowData(data);  // showData=data;
      })
  }, [])

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  //pdf:
  const [loader, setLoader] = useState(false);

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


  //excel:
  const handleDownloadExcel = async () => {
    try {
      const response = await fetch('http://192.168.1.192/ManagerApi/GetAllDataAndImages');
      const data = await response.json();
      console.log("response", data);

      // Extract playerData from the response and replace empty values(cells) with "n/a":
      const playerData = data.map(item => {
        const sanitizedData = {};
        for (const key in item) {
          sanitizedData[key] = item[key] || 'n/a';
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

  //search:
  const [search, setSearch] = useState('');
  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>ACCESSORIES LIST</div>
        <Container fluid className='py-2 mt-3 bg-light'>
          <Row>
            <Col xl={2} xs={4} md={3} lg={3}>
              {/* <FilterAccessories /> */}
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
            <Col xl={{ span: 2, offset: 8 }} lg={{ span: 3, offset: 6 }} md={{ span: 3, offset: 5 }} sm={{ span: 4, offset: 4 }} xs={{ span: 3 }}>
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
          </Row>
        </Container>
      </div>
      {
        showData ?
          (<Table striped hover responsive className='tableHead my-3 table-dark'
          >
            <thead>
              <tr className='text-center thead' style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>
                <th >S.NO</th>
                <th>PLAYER NAME</th>
                <th>JERSEY NO</th>
                <th>INITIAL PRINT</th>
                <th>TROWSER LENGTH</th>
                <th>SHORTS SIZE</th>
                <th>TRACK SUIT</th>
                <th>TRAVEL POLO</th>
                <th>HELMET</th>
                <th>BATTING PADS</th>
                <th>BATTING GLOVES</th>
                <th>WK GLOVES</th>
                <th>WK PAD</th>
                <th>SHOULDER BAG</th>

              </tr>
            </thead>
            {
              showData
              .filter(item =>
                search.length < 2 || search.toLowerCase() === '' ? item : item.playerName.slice(0, 2).toLowerCase() === search.slice(0, 2)
              )
                .map((showData, i) => {
                  console.log("showData", showData)
                  return (
                    < tbody className='table-light' key={i} >
                      <tr className='text-center'>
                        <td>{showData.alldataplayerId ? showData.alldataplayerId : 'N/A'}</td>
                        <td>{showData.playerName ? showData.playerName : 'N/A'}</td>
                        <td>{showData.jerseyNo ? showData.jerseyNo : 'N/A'}</td>
                        <td>{showData.initials ? showData.initials : 'N/A'}</td>
                        <td>{showData.trouserLength ? showData.trouserLength : 'N/A'}</td>
                        <td>{showData.shortsSize ? showData.shortsSize : 'N/A'}</td>
                        <td>{showData.trackSuit ? showData.trackSuit : 'N/A'}</td>
                        <td>{showData.travelPolo ? showData.travelPolo : 'N/A'}</td>
                        <td style={{ whiteSpace: 'nowrap' }}>{showData.helmet ? showData.helmet : 'N/A'}</td>
                        <td>{showData.battingPads ? showData.battingPads : 'N/A'}</td>
                        <td>{showData.battingGloves ? showData.battingGloves : 'N/A'}</td>
                        <td>{showData.wkGloves ? showData.wkGloves : 'N/A'}</td>
                        <td>{showData.wkPad ? showData.wkPad : 'N/A'}</td>
                        <td>{showData.shoulderBag ? showData.shoulderBag : 'N/A'}</td>

                      </tr>

                    </tbody>
                  )
                })
            }
          </Table>) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
      }
    </div >
  )
}

export default Accessories