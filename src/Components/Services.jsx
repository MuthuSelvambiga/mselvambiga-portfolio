function Services() {
    return (
        <section id="services" className="services-section">
            <div className="services-container">

                <div className="services-heading">
                    <p className="section-label">WHAT I DO</p>

                    <h2>
                        Services I <span>provide</span>
                    </h2>

                    <p>
                        I build modern websites and web applications for businesses
                        and organizations with reliable frontend, backend and database
                        solutions.
                    </p>
                </div>

                <div className="services-grid">

                    <div className="service-card">
                        <div className="service-number">01</div>

                        <h3>Business Websites</h3>

                        <p>
                            Professional and responsive websites for businesses,
                            service providers and local brands.
                        </p>

                        <div className="service-tech">
                            React · HTML · CSS · JavaScript
                        </div>
                    </div>


                    <div className="service-card">
                        <div className="service-number">02</div>

                        <h3>Web Applications</h3>

                        <p>
                            Custom web applications designed around your business
                            requirements and workflows.
                        </p>

                        <div className="service-tech">
                            React · ASP.NET Core · C#
                        </div>
                    </div>


                    <div className="service-card">
                        <div className="service-number">03</div>

                        <h3>REST API Development</h3>

                        <p>
                            Secure and scalable APIs for web applications,
                            mobile applications and business systems.
                        </p>

                        <div className="service-tech">
                            ASP.NET Core · Go · REST API
                        </div>
                    </div>


                    <div className="service-card">
                        <div className="service-number">04</div>

                        <h3>Database Solutions</h3>

                        <p>
                            Database design and integration for applications
                            that need reliable data management.
                        </p>

                        <div className="service-tech">
                            SQL Server · PostgreSQL · MySQL
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Services;