import React from 'react';
import './css/Home.css';
import CourseCard from '../Components/courseCard';
import Grid from '@mui/material/Unstable_Grid2';

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
            
            
            <Grid container rowSpacing={4} columnSpacing={0.2} className="couseGrid" disableEqualOverflow>
                <Grid xs={7} sm={5} md={3}>
                    <CourseCard category="Financial" images="../Assests/Rectangle1073.png" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={7} sm={5} md={3}>
                    <CourseCard category="Financial" images="../Assests/Rectangle1075.png" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={7} sm={5} md={3}>
                    <CourseCard category="Financial" images="../Assests/Rectangle1077.png" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={7} sm={5} md={3}>
                    <CourseCard category="Financial" images="../Assests/Rectangle1079.png" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={5} sm={4} md={3}>
                    <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={5} sm={4} md={3}>
                    <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={5} sm={4} md={3}>
                    <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={5} sm={4} md={3}>
                    <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                
            </Grid>
        </div>
    )
}
export default HomePage;
