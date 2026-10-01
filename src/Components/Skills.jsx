function Skills() {
    return (
        <section id="skills" className="skills-section">

            <div className="skills-container">

                {/* Section heading */}
                <div className="skills-heading">
                    <p className="section-label">MY SKILLS</p>

                    <h2>
                        Technologies I <span>work with</span>
                    </h2>

                    <p>
                        Technologies and tools I use to build modern web applications,
                        APIs and database-driven solutions.
                    </p>
                </div>


                {/* Skill categories */}
                <div className="skills-grid">

                    {/* Frontend */}
                    <div className="skill-category">
                        <h3>Frontend</h3>

                        <div className="skill-list">
                            <div className="skill-item">
                                <span>React</span>
                            </div>

                            <div className="skill-item">
                                <span>JavaScript</span>
                            </div>

                            <div className="skill-item">
                                <span>HTML5</span>
                            </div>

                            <div className="skill-item">
                                <span>CSS3</span>
                            </div>
                        </div>
                    </div>


                    {/* Backend */}
                    <div className="skill-category">
                        <h3>Backend</h3>

                        <div className="skill-list">
                            <div className="skill-item">
                                <span>C#</span>
                            </div>

                            <div className="skill-item">
                                <span>ASP.NET Core</span>
                            </div>

                            <div className="skill-item">
                                <span>Web API</span>
                            </div>

                            <div className="skill-item">
                                <span>Entity Framework Core</span>
                            </div>


                        </div>
                    </div>


                    {/* Databases */}
                    <div className="skill-category">
                        <h3>Databases</h3>

                        <div className="skill-list">
                            <div className="skill-item">
                                <span>SQL Server</span>
                            </div>

                            <div className="skill-item">
                                <span>PostgreSQL</span>
                            </div>

                            <div className="skill-item">
                                <span>MySQL</span>
                            </div>
                        </div>
                    </div>


                    {/* Tools */}
                    <div className="skill-category">
                        <h3>Tools</h3>

                        <div className="skill-list">
                            <div className="skill-item">
                                <span>Git</span>
                            </div>

                            <div className="skill-item">
                                <span>GitHub</span>
                            </div>

                            <div className="skill-item">
                                <span>Postman</span>
                            </div>

                            <div className="skill-item">
                                <span>Swagger</span>
                            </div>

                            <div className="skill-item">
                                <span>Visual Studio</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;