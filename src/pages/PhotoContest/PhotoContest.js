import React, { Component } from 'react';
import InnerLayout from '../Layout/InnerLayout';
import PhotoContestPage from './PhotoContestPage';

export class PhotoContest extends Component {
    render() {
        return (
            <div>
                <InnerLayout photoContestPage={<PhotoContestPage />}></InnerLayout>
            </div>
        )
    }
}

export default PhotoContest
