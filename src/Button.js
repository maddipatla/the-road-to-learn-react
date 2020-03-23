import React, {Component} from 'react';

class Button extends Component {
    render = () => {
        const {onClick, className = 'Red', children} = this.props;
        return(
            <span>
                <button type="button" onClick={onClick} className={className}>{children}</button>
            </span>
        );
    }
}

export default Button;