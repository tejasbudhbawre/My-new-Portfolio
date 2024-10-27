import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent default form submission

        emailjs.sendForm('service_ayykmdf', 'template_gvci3qf', form.current, 'JIeb8ARud_HqR361A')
            .then((result) => {
                alert('Message sent successfully!');
                console.log(result.text);
            }, (error) => {
                alert('Error sending message, please try again.');
                console.log(error.text);
            });

        // Optionally reset the form
        e.target.reset();
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h2>Contact Me</h2>
                    <p>Tejas Budhbaware</p>
                    <p>Email: <a href="mailto:budhbawret@gmail.com">budhbawret@gmail.com</a></p>
                    <div className="social-links">
                        <a href="https://github.com/tejasbudhbawre" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.instagram.com/tejasbudhbawre/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.linkedin.com/in/tejas-budhbaware-45b122280/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>

                <div className="contact-form">
                    <h3>Get in Touch</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Your Name" required />
                        <input type="email" name="user_email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <p className="footer-credit">© {new Date().getFullYear()} Tejas Budhbaware. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
