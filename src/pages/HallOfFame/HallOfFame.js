import React from 'react';
import InnerLayout from "../Layout/InnerLayout";
import HallOfFamePage from "./HallOfFamePage";

class HallOfFame extends React.Component {
    render() {
        return (
            <InnerLayout hallOfFame={<HallOfFamePage/>}></InnerLayout>
        );
    }
}

export default HallOfFame;
