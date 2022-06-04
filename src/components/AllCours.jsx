import { useEffect, useState } from "react";

import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import { getCourses, deleteCours } from "../service/api";
import { Link } from "react-router-dom";


const AllCours = () => {

    const[cours, setCours] = useState([]);

    useEffect(() => {
        getCoursDetails();
    }, [])
    
    const getCoursDetails = async () => {
        let response = await getCourses();
        console.log(response);
        setCours(response.data);
    }

    const deleteCoursData = async (id) => {
        await deleteCours(id);
        getCoursDetails();
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    cours.map(c => (
                        <TableRow key={c.id}>
                            <TableCell>{c.id}</TableCell>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>{c.description}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${c.id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteCoursData(c.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllCours;