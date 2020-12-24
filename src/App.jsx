import React from "react";
import "./App.less";
// import Routes from "./routes";
// import axios from 'axios';
import Login from './pages/Auth/Login'

// import {BrowserRouter as Router} from "react-router-dom";
// import createAuthRefreshInterceptor from 'axios-auth-refresh';

// import refreshAuthLogic from "./utils/utils";


function App() {

    // createAuthRefreshInterceptor(axios, refreshAuthLogic);

    return (
        <div className="App">
            {/* <Router>
                {/* <Navbar /> */}

                {/* <Routes/> */}
            {/* </Router> */} 
                <Login/>

        </div>
    );
}

export default App;
