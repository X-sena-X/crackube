import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './CSS/courseCard.css';

function click (e){
    e.preventDefault();
}
export default function CourseCard(props){
    let { category,images,title,description,time} = props
    
    

    return(
        <div className='cardWrapper'>
            <div className="imageContainer">
                <img src= {props.images} alt="#"/>
            </div>
            <div className='catContainer'>
                <p className="cat">{category}</p>
                <p className='timespan'>{time}</p>
            </div>
            <div className="titleContainer">
                <p className="title">{title}</p>
                <p className='desc'>{description}</p>
            </div>
            <div className="readMore">
                <a href="#" onClick={click}>Read me</a>
                <ArrowForwardIcon className='arrow'/>
            </div>
        </div>
    )

}
