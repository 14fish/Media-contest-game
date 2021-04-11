import React from 'react';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import style from "../../styles.js";
import {Link} from "react-router-dom";

const mailSvg = require('../../assets/icon/mail.svg');


class ForgotPasswordForm extends React.Component {

    render() {
        return (
            <div>
                <div className={'row justify-content-center header'}>
                    <div className={'col-md-8'}>
                        <span className={'title'}>Forgot your password?</span>
                        <span className={'sub-title'}>Password will be sent to your email address</span>
                    </div>
                </div>
                <div className={'row justify-content-center'}>
                    <div className={'col-md-6'}>
                        <Input type={'text'} placeholder={'Enter your email address'} icon={mailSvg}></Input>

                    </div>
                </div>
                <div className={'row justify-content-center'}>
                    <div className={'col-md-6'}>
                        <div className={'mb-3'}>
                            <Button placeholder={'Send New Password'}
                                    backgroundColor={style.colorGreen}
                                    borderColor={style.colorGreen}>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={['row justify-content-center footer']}>
                    <div className={'col-md-6'}>
                        <span>Don't have an account? <Link to={"register"}><a>Register</a></Link></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPasswordForm;
