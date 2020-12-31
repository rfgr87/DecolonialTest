import React from 'react'
import MainFeaturedPost from './MainFeaturedPost';
import image1 from './foto-decolonial22.png';


const mainFeaturedPost = {
  title: 'Manifesto',
  image: image1,
  imgText: 'main image description',
};


const Manifesto = () => {

      return (    
        <div>
        <MainFeaturedPost post={mainFeaturedPost} />
        </div>      
      )
  }

export default Manifesto