function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">

                <div className="contact-heading">
                    <p className="section-label">GET IN TOUCH</p>

                    <h2>
                        Let's build something <span>together</span>
                    </h2>

                    <p>
                        Looking for a developer to build a website, web application
                        or API? Feel free to get in touch.
                    </p>
                </div>

                <div className="contact-content">

                    <div className="contact-info">

                        <div className="contact-item">
                            <span className="contact-label">EMAIL</span>
                            <a href="mailto:your-email@example.com">
                                selvambiga97@gmail.com
                            </a>
                        </div>

                        <div className="contact-item">
                            <span className="contact-label">LOCATION</span>
                            <p>India</p>
                        </div>

                        <div className="contact-item">
                            <span className="contact-label">AVAILABLE FOR</span>
                            <p>Remote Jobs & Freelance Projects</p>
                        </div>

                    </div>


                    <div className="contact-actions">

                        <a
                            href="mailto:your-email@example.com"
                            className="contact-button primary-contact"
                        >
                            SEND ME AN EMAIL
                        </a>

                        <a
                            href="https://www.linkedin.com/in/selvambiga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-button"
                        >
                            LINKEDIN
                        </a>

                        <a
                            href="https://github.com/MuthuSelvambiga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-button"
                        >
                            GITHUB
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;