 import React from 'react';
  import '../styles/contact.css'
 function ContactUs() {
  
   return (
     <div className="contact-us-page"  >
       <header>
       
         <h1>Contact Us</h1>
       </header>
       <main>
         <section>
           <form  className="contact-image" >    {/*action="submit_form.php" method="post"*/}
             <h2>Contact Form</h2> <p>If you have any questions or concerns, please don't hesitate to contact us.</p>
             <label htmlFor="name">Name:</label>
             <input type="text" id="name" name="name" required />
             <label htmlFor="email">Email:</label>
             <input type="email" id="email" name="email" required />
             <label htmlFor="message">Message:</label>
             <textarea id="message" name="message" rows="4" required></textarea>
             <button type="submit">Submit</button>
           </form>
         </section>
       </main>
       <footer className='foot'>
       <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
           <p>Phone: +1-123-456-7890</p>
           <p>Address: 123 Main Street, City, Country</p>
           
       </footer>
     
     </div>
   );
 }
 
 export default ContactUs;
 