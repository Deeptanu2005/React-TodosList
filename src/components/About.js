import React from 'react';

const About = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg border-0 rounded-3">
                        <div className="card-body text-center">
                            <h1 className="card-title fw-bold text-primary">About This Project</h1>
                            <p className="card-text mt-3">
                                This is a demo project built for learning purposes. It showcases fundamental concepts of React, including components, state management, and routing.
                            </p>
                            <hr />
                            <h4 className="text-secondary mt-3">Developer: <span className="fw-bold text-dark">Deeptanu Sen</span></h4>
                            <p className="text-muted">
                                Currently exploring <strong>Quantum Computing</strong>, <strong>Full-Stack Web & App Development</strong>, and various <strong>cutting-edge technologies</strong> to expand my knowledge every day.
                            </p>
                            <a href="https://github.com/Deeptanu2005/React-TodosList" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-3">
                                View Project on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;