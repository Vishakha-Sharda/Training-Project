import React from 'react'
import pink from "../pink.avif"

import "../styles/test.css"
export default function Testimonail() {
  return (
    <div>
        <div className='imagee'  style={{backgroundImage:`url(${pink})`}}>   
        <div className='headerContainer'>
        <h1> <i> <b> Testimonial</b></i></h1> 
            </div>
            </div>
      <div className='body'>
      <div id="test1">
      <p>" The Healthcare Success team has proven to be extremely effective in increasing Urgent Care patient . </p>
    <p> volume Their expertise in search engine optimization, social media, and online advertising continue to </p>
      <p>generate a high volume of new patient referrals to our centers. I would highly recommend them."</p>
      </div>
      <div id="test2">
      <p>"We were highly impressed with the thoroughness of the onsite review and the overall marketing plan’s in-</p>
      <p>depth assessment.The Healthcare Success team was extremely knowledgeable in their areas of  </p>    
      <p>expertise and comprehensiveness of their review.Their recommendations were very detailed and</p>
      <p> provided us with a clear understanding of how we needed to proceed with program growth. </p>
      <p>I highly recommend the Healthcare Success team to any organization seeking ways to improve their </p>
      <p>patient volume and financial growth opportunities."</p>
      
      </div>
      <div id="test3">     
      <p>" The Healthcare Success team has proven to be extremely effective in increasing Urgent Care patient . </p>
    <p> volume Their expertise in search engine optimization, social media, and online advertising continue to </p>
      <p>generate a high volume of new patient referrals to our centers. I would highly recommend them."</p>

      </div>
      </div>      

    </div>
  )
}
