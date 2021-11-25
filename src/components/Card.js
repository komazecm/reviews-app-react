import React from 'react';
import Review from './Review';

class Card extends React.Component {
    render() { 
        return <div className="container">
            <h1 id="title">Reviews</h1>
            <hr id="line" />
            <Review />
        </div>;
    }
}
 
export default Card;