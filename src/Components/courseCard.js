import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './CSS/courseCard.css';
export default function CourseCard(props){
    let image = `url(${props.images})`
    let { category,images,title,description,time} = props

    return(
        <div className='cardWrapper'>
            <div className="imageContainer">
                <img src= {image} />
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
                <a href="#">Read me</a>
                <ArrowForwardIcon className='arrow'/>
            </div>
        </div>
    )

}
