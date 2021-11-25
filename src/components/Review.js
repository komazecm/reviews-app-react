import React, { useState } from 'react';
import data from './Data';

function Review() {
    const [people, setPeople] = useState(data);
    let [index, setIndex] = useState(2);
       

    return <div className="content">
        <img src={people[index].img} alt=""></img>
        <h3 id="name">{people[index].name}</h3>
        <h4 id="job">{people[index].job.toUpperCase()}</h4>
        <p id="desc">{people[index].text}</p>
        <div className="buttons">
            <button className="prev" onClick={()=>{
                setIndex(index-1);
            }}>{'<'}</button>
            <button className="next">{'>'}</button>
        </div>
        <button className="random-btn">Surprise Me</button>
    </div>
}
 
export default Review;