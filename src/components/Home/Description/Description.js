import React from 'react';
import DescriptionPost from '../DescriptionPost/DescriptionPost';
import wilson from '../../../images/review2.jpg';
import './Description.css'


const descriptionData = [
    {
        title : 'Best Wedding planner in the country',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Tom Cruise',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Make your birthday more memorable',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Amir',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Organize wonderful concert',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Caprio',
        authorImg : wilson,
        date : '23 April 2019'
    },
]

const Description = () => {
    return (
       <section id="blogs" className="descriptions my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-uppercase miniTitle"  style={{ color: '#1cc7c1' }}>our blog</h5>
                    <h1 className="headerTitle">From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5 row">
                    {
                        descriptionData.map(blog => <DescriptionPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Description;