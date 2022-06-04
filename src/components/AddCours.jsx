import { useState } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { addCours } from '../service/api';


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

const AddUCours = () => {

    const [cours, setCours] = useState(initialValues);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setCours({...cours, [e.target.name]: e.target.value });
        console.log(cours)
    }
    const addCoursDetails = async () => {
       await addCours(cours);
       navigate('/all')
    }

    return (
        <Container>
            <Typography variant='h4'>Add Cours</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name'/>
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description'/>
            </FormControl>
            <FormControl>
                <Button onClick={() => addCoursDetails()} variant='contained'>Add Cours</Button>
            </FormControl>
        </Container>
    )
}

export default AddUCours;