import React from 'react'
import Navbar from '../NavBar'
import AddGroupForm from './AddGroupForm'

const AllGroupsComponent = () => {
  return (
    <>
       <Navbar/>
       <Container>
      <Typography variant="h4" gutterBottom>Groups</Typography>
      <Grid container spacing={4}>
        {/* Academy List on the left side */}
        <Grid item xs={8} md={8}>
          <AcademyList academies={academies} />
        </Grid>
        {/* Create Academy Form on the right side */}
        <Grid item xs={4} md={4}>
          <AddGroupForm onCreate={handleCreateAcademy} />
        </Grid>
      </Grid>
    </Container> 
    </>
  )
}

export default AllGroupsComponent