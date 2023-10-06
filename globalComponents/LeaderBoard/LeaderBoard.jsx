"use client"
import { Collapse } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';

function getAge(string) {

    function parseBirthDate(string) {
        let bits = string.split("-");
        return [bits[2], bits[1], bits[1]]
    }

    let today = new Date();
    let birthbits = parseBirthDate(string);
    let birthdate = new Date(birthbits[0], birthbits[1]-1, birthbits[2]);
    let age = today.getFullYear() - birthdate.getFullYear();
    let m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) age--;
    return age;
}

// {
//     _id: '5ca4bbcea2dd94ee58162a73',
//     username: 'thomasdavid',
//     name: 'Ashley Lopez',
//     district: '18637 Jessica Ridge Apt. 157\nGrossberg, ME 84127',
//     birthdate: '1989-11-24T16:12:54.000Z',
//     email: 'michael16@hotmail.com',
//     password: lqjkwendjasnd
//   }

function Row(leader) {
    const row = leader.leader;
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow onClick={() => setOpen(!open)}>
                <TableCell>{row.name}</TableCell>
                <TableCell>OSLO</TableCell>
                <TableCell>Kokk - Praktisk - Leirsjef - Musikk - Brann - Førstehjep</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    {/* inner data: sex */}
                                    <TableCell>Email</TableCell>
                                    <TableCell>Birthdate</TableCell>
                                    <TableCell>Address</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.birthdate}</TableCell>
                                <TableCell>{row.address}</TableCell>
                            </TableBody>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

function LeaderBoard({ leaders }) {

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {/* inner data: sex */}
                        <TableCell>Full name</TableCell>
                        <TableCell>District</TableCell>
                        <TableCell>Experience / Wishes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {leaders.map((leader) => (
                        <Row
                            key={leader.username}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            leader={leader}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default LeaderBoard;