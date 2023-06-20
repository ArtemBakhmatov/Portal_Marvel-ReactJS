import './errorMessage.scss';

import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img 
            className='errorMessage'
            src={img}  
            alt='Error'/>
    );
};

export default ErrorMessage;