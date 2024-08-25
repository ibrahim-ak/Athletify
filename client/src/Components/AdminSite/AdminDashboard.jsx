import React, { useEffect, useState } from 'react';
import { Grid, Card, Typography } from '@mui/material';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';

const AdminDashboard = () => {
  const [academies, setAcademies] = useState([]);
  const [studentCounts, setStudentCounts] = useState([]);
  const [totalstudents, setTotalStudents] = useState(0);
  const [totalnews, setTotalnews] = useState(0);
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
  useEffect(() => {
     axios.get("http://localhost:8000/api/students")
       .then((res) => {
          const allstudents = res.data.students;
         setTotalStudents(allstudents.length);
       })
       .catch((err) => {
         console.error(err);
       });
   }, []);
  useEffect(() => {
     axios.get("http://localhost:8000/api/news")
       .then((res) => {
          const allnewssss = res.data.news;
          setTotalnews(allnewssss.length);
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
            const mergedStudents = allStudents.flat(); 
            // Flatten the array of arrays
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
          ' #e1b419 ',
          '#a3a3a3',
          'ff6f31',
          '#FFCE11',
          '#FFCE56',
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
          ' #e1b419 ',
          '#a3a3a3',
          'ff6f31',
          '#FFCE11',
          '#FFCE56',
        ],
        hoverBackgroundColor: [
          ' #e1b419 ',
          '#a3a3a3',
          'ff6f31',
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
    <Grid container spacing={7} style={{ padding: '20px', marginTop: '50px' ,marginLeft:"70px" }}>
      {/* Chart for Number of News by Academy */}
      <Grid item xs={12} md={5}>
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
      <Grid item xs={12} md={5}>
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
      <Grid item xs={12} md={5}>
        <Card style={{ padding: '20px', backgroundColor: '#ffffff', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold', color: '#333' }}>All News </Typography>
          <Typography variant="body1" style={{ color: '#555' }}>
          Total news articles across all academies : <span style={{color:"#fa8419" , fontWeight:"bold"}}> {totalnews}</span>
          </Typography>
        </Card>
      </Grid>

      {/* Card 2 */}
      <Grid item xs={12} md={5}>
        <Card style={{ padding: '20px', backgroundColor: '#ffffff', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold', color: '#333' }}>Students</Typography>
          <Typography variant="body1" style={{ color: '#555' }}>
          Total number of students across all academies:<span style={{color:"#fa8419" , fontWeight:"bold"}}>  {totalstudents}</span>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
