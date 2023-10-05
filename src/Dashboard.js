

import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (<div>
    <h2>Home Page</h2>
    <nav>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
  </div>);
}

export default Home







// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Dashboard() {
//   const navigate = useNavigate();

//   const handleSignOut = () => {
//     navigate('/signin');
//   };

//   return (
//     <div>
//       <h2>You have successfully signed in!</h2>
//       <button onClick={handleSignOut}>Sign Out</button>
//     </div>
//   );
// }

// export default Dashboard;
