import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Star = ({rating = 4.5}) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        
        if (rating >= index+1) {
            return <FaStar  key={index} className='text-yellow-400'/>;
        } else if (rating >= index + 0.5) {
              return <FaStarHalfAlt key={index} className="text-yellow-400" />;
            } else {
            return <FaRegStar key={index} className="text-yellow-400" />;
            
        }
    })
  return <div className='flex gap-1'>{stars}</div>;
}

export default Star