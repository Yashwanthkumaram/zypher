import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>BrandName</div>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navItem}>Home</Link></li>
          <li><Link to="/profile" style={styles.navItem}>Profile</Link></li>
          <li><Link to="/settings" style={styles.navItem}>Settings</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#333',
    color: 'white',
  },
  logo: {
    fontSize: '28px',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
    transition: 'color 0.3s ease',
  },
  navItemHover: {
    color: '#f39c12', // Yellowish hover color
  }
};

export default Navbar;
