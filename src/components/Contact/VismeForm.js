import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle'; // Ensure you have Particle component defined
// import './VismeForm.css'; // Import any specific styles for VismeForm if needed

function VismeForm() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Container className="visme-container">
            <Particle /> {/* Assuming Particle is a custom component for effects */}
            <div
                className="visme_d"
                data-title="Quick Contact Form"
                data-url="rx7nookz-quick-contact-form"
                data-domain="forms"
                data-full-page="true"
                data-min-height="500px"
                data-form-id="75901"
            ></div>
        </Container>
    );
}

export default VismeForm;
