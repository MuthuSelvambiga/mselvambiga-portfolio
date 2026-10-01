function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">

                <div className="projects-heading">
                    <p className="section-label">MY PROJECTS</p>
                    <h2>
                        Projects & <span>Client Work</span>
                    </h2>
                    <p>
                        A collection of web applications and business solutions
                        I have built using modern frontend and backend technologies.
                    </p>
                </div>

                {/* CLIENT WORK */}
                <div className="project-group">
                    <h3 className="project-group-title">CLIENT WORK</h3>

                    <div className="projects-grid">

                        <div className="project-card">

                            <div className="project-image">
                                <img
                                    src="/Projects/SD-Home.png"
                                    alt="Shakthi Divine Trips website"
                                />
                            </div>

                            <div className="project-content">
                                <span className="project-type">Client Project</span>

                                <h3>Shakthi Divine Trips</h3>

                                <p>
                                    A professional tour operator website with tour details,
                                    booking enquiries, pickup points and customer communication.
                                </p>

                                <div className="project-technologies">
                                    <span>React</span>
                                    <span>ASP.NET Core</span>
                                    <span>EF Core</span>
                                    <span>SQL Server</span>
                                </div>

                                <a href="#" className="project-link">
                                    VIEW DETAILS →
                                </a>
                            </div>

                        </div>

                    </div>
                </div>


                {/* PERSONAL PROJECTS */}
                <div className="project-group">
                    <h3 className="project-group-title">PERSONAL PROJECTS</h3>

                    <div className="projects-grid">

                        {/* Basketball Tracker */}
                        <div className="project-card">

                            <div className="project-image">
                                <img
                                    src="/Projects/BBT-Home.png"
                                    alt="Basketball Tracker application"
                                />
                            </div>

                            <div className="project-content">
                                <span className="project-type">Personal Project</span>

                                <h3>Basketball Tracker</h3>

                                <p>
                                    A basketball management application for managing teams,
                                    players, matches and statistics.
                                </p>

                                <div className="project-technologies">
                                    <span>ASP.NET Core</span>
                                    <span>EF Core</span>
                                    <span>PostgreSQL</span>
                                    <span>REST API</span>
                                </div>

                                <a href="#" className="project-link">
                                    VIEW DETAILS →
                                </a>
                            </div>

                        </div>


                        {/* drMed */}
                        <div className="project-card no-image">

                            <div className="project-placeholder">
                                <span>drMed</span>
                                <small>ASP.NET CORE • C# • SQL SERVER</small>
                            </div>

                            <div className="project-content">
                                <span className="project-type">Personal Project</span>

                                <h3>drMed</h3>

                                <p>
                                    A healthcare management application for managing users,
                                    doctors and appointments with secure authentication.
                                </p>

                                <div className="project-technologies">
                                    <span>ASP.NET Core</span>
                                    <span>C#</span>
                                    <span>EF Core</span>
                                    <span>SQL Server</span>
                                    <span>JWT</span>
                                </div>

                                <a href="#" className="project-link">
                                    VIEW DETAILS →
                                </a>
                            </div>

                        </div>



                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;