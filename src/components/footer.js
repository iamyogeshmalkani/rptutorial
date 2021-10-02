import React from 'react'
import  './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
           
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>RP <span>Tutorials</span></h3>

				<p class="footer-links">
                  
                    <a href="/" class="link-1">Home</a>
                    
					
                    <a href="/about">About</a>
					
					<a href="/blog">Blog</a>
				
					
				
					
					
					
					
					<a href="/contact">Contact</a>
				</p>

				<p class="footer-company-name">Company Name © 2015</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Kishangarh Village, Sector-A, Vasant Kunj</span>New Delhi, Delhi 110070</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 9911236404</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">shekharsingh9988@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the institute</span>
					Best coaching center in vasantkunj
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/be_your_master_/?utm_medium=copy_link"><i class="fa fa-instagram"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
        </div>
    )
}

