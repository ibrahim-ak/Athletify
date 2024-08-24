import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PaymentIcon from '@mui/icons-material/Payment';

function ServiceCards() {
  const services = [
    {
      title: 'Student Management',
      description: 'Easily manage student records, including registration, assignments to classes, and updates.',
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#1d4f67' }} />,
    },
    {
      title: 'Training Schedules',
      description: 'Create and manage training schedules for your academy. Students can view personalized schedules.',
      icon: <EventNoteIcon sx={{ fontSize: 40, color: '#1d4f67' }} />,
    },
    {
      title: 'Payment',
      description: 'Monitor student payments, view history, and track upcoming payment deadlines with ease.',
      icon: <PaymentIcon sx={{ fontSize: 40, color: '#1d4f67' }} />,
    },
  ];

  return (
    <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: 3, 
      flexWrap: 'wrap', 
      marginTop: '50px',
      marginBottom: '50px', // Increased bottom margin
      textAlign: 'center', 
    }}
  >
      {services.map((service, index) => (
        <Card
          key={index}
          sx={{
            width: 320,
            padding: '20px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
              {service.icon}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              {service.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {service.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default ServiceCards;
