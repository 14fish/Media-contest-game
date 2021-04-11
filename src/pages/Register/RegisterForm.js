import React from 'react';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import style from "../../styles.js";
import {Link} from "react-router-dom";

const mailSvg = require('../../assets/icon/mail.svg');
const passwordSvg = require('../../assets/icon/password.svg');
const userSvg = require('../../assets/icon/user.svg');


class RegisterForm extends React.Component {

    render() {
        return (
            <div>
                <div className={'row justify-content-center header'}>
                    <div className={'col-md-6'}>
                        <span className={'title'}>Register</span>
                        <span className={'sub-title'}>Please register to continue</span>
                    </div>
                </div>
                <div className={'row justify-content-center'}>
                    <div className={'col-md-6'}>
                        <Input type={'text'} placeholder={'Username'} icon={userSvg}></Input>
                        <Input type={'text'} placeholder={'E-mail'} icon={mailSvg}></Input>
                        <Input type={'password'} placeholder={'Password (min 8 characters)'} icon={passwordSvg}></Input>
                        <Input type={'password'} placeholder={'Password'} icon={passwordSvg}></Input>
                    </div>
                </div>
                <div className={'row justify-content-center'}>
                    <div className={'col-md-6'}>
                        <div className={'mb-3'}>
                            <Button placeholder={'Sign up'}
                                    backgroundColor={style.colorGreen}
                                    borderColor={style.colorGreen}>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={['row justify-content-center footer']}>
                    <div className={'col-md-6'}>
                        <span>Already have an account? <Link to={"login"}><a href="javascript:;">Login</a></Link></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterForm;
