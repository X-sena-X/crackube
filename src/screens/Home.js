import React from 'react';
import './css/Home.css';
import CourseCard from '../Components/courseCard';
import Grid from '@mui/material/Unstable_Grid2';
import image1 from '../Assests/Rectangle1073.png';
import image2 from '../Assests/Rectangle1075.png';
import image3 from '../Assests/Rectangle1077.png';
import image4 from '../Assests/Rectangle1079.png';


const HomePage = ()=> {
    
    return(
        <div className='mainWrapper'>
            <div className="categories">
                <ul className='categoryUL'>
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
            
            <div className='CardContainer'>
                
            </div>
            <div className='courseContainer'>


            
                <Grid container rowSpacing={4} columnSpacing={0.2} className="couseGrid" disableEqualOverflow>
                    <Grid xs={7} sm={5} md={4} lg={3}>
                        <CourseCard category="LIFESTYLE" images={image1} title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                        time="2 hours ago"/>
                    </Grid>
                    <Grid xs={7} sm={5} md={4} lg={3}>
                        <CourseCard category="TECHNOLOGY" images={image2} title="Simple Solutions for Complex Connections" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                        time="2 hours ago"/>
                    </Grid>
                    <Grid xs={7} sm={5} md={4} lg={3}>
                        <CourseCard category= "SPORT" images={image3} title="All things are difficult before they are easy" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                        time="2 hours ago"/>
                    </Grid>
                    <Grid xs={7} sm={5} md={4} lg={3}>
                        <CourseCard category="EDUCATION" images={image4} title="How to Memorize everything you read?" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                        time="2 hours ago"/>
                    </Grid>
                    <Grid xs={7} sm={5} md={3}>
                        <CourseCard category="LIFESTYLE" images={image1} title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                        time="2 hours ago"/>
                    </Grid>
                    <Grid xs={7} sm={5} md={3}>
                        <CourseCard category="TECHNOLOGY" images={image2} title="Simple Solutions for Complex Connections" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                        time="2 hours ago"/>
                    </Grid>
                    <Grid xs={7} sm={5} md={3}>
                        <CourseCard category="SPORT" images={image3} title="All things are difficult before they are easy" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                        time="2 hours ago"/>
                    </Grid>
                    <Grid xs={7} sm={5} md={3}>
                        <CourseCard category="EDUCATION" images={image4} title="How to Memorize everything you read?" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                        time="2 hours ago"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default HomePage;
