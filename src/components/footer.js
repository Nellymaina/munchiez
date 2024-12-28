import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

 export default function Footer(){
    return(
        <div className="footer-page">
            <div className='footer-div'>
                <h2 className='link-title'>Quick links</h2>
<ul className="footer-links">
    <li>crisps</li>
    <li>cakes</li>
    <li>soda</li>
    <li>sweets</li>
</ul>
<h2 className='link-title'>Information</h2>
<ul className="footer-links">
    <li>Shipping policy</li>
    <li>About</li>
    <li>Community</li>
    <li>Terms of service</li>
    <li>contact</li>

</ul>
</div>          
<div className='footer-title'><p>Contact us</p></div>
  <div className='social-div'>
                
                <InstagramIcon className='social-icons'/>
                <FacebookIcon className='social-icons' />
                <EmailIcon className='social-icons' />
                <WhatsAppIcon className='social-icons'/>
                </div>
<p className='footer-copyright'>© 2024 Munchiez. All rights reserved.</p>
        </div>
    )
 }