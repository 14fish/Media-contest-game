import React from 'react';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import style from "../../styles.js";
import loginStyle from "./LoginForm.scss";
import {Link} from "react-router-dom";

const mailSvg = require('../../assets/icon/mail.svg');
const passwordSvg = require('../../assets/icon/password.svg');
const facebookSvg = require('../../assets/icon/facebook.svg');


class LoginForm extends React.Component {

    render() {
        return (
            <div>
                <div className={'row justify-content-center header'}>
                    <div className={'col-md-6'}>
                        <span className={'title'}>Login</span>
                        <span className={'sub-title'}>Please login to continue</span>
                    </div>
                </div>
                <div className={'row justify-content-center'}>
                    <div className={'col-md-6'}>
                        <Input type={'text'} placeholder={'E-mail'} icon={mailSvg}></Input>
                        <Input type={'password'} placeholder={'Password'} icon={passwordSvg}></Input>
                    </div>
                </div>
                <div className={'row justify-content-center check-box'}>
                    <div className={'col-md-6 text-left'}>
                        <div className="form-check">
                            <div className="pretty p-default p-curve">
                                <input type="checkbox"/>
                                <div className="state">
                                    <label>Remember me</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={'row justify-content-center'}>
                    <div className={'col-md-6'}>
                        <div className={'mb-3'}>
                            <Button placeholder={'Login'}
                                    backgroundColor={style.colorGreen}
                                    borderColor={style.colorGreen}>
                            </Button>
                        </div>
                        <div>
                            <Button placeholder={'Continue with Facebook'} icon={facebookSvg}
                                    backgroundColor={style.colorBlue}
                                    borderColor={style.colorBlue}
                            ></Button>
                        </div>
                    </div>
                </div>
                <div className={['row justify-content-center footer']}>
                    <div className={'col-md-6'}>
                        <span><Link to={"forgot-password"}><a className={'forgot-password'}>Forgot your password?</a></Link></span>
                        <span>Don't have an account? <Link to={"register"}><a>Register</a></Link></span>

                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
