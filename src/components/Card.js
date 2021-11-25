import React from 'react';
import Review from './Review';

class Card extends React.Component {
    render() { 
        return <div className="container">
            <Review />
        </div>;
    }
}
 
export default Card;