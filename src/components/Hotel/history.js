import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import '../../App.css';
import iconMail from '../../assets/images/resources/icon-mail.png';
import background from '../../assets/images/design/bg-escort.jpeg';
import defaultMan from '../../assets/images/design/image-default.jpg';
import Link from '@material-ui/core/Link';
import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";
import Tabs from "../common/Tabs";
import Tab from "../common/Tab";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


function App() {

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#171715',
      color: '#FE2D66',
    },
    body: {
      fontSize: 14,
      color: '#fff'
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      backgroundColor: '#323232A0',
      fontSize: '14px',
      '&:nth-of-type(odd)': {
        backgroundColor: '#19191980',
      },
      
    },
  }))(TableRow);

  function createData(name, img, date, time, habit) {
    return { name, img, date, time, habit };
  }

  const rows = [
    createData('Lucho$', defaultMan, '10/03/2020', '8:00 pm - 9:00 pm', 'Sencilla'),
    createData('Lucho$', defaultMan, '10/03/2020', '8:00 pm - 9:00 pm', 'Sencilla'),
    createData('Lucho$', defaultMan, '10/03/2020', '8:00 pm - 9:00 pm', 'Sencilla'),
    createData('Lucho$', defaultMan, '10/03/2020', '8:00 pm - 9:00 pm', 'Sencilla'),
    createData('Lucho$', defaultMan, '10/03/2020', '8:00 pm - 9:00 pm', 'Sencilla'),
  ];

  function gotoHotel(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'hotel/setting';
  }

  return (
    
    <div>
      <TopbarSimple clickHandler={gotoHotel} name={'Historial de reservas'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>
      
        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <Tabs>
                <Tab active={true} value="next" header="Próximas">

                  <TableContainer>
                    <Table className="" aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell align="center">Usuario</StyledTableCell>
                          <StyledTableCell align="center">Fecha & Hora</StyledTableCell>
                          <StyledTableCell align="center">Habitación</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, i) => (
                          <StyledTableRow key={i}>
                            <StyledTableCell scope="row" align="center">
                              <div className="text-center">
                                <img src={row.img} className="img-icon-32" />
                              </div>
                              <div className="text-center pt-2">
                                <span className="text-morado">{row.name}</span>
                              </div>
                            </StyledTableCell>
                            <StyledTableCell scope="row" align="center">
                              <div className="text-center">
                                <span className="text-morado">{row.date}</span>
                              </div>
                              <div className="text-center">
                                <span className="pt-2">{row.time}</span>
                              </div>
                            </StyledTableCell>
                              
                            <StyledTableCell align="center">
                              <div className="text-center">
                                <span className="">{row.habit}</span>
                              </div>
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                </Tab>
                <Tab value="past" header="Pasadas">
                  <div className="row justify-content-center">
                    <div className="col-6 col-sm-6 text-center mt-5">
                      <img className="img-fluid" src={iconMail} alt="ErosApp"/>
                    </div>
                  </div>
                  
                  <div className="row justify-content-center mt-5">
                    <div className="col-12 col-sm-12 text-center">
                      <div className="App-Question text-center">
                        Vaya, no tienes habitaciones a reservar.
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default App;
