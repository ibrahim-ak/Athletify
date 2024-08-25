import { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import axios from 'axios';

const AddGroupForm = ({ onCreate }) => {
    const [academy, setAcademy] = useState("");

    useEffect(() => {
        const academyId = localStorage.getItem('id');
        setAcademy(academyId);
        console.log("Academy ID:", academyId);
    }, []);

    const [formData, setFormData] = useState({
        groupName: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.groupName.trim()) {
            newErrors.groupName = 'Group Name is required';
        } else if (formData.groupName.length < 2) {
            newErrors.groupName = 'Group Name must be at least 2 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            const response = await axios.post('http://localhost:8000/api/group', {
                Name: formData.groupName,
                Academy: academy,  // Add academy ID here
            });
            // onCreate(response.data.group);
            setFormData({
                groupName: '',
            });
            setErrors({});
        } catch (error) {
            console.error("Error creating group:", error);
        }
    };

    return (
        <Paper style={{ padding: 16 }}>
            <Typography variant="h6" gutterBottom>Create Group</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Group Name"
                            name="groupName"
                            value={formData.groupName}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={!!errors.groupName}
                            helperText={errors.groupName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            style={{ backgroundColor: '#FF6F31', color: '#fff' }}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default AddGroupForm;
