import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage";
import UsersList from "./Pages/UsersList";
import HomePage from "./Pages/HomePage";
import { Navigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const u = localStorage.getItem("Auth");
    u && JSON.parse(u) ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("Auth", user);
  }, [user]);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        {!user && ( <>
        <Route exact path="/" element={<LoginPage authenticate={() => setUser(true)} />} /> 
        <Route exact path="/register" element={<HomePage />} />
        <Route exact path="*" element={<Navigate to={"/"} />} />
        </> )}
        {user && ( <>
        <Route exact path="/users" element={<UsersList logout={() => setUser(false)} />} /> 
        <Route exact path="*" element={<Navigate to={"/users"} />} />

        </> )}

      </Routes>
    </>
  );
}

export default App;



// import React, { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import LoginPage from "./Pages/LoginPage";
// import UsersList from "./Pages/UsersList";
// import HomePage from "./Pages/HomePage";
// function App() {
//   const [user, setUser] = useState(false);

//   useEffect(() => {
//     const u = localStorage.getItem("Auth");
//     u && JSON.parse(u) ? setUser(true) : setUser(false);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("Auth", user);
//   }, [user]);
//   return (
//     <>
//       <ToastContainer
//         position="top-center"
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//       <Routes>
//         {!user && ( <Route exact path="/" element={<LoginPage authenticate={() => setUser(true)} />} /> )}
//         <Route exact path="/register" element={<HomePage />} />
//         {user && ( <Route exact path="/users" element={<UsersList logout={() => setUser(false)} />} /> )}
        
//         <Route exact path="*" element={<LoginPage />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

