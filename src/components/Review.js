import React, { useState } from 'react';
import data from './Data';

function Review() {
    const [people, setPeople] = useState(data);
    let [index, setIndex] = useState(0);
       

    return <div className="content">
        <img src={people[index].img} alt=""></img>
        <h3 id="name">{people[index].name}</h3>
        <h4 id="job">{people[index].job.toUpperCase()}</h4>
        <p id="desc">{people[index].text}</p>
        <div className="buttons">
            <button className="prev" onClick={()=>{
                if(index === 0) {
                    setIndex(people.length-1);
                } else {
                    setIndex(index-1); 
                }                
            }}>{'<'}</button>
            <button className="next" onClick={() => {
                if(index === people.length - 1) {
                    setIndex(0);
                } else {
                    setIndex(index + 1); 
                } 
            }}>{'>'}</button>
        </div>
        <button className="random-btn" onClick={() => {
            let randomNo = Math.floor(Math.random()*people.length);
            setIndex(randomNo);
        }}>Surprise Me</button>
    </div>
}
 
export default Review;