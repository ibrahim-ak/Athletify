
function AboutUs() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>About Us</h1>
      <p style={{ 
        lineHeight: '1.6', 
        fontSize: '1.1em',
        textAlign: 'justify'
      }}>
        Our website is expertly designed for the unique needs of athletic academies, providing a comprehensive platform that covers every aspect of academy management. Whether it’s managing academy announcements, organizing class schedules, or handling financial transactions, our solution is crafted to simplify and streamline these administrative tasks.

        Our platform offers a wide range of features aimed at enhancing productivity and organization within the academy. It enables owners and sub-admins to easily oversee student information, manage training schedules, post announcements, and track payments. By consolidating these essential functions into a single, user-friendly interface, we minimize the time and effort needed to keep the academy running smoothly.

        With our solution, you can expect a more organized, effective, and responsive management experience for your athletic academy.
      </p>
    </div>
  );
}

export default AboutUs;
