import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Courses from '../Courses/Courses';
import coursedata from '../../data/coursedata.json'

const Home = () => {
    const [courses, setCourses] = useState(coursedata)
    const [selected, setSelected] = useState([])
    // console.log(coursedata);
    const handleClick =(course)=>{
        // console.log('product added', course);
        const newSelected = [...selected, course];
        setSelected(newSelected);
    }
    
    return (
        <div>

            <div className='CourseContainer container'>
                {
                    courses.map(course =>
                        <Courses
                            handleClick = {handleClick}
                            course = {course}
                    
                        ></Courses>
                        )
                }


            </div>
            

            <div className="card CartContainer d-flex justify-content-end align-items-start">
                <Cart selected={selected}></Cart>

            </div>

            
            
        </div>
        
    );
};

export default Home;