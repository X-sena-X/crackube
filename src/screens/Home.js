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
            
            
            <Grid container spacing={0.5} className="couseGrid">
                <Grid xs={3}>
                    <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={3}>
                    <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={3}>
                    <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={3}>
                    <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={3}>
                    <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={3}>
                    <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={3}>
                    <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                <Grid xs={3}>
                    <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                    time="2 hours ago"/>
                </Grid>
                
            </Grid>
        </div>
    )
}
export default HomePage;
/*
<div className='CourseHolder'>
                <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                 time="2 hours ago"/>
                <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                 time="2 hours ago"/>
                <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                 time="2 hours ago"/>
                <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                 time="2 hours ago"/>
                <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                 time="2 hours ago"/>
                <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                 time="2 hours ago"/>
                <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                 time="2 hours ago"/>
                <CourseCard category="Financial" title="Changing people's lifestyles for the better" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus"
                 time="2 hours ago"/>
                
            </div> */