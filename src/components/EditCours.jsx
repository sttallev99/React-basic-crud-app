import { useState, useEffect } from 'react';

import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';
import { getCours, editCours } from '../service/api';


const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`

const initialValues = {
    name: '',
    description: ''
}

const EditCours = () => {

    const [cours, setCours] = useState(initialValues);
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        getCoursData();
    }, [])

    const getCoursData = async () => {
        let response = await getCours(id);
        setCours(response.data)
    }

    const onValueChange = (e) => {
        setCours({...cours, [e.target.name]: e.target.value });
        console.log(cours)
    }
    const addCoursDetails = async () => {
       await editCours(cours, id);
       navigate('/all')
    }

    return (
        <Container>
            <Typography variant='h4'>Edit Cours</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={cours.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' value={cours.description}/>
            </FormControl>
            <FormControl>
                <Button onClick={() => addCoursDetails()} variant='contained'>Edit Cours</Button>
            </FormControl>
        </Container>
    )
}

export default EditCours;