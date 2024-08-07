import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function MUITable() {

    const rows = [
        { id: 1, firstName: 'Serhat', lastName: 'Ece', age: 21 },
        { id: 2, firstName: 'Harun', lastName: 'Gürgen', age: 19 },
        { id: 3, firstName: 'Ahmet', lastName: 'Hoca', age: 27 },
        { id: 4, firstName: 'Smile', lastName: 'Erdem', age: 23 }
    ];

    return (
        <div>
            <hr />
            MUITable
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.firstName}</TableCell>
                            <TableCell>{row.lastName}</TableCell>
                            <TableCell>{row.age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default MUITable