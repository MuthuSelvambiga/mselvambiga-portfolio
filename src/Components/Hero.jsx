function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-content">

                {/* LEFT SIDE */}
                <div className="hero-text">

                    <p className="hero-greeting">
                        HI, I'M MUTHU SELVAMBIGA
                    </p>

                    <h1>
                        .NET & <span>React</span>
                        <br />
                        DEVELOPER
                    </h1>

                    <p className="hero-description">
                        I build modern web applications and professional
                        websites for businesses using React, ASP.NET Core and modern databases.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn primary-btn">
                            VIEW MY PROJECTS
                        </a>

                        <a href="#contact" className="btn secondary-btn">
                            CONTACT ME
                        </a>
                    </div>

                </div>


                <div className="tech-visual">

                    {/* Connection lines */}
                    <svg
                        className="tech-connections"
                        viewBox="0 0 600 500"
                    >
                        {/* React → .NET Core */}
                        <line
                            x1="190"
                            y1="230"
                            x2="240"
                            y2="230"
                            className="connection-line"
                        />

                        {/* .NET Core → SQL Server */}
                        <line
                            x1="410"
                            y1="205"
                            x2="435"
                            y2="135"
                            className="connection-line"
                        />

                        {/* .NET Core → MySQL */}
                        <line
                            x1="410"
                            y1="230"
                            x2="435"
                            y2="220"
                            className="connection-line"
                        />

                        {/* .NET Core → PostgreSQL */}
                        <line
                            x1="410"
                            y1="255"
                            x2="435"
                            y2="305"
                            className="connection-line"
                        />
                    </svg>
                    {/* React */}
                    <div className="tech-core react-core">
                        <div className="react-logo">⚛</div>
                        <span>REACT</span>
                    </div>

                    {/* .NET */}
                    <div className="tech-core dotnet-core">
                        <strong>.NET</strong>
                        <span>Core</span>
                    </div>

                    {/* Databases */}
                    <div className="database-list">

                        <div className="database-item sql">
                            <div className="database-icon">SQL</div>
                            <span>SQL Server</span>
                        </div>

                        <div className="database-item mysql">
                            <div className="database-icon">MY</div>
                            <span>MySQL</span>
                        </div>

                        <div className="database-item postgres">
                            <div className="database-icon">PG</div>
                            <span>PostgreSQL</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;