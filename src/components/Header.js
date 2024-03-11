import React from 'react'
import profile from "../images/avatar-jessica.jpeg"
const Header = () => {
  return (
    <>
    <div className='container_body'>
      <div className='container_family'>
          <div className='container'>
            <img src= { profile } alt=" profile" />
            <hr />
            <h3> Jessica Randall</h3>
            <h6>London, United Kingdom</h6>
            <hr />
            <p>"Front-end developer and avid reader"</p>
            <div className='button_group'>
              <button name="button" type="button">GitHub</button>
              <hr />
              <button name="button" type="button">Frontend Mentor</button>
              <hr />
              <button name="button" type="button">LinkedIn</button>
              <hr />
              <button name="button" type="button">Twitter</button>
              <hr />
              <button name="button" type="button">Instagram</button>
            </div>
            
          </div>
      </div>
    </div>
      
      
    </>
  )
}

export default Header
