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
    { id: 1, title: "CTF PARTICIPATION CERTIFICATE", image: cert1 },
    { id: 2, title: "CYBER ETHICS", image: cert2 },
    { id: 3, title: "COPILOT FOR PRODUCTIVITY", image: cert3 },
    { id: 4, title: "NPTL (SWAYAM) Certificate", image: cert4 },
    { id: 5, title: "RESEARCH CONFERENCE", image: cert5 },
    { id: 6, title: "SOFTWARE DEVELOPMENT", image: cert6 },
    { id: 7, title: "SOFTWARE DEVELOPMENT", image: cert7 },
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
            <p>Experience & Certifications: Showcasing My Professional Journey  In CyberSecurity </p>
            <div className='experience-details'>
            <h3>1. CTF Development Team Member at Technex 2024
            Contributed to the development and management of the EncipherX cybersecurity CTF event at Technex 2024, gaining hands-on experience in organizing and implementing challenging CTF scenarios. Collaborated under the guidance of senior mentors, enhancing my technical knowledge and event management skills.<br/>

                 2. Currently developing the college website, which involves applying advanced web development skills and showcasing the expertise gained throughout my course. This project aims to enhance the online presence and user experience for students and faculty.<br/>
                
                3.Management Team Member for Departmental Events
                Actively participated in the management team for various departmental events. I demonstrated strong organizational skills and the ability to coordinate tasks effectively, ensuring the successful execution of events and fostering a collaborative environment.</h3>

            </div>
            
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
