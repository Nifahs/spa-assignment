import React from 'react';
import '../Courses/Courses.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Courses = (props) => {
    const course = props.course;
    const{author, image, title, price} = course;
    return (
        <div className='container'>
            <div className="block card">
            <img src={image} className='card-img-top' alt=""/>
            <div>
                <p className='title card-text'>{title}</p>
                <p className='author'>By {author}</p>
                <p className='price'>price: ${price}</p>
            </div>
                
                <div className='d-flex justify-content-center'><button className='btn btn-success' onClick={()=>{props.handleClick(props.course)}}><FontAwesomeIcon icon={faCartPlus} /> Enroll Now</button></div>
            </div>
        </div>
    );
};

export default Courses;