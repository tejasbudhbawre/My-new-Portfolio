import React, { useState } from 'react';
import './Experience.css';

// Importing certificate images
import cert1 from '../assets/certificates/CTF-1.png';
import cert2 from '../assets/certificates/cyber.jpg';
import cert3 from '../assets/certificates/Microsoft.png';
import cert4 from '../assets/certificates/NPTL .png';
import cert5 from '../assets/certificates/Research.png';
import cert6 from '../assets/certificates/Software_Development-1.png';
import cert7 from '../assets/certificates/Software_Development.png'

const certificates = [
    { id: 1, title: "Certificate 1", image: cert1 },
    { id: 2, title: "Certificate 2", image: cert2 },
    { id: 3, title: "Certificate 3", image: cert3 },
    { id: 4, title: "Certificate 4", image: cert4 },
    { id: 5, title: "Certificate 5", image: cert5 },
    { id: 6, title: "Certificate 6", image: cert6 },
    { id: 7, title: "Certificate 7", image: cert7 },
];

const Experience = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const openModal = (cert) => {
        setSelectedCert(cert);
    };

    const closeModal = () => {
        setSelectedCert(null);
    };

    return (
        <div className="experience-section">
            <h2>Experience & Certifications</h2>
            <p>Here are some certifications that showcase my skills in cybersecurity and web development.</p>
            <div className="certificates-container">
                {certificates.map((cert) => (
                    <div key={cert.id} className="certificate-card" onClick={() => openModal(cert)}>
                        <img src={cert.image} alt={cert.title} className="certificate-thumbnail" />
                        <h3>{cert.title}</h3>
                    </div>
                ))}
            </div>

            {selectedCert && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>×</button>
                        <img src={selectedCert.image} alt={selectedCert.title} className="full-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Experience;
