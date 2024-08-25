import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AllGroupsCards = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const academyId = localStorage.getItem('id');

    const fetchGroups = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/group/academy/${academyId}`);
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
            <Link to={`/academy/academy-chat/${group._id}`} style={{ textDecoration: 'none' }}>
              <Card 
                sx={{
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    backgroundColor: '#001f3f', // Dark navy color on hover
                    color: 'white', // Text color on hover
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="div" align="center">
                    {group.Name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllGroupsCards;
