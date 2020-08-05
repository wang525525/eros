import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import '../../App.css';

import defaultMan from '../../assets/images/design/image-default.jpg';

import Config from "../../helpers/config";

function App() {

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#171715',
      color: '#FE2D66',
      fontSize: '1.25rem'
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

  function createData(name, img, date, service, cost, ecCost) {
    return { name, img, date, service, cost, ecCost };
  }

  const rows = [
    createData('Lucho$', defaultMan, '10/03/2020', 'Escort', '$150,000', 'EC$150'),
    createData('Lucho$', defaultMan, '10/03/2020', 'Escort', '$150,000', 'EC$150'),
    createData('Lucho$', defaultMan, '10/03/2020', 'Escort', '$150,000', 'EC$150'),
  ];
  const rows2 = [
    createData('Lucho$', defaultMan, '10/03/2020', 'Escort', '$150,000', 'EC$150'),
    createData('Lucho$', defaultMan, '10/03/2020', 'Escort', '$150,000', 'EC$150'),
    createData('Lucho$', defaultMan, '10/03/2020', 'Escort', '$150,000', 'EC$150'),
  ];

  function gotoDetails(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/details';
  }
  return (

      <div>
        <TableContainer>
          <Table className="" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" scope="row" colSpan={4}>Marzo 2020</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell scope="row" align="center">
                    <div className="text-center">
                      <img src={row.img} className="img-icon-48 rounded" />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="center">
                    <div className="text-center cursor" onClick={gotoDetails}>
                      <span className="text-morado fs-l">{row.name}</span>
                    </div>
                    <div className="text-center">
                      <span className="pt-2 fs-l">{row.date}</span>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="center">
                    <div className="text-center">
                      <span className="text-morado fs-l">{row.service}</span>
                    </div>
                  </StyledTableCell>
                    
                  <StyledTableCell scope="row" align="center">
                    <div className="text-center">
                      <span className="text-morado fs-l">{row.ecCost}</span>
                    </div>
                    <div className="text-center">
                      <span className="pt-2 fs-l">{row.cost}</span>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>

            <TableHead>
              <TableRow>
                <StyledTableCell align="center" scope="row" colSpan={4}>Febrero 2020</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell scope="row" align="center">
                    <div className="text-center">
                      <img src={row.img} className="img-icon-48 rounded" />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="center">
                    <div className="text-center cursor" onClick={gotoDetails}>
                      <span className="text-morado fs-l">{row.name}</span>
                    </div>
                    <div className="text-center">
                      <span className="pt-2 fs-l">{row.date}</span>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="center">
                    <div className="text-center">
                      <span className="text-morado fs-l">{row.service}</span>
                    </div>
                  </StyledTableCell>
                    
                  <StyledTableCell scope="row" align="center">
                    <div className="text-center">
                      <span className="text-morado fs-l">{row.ecCost}</span>
                    </div>
                    <div className="text-center">
                      <span className="pt-2 fs-l">{row.cost}</span>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
      </div>
  
  )
}

export default App;
