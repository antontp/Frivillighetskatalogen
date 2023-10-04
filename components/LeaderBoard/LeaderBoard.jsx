import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
//     address: '18637 Jessica Ridge Apt. 157\nGrossberg, ME 84127',
//     birthdate: '1989-11-24T16:12:54.000Z',
//     email: 'michael16@hotmail.com',
//     accounts: [ 662207, 816481 ],
//     tier_and_details: {}
//   }

function LeaderBoard({ leaders }) {

    const handleClick = (e) => {
        console.log(e.target.textContent);
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {/* inner data: sex */}
                        <TableCell>Full name</TableCell>
                        <TableCell>Age - Birth year</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {leaders.map((row) => (
                        <TableRow
                            key={row.username}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            {/* <TableCell>{getAge(row.birthday)} - {row.birthday}</TableCell> */}
                            <TableCell>{row.birthdate}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            {/* <TableCell>{row.district}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default LeaderBoard;