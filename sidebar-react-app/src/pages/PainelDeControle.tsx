// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from '../components/Sidebar';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import "../assets/style/painelDeControle.css"

const PainelDeControle = () => {
  return (
    <>
    <div className='home'>
      <div>
        <Sidebar />
      </div>
      <div className='mid'>
        <div className='container'>

        </div>
        <Table className='container2'>
          <TableBody>
            <TableRow>
              <TableCell>Nome</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>


    </div>
    <div>

    </div>
    </>
  )
}

export default PainelDeControle;
