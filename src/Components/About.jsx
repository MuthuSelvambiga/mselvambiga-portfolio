function About() {
    return (
        <section id="about" className="about-section">

            <div className="about-container">

                {/* Left side */}
                <div className="about-content">

                    <p className="section-label">ABOUT ME</p>

                    <h2>
                        Building <span>modern</span> web solutions
                    </h2>

                    <p>
                        I'm Muthu Selambiga, a .NET and React Developer focused on
                        building modern web applications, business websites and
                        API-driven solutions.
                    </p>

                    <p>
                        I work with ASP.NET Core, React, C# and relational
                        databases to create reliable and user-friendly applications.
                    </p>

                    <a href="#contact" className="about-button">
                        LET'S WORK TOGETHER
                    </a>

                </div>

                {/* Right side */}
                <div className="about-info">

                    <div className="info-card">
                        <h3>2.5+</h3>
                        <p>Years .NET Experience</p>
                    </div>

                    <div className="info-card">
                        <h3>Web</h3>
                        <p>Application Development</p>
                    </div>

                    <div className="info-card">
                        <h3>React</h3>
                        <p>Frontend Development</p>
                    </div>

                    <div className="info-card">
                        <h3>API</h3>
                        <p>Backend & REST APIs</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;