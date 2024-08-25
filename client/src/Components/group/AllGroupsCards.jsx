import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const AllGroupsCards = () => {
  const [groups, setGroups] = useState([]);
  const [academy, setAcademy] = useState("");

  useEffect(() => {
      const academyId = localStorage.getItem('id');
      // setAcademy(academyId);
      
    const fetchGroups = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/group/academy/${academyId}`);
        // console.log(response.data.groups)
        setGroups(response.data.groups);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, [groups]);

  return (
    <div>
      <Grid container spacing={3}>
        {groups.map((group) => (
          <Grid item xs={12} sm={6} md={4} key={group._id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" align='center'>
                  {group.Name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllGroupsCards;
