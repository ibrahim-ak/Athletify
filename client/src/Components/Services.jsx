import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const services = [
  {
    title: 'Lorem Ipsum',
    description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    icon: <i className="bi bi-activity" style={{ fontSize: 24 }}></i>,
  },
  {
    title: 'Sed ut perspici',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <i className="bi bi-box-seam" style={{ fontSize: 24 }}></i>,
  },
  {
    title: 'Magni Dolores',
    description: 'Excepturi sint occaecat cupidatat non proident, sunt in culpa qui officia',
    icon: <i className="bi bi-calendar4-week" style={{ fontSize: 24 }}></i>,
  },
  {
    title: 'Nemo Enim',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
    icon: <i className="bi bi-broadcast" style={{ fontSize: 24 }}></i>,
  },
];

// Custom styled card to handle hover effect
const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme?.palette?.primary?.main || '#1d4f67', // Fallback to a default color
    color: '#fff',
    '& .icon': {
      color: '#fff',
    },
  },
}));

function Services() {
  return (
    <Box sx={{ padding: '40px 0', textAlign: 'center' , marginBottom:"50px"}}>
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold', color: '#333' }}>
        Services
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 5, color: '#666' }}>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {services.map((service, index) => (
          <StyledCard
            key={index}
            sx={{
              width: '20%',
              padding: 3,
              boxShadow: 3,
              textAlign: 'left',
              marginBottom: 4,
              margin: 4,
              borderRadius: 2,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
            }}
          >
            <Box className="icon" sx={{ marginBottom: 2, color: '#1d4f67' }}>
              {service.icon}
            </Box>
            <CardContent sx={{ padding: 0 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {service.description}
              </Typography>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
}

export default Services;
