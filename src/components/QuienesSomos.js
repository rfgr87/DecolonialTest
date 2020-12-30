import React from 'react'
import MainFeaturedPost from './MainFeaturedPost';
import image1 from './foto-simbiosis1.jpg';


const mainFeaturedPost = {
  title: 'Quienes Somos',
  image: image1,
  imgText: 'main image description',
};


const QuienesSomos = () => {

      return (    
        <div>
        <MainFeaturedPost post={mainFeaturedPost} />
        </div>      
      )
  }

export default QuienesSomos