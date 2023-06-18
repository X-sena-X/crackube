import React from 'react';
import './css/Home.css';
import CourseCard from '../Components/courseCard';

const HomePage = ()=> {
    return(
        <div className='mainWrapper'>
            <div className="categories">
                <ul >
                    <li className='categoryName'>
                        All
                    </li>
                    <li className='categoryName'>
                        Technology
                    </li>
                    <li className='categoryName'>
                        Education
                    </li>
                    <li className='categoryName'>
                        Lifestyle
                    </li>
                    <li className='categoryName'>
                        Healthcare
                    </li>
                    <li className='categoryName'>
                        Sport
                    </li>
                    <li className='categoryName'>
                        Food
                    </li>
                </ul>
            </div>
            <div className='CourseHolder'>
                <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                 time="2 hours ago"/>

            </div>
        </div>
    )
}
export default HomePage;