import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { EmojiPeople } from '@mui/icons-material'; 


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
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    backgroundColor: '#001f3f',
                    color: 'white',
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <EmojiPeople sx={{ fontSize: 40, marginBottom: '10px' }} /> {/* Fun icon */}
                  <Typography variant="h6" component="div">
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
