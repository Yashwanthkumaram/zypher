import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../firebase/contexts/authContext'
import { doSignOut } from '../../firebase/auth'

// const Header = () => {
//     const navigate = useNavigate()
//     const { userLoggedIn } = useAuth()
//     return (
//         <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-gray-200'>
//             {
//                 userLoggedIn
//                     ?
//                     <>
//                         <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
//                     </>
//                     :
//                     <>
//                         <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
//                         <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
//                     </>
//             }

//         </nav>
//     )
// }

// export default Header

const Header = ({pagename}) => {
    return (
      <header style={styles.header}>
        <div style={styles.logo}>{pagename}</div>
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
  
  export default Header;