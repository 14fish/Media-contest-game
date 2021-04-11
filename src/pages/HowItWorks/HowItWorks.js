import React, { Component } from 'react';
import HowItWorksPage from './HowItWorksPage';
import InnerLayout from '../Layout/InnerLayout';

export class HowItWorks extends Component {
    render() {
        return (
            <InnerLayout howItWorksPage={<HowItWorksPage />}></InnerLayout>
        )}
}

export default HowItWorks
