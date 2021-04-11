import React from 'react';
import InnerLayout from "../Layout/InnerLayout";
import DashboardPage from "./DashboardPage";

class Dashboard extends React.Component {
    render() {
        return (
            <InnerLayout dashboard={<DashboardPage/>}></InnerLayout>
        );
    }
}

export default Dashboard;
