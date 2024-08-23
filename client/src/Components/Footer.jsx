import React from 'react';
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      const navbarHeight = document.querySelector('header.MuiAppBar-root')?.offsetHeight || 0;
      const extraOffset = 80; // Adjust this as needed

      window.scrollTo({
        top: offsetTop - navbarHeight - extraOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled('span')(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Resources
          </Typography>
          <FooterLink onClick={() => handleScroll('home')}>Our Homes</FooterLink>
          <br />
          <FooterLink onClick={() => handleScroll('services')}>Services</FooterLink>
          <br />
          <FooterLink onClick={() => handleScroll('contact')}>Contact</FooterLink>
          <br />
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Students
          </Typography>
          <FooterLink onClick={() => handleNavigation('/student/student-wall')}>Student Wall</FooterLink>
          <br />
          <FooterLink onClick={() => handleNavigation('/student/student-group')}>Student Group</FooterLink>
          <br />
          <FooterLink onClick={() => handleNavigation('/student/student-announce')}>Student Announce</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Relationship
          </Typography>
          <FooterLink onClick={() => handleScroll('partners')}>Partners</FooterLink>
          <br />
          <FooterLink onClick={() => handleScroll('about')}>About Us</FooterLink>
          <br />
          <FooterLink onClick={() => handleScroll('contact')}>Contact Us</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Get in touch
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#7A7A7E",
              fontWeight: "500",
              mb: 2,
            }}
          >
            You’ll find your next home, in any style you prefer.
          </Typography>
          <IconBox>
            <img src={fbIcon} alt="Facebook Icon" style={{ cursor: "pointer" }} />
            <img src={twitterIcon} alt="Twitter Icon" style={{ cursor: "pointer" }} />
            <img src={linkedinIcon} alt="LinkedIn Icon" style={{ cursor: "pointer" }} />
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
