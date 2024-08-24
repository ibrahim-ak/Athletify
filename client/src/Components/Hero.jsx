import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import heroImg from '../media/image copy.png';
import CustomButton from "./CustomButton";

const Hero = ({ contactRef }) => {
  const navigate = useNavigate();

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "50px",
    color: "#fff",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  const GradientBackground = styled(Box)(({ theme }) => ({
    background: "linear-gradient(135deg, #1d4f67 0%, #5a768c 100%)",
    minHeight: "100vh",
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const handleScrollToContact = () => {
    console.log("botato")
    
      navigate('#contact')
      if (contactRef && contactRef.current) {
      navigate('#contact')
      console.log("Scrolling to Contact Section");
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <GradientBackground>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1", zIndex: 2 }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "40px",
                color: "#fff",
                fontWeight: "500",
                mt: 20,
                mb: 4,
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Welcome to Athletify .. */}
            </Typography>
            <Title variant="h1" sx={{ fontSize: "50px", color: "#fff" }}>
              "Empowering Athletes, Simplifying Management".
            </Title>

            <Button
      variant="contained"
      component={Link}
      to="/#contact"
      onClick={handleScrollToContact}
      sx={{
        backgroundColor: 'rgb(242, 132, 25)', // Vibrant orange background color
        border: '2px solid rgb(250, 102, 25)', // Border color
        width: '150px', // Set width
        height: '55px', // Set height
        color: '#fff',
        fontSize: '1.2rem',
        textTransform: 'none', // Prevent text from transforming to uppercase
        '&:hover': {
          backgroundColor: '#FF5722', // Darker shade of orange for hover
          borderColor: '#FF5722',
          transform: 'scale(1.05)', // Slightly increase size on hover
          transition: 'all 0.3s ease-in-out', // Smooth transition
        },
      }}
    >
      Join Now
    </Button>
          </Box>

          <Box sx={{ flex: "1.25", zIndex: 2 }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{
                marginBottom: "2rem",
                marginTop: "170px",
                width: "780px",
                transform: "rotate(-5deg)",
              }}
            />
          </Box>
        </CustomBox>
      </Container>
    </GradientBackground>
  );
};

export default Hero;
