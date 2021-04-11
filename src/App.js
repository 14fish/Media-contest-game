import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Register from "./pages/Register/Register";
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ForgotPassword from "./pages/Login/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import HallOfFame from "./pages/HallOfFame/HallOfFame";
import ChooseCategory from "./pages/ChooseCategory/ChooseCategory";
import Profile from "./pages/Profile/Profile";
import ProfileSecond from "./pages/ProfileSecond/ProfileSecond";
import EditProfile from "./pages/EditProfile/EditProfile";
import HowItWorks from './pages/HowItWorks/HowItWorks';
import PhotoContest from './pages/PhotoContest/PhotoContest';


function App() {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route path={'/login'}>
                        <Login/>
                    </Route>
                    <Route path={'/register'}>
                        <Register/>
                    </Route>
                    <Route path={'/forgot-password'}>
                        <ForgotPassword/>
                    </Route>
                    <Route path={'/main'}>
                        <Dashboard/>
                    </Route>
                    <Route path={'/hall-of-fame'}>
                        <HallOfFame/>
                    </Route>
                    <Route exact path={['/choose-category', '/']}>
                        <ChooseCategory/>
                    </Route>
                    <Route path={'/profile'}>
                        <Profile/>
                    </Route>
                    <Route path={'/profile-second'}>
                        <ProfileSecond/>
                    </Route>
                    <Route path={'/edit-profile'}>
                        <EditProfile/>
                    </Route>
                    <Route path={'/how-it-works'}>
                        <HowItWorks/>
                    </Route>
                    <Route path={'/photo-contest'}>
                        <PhotoContest/>
                    </Route>
                </Switch>
            </div>
        </Router>);
}

export default App;
