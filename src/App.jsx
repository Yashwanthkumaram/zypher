// import Login from "./components/auth/login";
// import Register from "./components/auth/register";

// import Header from "./components/header";
// import Home from "./components/home";
// import { AuthProvider } from "./firebase/contexts/authContext";
// import { useRoutes } from "react-router-dom";

// function App() {
//   const routesArray = [
//     {
//       path: "/",
//       element: <Login />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/register",
//       element: <Register />,
//     },
//     {
//       path: "/home",
//       element: <Home />,
//     },
//   ];
//   let routesElement = useRoutes(routesArray);
//   return (
//     <AuthProvider>
//       <Header />
//       <div className="w-full h-screen flex flex-col">{routesElement}</div>
//     </AuthProvider>
//   );
// }

// export default App;

import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./components/Dashboard";

//import Header from "./components/header";
import Home from "./components/home";
import { AuthProvider } from "./firebase/contexts/authContext";
import { BrowserRouter, useRoutes } from "react-router-dom"; // Ensure BrowserRouter is correctly imported

function App() {
  const routesArray = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ];

  // Ensure this function is executed within the BrowserRouter context
  const Routes = () => useRoutes(routesArray);

  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <Header /> */}
        <div className="w-full h-screen flex flex-col">
          <Routes />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
