import { Component } from 'react';
import Button from 'react-bootstrap/Button'

class ListButton extends Component {


    render() {

        let {action, buttonText, variant, size} = this.props;

        return (
            <>
                <Button onClick={action} size={size} variant={variant}>{buttonText}</Button>  
            </>
        );
    }
}

export default ListButton;