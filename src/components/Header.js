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
            <div class="d-grid gap-3">
              <button class="btn btn-primary" type="button"><span>GitHub</span></button>
              <button class="btn btn-primary" type="button"><span>Frontend Mentor</span></button>
              <button class="btn btn-primary" type="button"><span>LinkedIn</span></button>
              <button class="btn btn-primary" type="button"><span>Twitter</span></button>
              <button class="btn btn-primary" type="button"><span>Instagram</span></button>
            </div>
            
          </div>
      </div>
    </div>
      
      
    </>
  )
}

export default Header
