import React from 'react'


function Item({Link,title}) {
  return (
    <div>
        <div >
          {/* <h2 >
            Site Map
          </h2> */}
          <ul>
            <h1 className='mb-1 font-poppins font-semibold text-xl'>{title}</h1>
            <ul className=' text-gray-800 cursor-pointer leading-normal'>
            <li>Home</li>
            <li>About Us</li>
            <li>Events</li>
            <li>Gallery</li>
            <li>Members</li>
            <li>Contact Us</li> 
            </ul>
          </ul>
          
          </div>
          
    </div>
  )
}

export default Item