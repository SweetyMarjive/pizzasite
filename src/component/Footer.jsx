import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
<FacebookIcon/> <TwitterIcon/> <InstagramIcon/> <LinkedInIcon/>
            </div>
            <p> &copy; 2024 TheWorldOfSlices.com </p>
        </div>
    )
}

export default Footer