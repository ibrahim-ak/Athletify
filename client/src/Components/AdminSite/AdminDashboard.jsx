import React, { useEffect, useState } from 'react';
import { Grid, Card, Typography } from '@mui/material';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';

const AdminDashboard = () => {
  const [academies, setAcademies] = useState([]);
  const [studentCounts, setStudentCounts] = useState([]);
  const [newsCounts, setNewsCounts] = useState([]);

  // Fetch academies data
  useEffect(() => {
    axios.get("http://localhost:8000/api/academies")
      .then((res) => {
        setAcademies(res.data.Academies);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Extract labels and ids
  const labels = academies.map((academy) => academy.username);
  const academieslist = academies.map((academy) => academy._id);

  // Fetch students and news when academies are loaded
  useEffect(() => {
    if (academies.length > 0) {
      fetchStudents();
      fetchNews();
    }
  }, [academies]);

  // Define fetchStudents function
  const fetchStudents = async () => {
    try {
      const counts = await Promise.all(
        academieslist.map(async (ac) => {
          try {
            const response = await axios.get(`http://localhost:8000/api/group/academy/${ac}`);
            const studentPromises = response.data.groups.map(async (group) => {
              const groupResponse = await axios.get(`http://localhost:8000/api/student/group/${group._id}`);
              return groupResponse.data.student;
            });

            const allStudents = await Promise.all(studentPromises);
            const mergedStudents = allStudents.flat(); // Flatten the array of arrays
            return mergedStudents.length; // Return the count of students
          } catch (error) {
            console.error(`Error fetching students for academy ${ac}:`, error);
            return 0; // Return 0 if there's an error for a particular academy
          }
        })
      );

      // Update state with counts
      setStudentCounts(counts);

    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // Define fetchNews function
  const fetchNews = async () => {
    try {
      const newscounts = await Promise.all(
        academieslist.map(async (ac) => {
          try {
            const response = await axios.get(`http://localhost:8000/api/news/academy/${ac}`);
            if (response.data && Array.isArray(response.data.news)) {
              return response.data.news.length; // Return the count of news for each academy
            } else {
              console.error(`Unexpected response format for academy ${ac}:`, response.data);
              return 0;
            }
          } catch (error) {
            console.error(`Error fetching news for academy ${ac}:`, error);
            return 0; // Return 0 if there's an error for a particular academy
          }
        })
      );

      // Update state with news counts
      setNewsCounts(newscounts);

    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // Chart data
  const academyNewsData = {
    labels,
    datasets: [
      {
        label: 'Number of News',
        data: newsCounts, // Use newsCounts state here
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FFCE11',
          '#FFCE22',
        ],
      },
    ],
  };

  const academyStudentData = {
    labels,
    datasets: [
      {
        label: 'Total Number of Students',
        data: studentCounts, // Use studentCounts state here
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          'Green',
          '#FFCE11',
          '#FFCE56',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          'Green',
          '#FFCE11',
          '#FFCE56',
        ],
      },
    ],
  };

  // Common styles for the charts
  const chartContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
  };

  return (
    <Grid container spacing={4} style={{ padding: '20px', marginTop: '20px' }}>
      {/* Chart for Number of News by Academy */}
      <Grid item xs={12} md={6}>
        <Card style={{ padding: '20px', backgroundColor: '#f0f4f7', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
            News by Academy
          </Typography>
          <div style={chartContainerStyles}>
            <Bar data={academyNewsData} />
          </div>
        </Card>
      </Grid>

      {/* Pie Chart for Total Number of Students by Academy */}
      <Grid item xs={12} md={6}>
        <Card style={{ padding: '20px', backgroundColor: '#f0f4f7', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
            Total Number of Students by Academy
          </Typography>
          <div style={chartContainerStyles}>
            <Pie data={academyStudentData} />
          </div>
        </Card>
      </Grid>

      {/* Card 1 */}
      <Grid item xs={12} md={6}>
        <Card style={{ padding: '20px', backgroundColor: '#ffffff', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold', color: '#333' }}>Card 1</Typography>
          <Typography variant="body1" style={{ color: '#555' }}>
            Content for the first card goes here. You can use this space to display additional information.
          </Typography>
        </Card>
      </Grid>

      {/* Card 2 */}
      <Grid item xs={12} md={6}>
        <Card style={{ padding: '20px', backgroundColor: '#ffffff', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold', color: '#333' }}>Card 2</Typography>
          <Typography variant="body1" style={{ color: '#555' }}>
            Content for the second card goes here. This card can also be used for any relevant details.
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
