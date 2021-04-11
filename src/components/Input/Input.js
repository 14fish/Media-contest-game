import React from 'react';
import inputStyles from './Input.module.scss'

class Input extends React.Component {
    state = {
        text: '',
    };

    constructor(props) {
        super(props);
        this.state = {text: ''};
        let opacity = {opacity: .5};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});

    }

    render() {
        if (this.state.text != '') {
            this.opacity = {opacity: 1}
        } else {
            this.opacity = {opacity: .5};
        }
        return (
            <div className={inputStyles.container}>
                <div className={"input-group mb-3 "} style={this.opacity}>
                    <div className="input-group-prepend">
                        <span className={["input-group-text " + inputStyles.imgWrapper]}><img
                            src={this.props.icon}/></span>
                    </div>
                    <input type={this.props.type} className={["form-control " + inputStyles.input]}
                           placeholder={this.props.placeholder}
                           aria-label={this.props.placeholder}
                           aria-describedby="basic-addon1"
                           onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}

export default Input;


