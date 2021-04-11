import React from 'react';
import buttonStyles from './Button.module.scss'

class Button extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        const buttonStyle = {
            backgroundColor: this.props.backgroundColor,
            borderColor: this.props.borderColor,
            color: this.props.color
        };

        return (
            <button type="button"
                    className={["btn btn-primary " + buttonStyles.button]}
                    style={buttonStyle}>
                <img className={buttonStyles.buttonImg} src={(this.props.icon)}/> {this.props.placeholder}
            </button>
        )
    }
}

export default Button;


