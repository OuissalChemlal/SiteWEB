import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";


export const CV = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const Dateobj = new Date();
            const formattedDate = Dateobj.toLocaleDateString();
            setCurrentDate(formattedDate);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <header>
                <h3>Étudiante en Ingénierie Réseaux<br />et Télécoms à la recherche<br />d'un stage PFA</h3>
                <div className="horizontal-line1"></div>
                <div className="vertical-line"></div>
            </header>
            <section >
                <h4 className='centerleft'>CONTACT</h4>
                <article className='plz'>
                    <h6>
                        <li style={{ listStyle: 'none' }} className='flex'>
                            <FaLinkedin className='mr-2' />
                            <a href='https://www.linkedin.com/in/ouissal-chemlal-6504b6251' style={{ textDecoration: 'none', color: '#6B4C3A' }}>
                                Ouissal Chemlal
                            </a>
                        </li>
                    </h6>
                    <h6 className='flex'><FaPhoneSquareAlt className='mr-2' />+212 632-702957</h6>
                    <h6 className='flex'><PiMicrosoftOutlookLogoFill className='mr-2' />Ouissal.Chemlal@student.emi.ac.ma</h6>
                </article>
                <article className='centerleft'>
                    <h4>À PROPOS DE MOI</h4>
                    <h6>
                        Assidue, créative, et proactive.<br />
                        Spécialisée en Réseaux et Télécoms.<br />
                        Ambitieuse, en quête constante de<br />
                        progression et d'évolution dans ma<br />
                        discipline. Je cherche toujours à enrichir<br />
                        mes compétences et capacités.
                    </h6>
                </article>
                <article className='centerleft'>
                    <h4>OUTILS INFORMATIQUES</h4>
                    <h6>
                        Cisco Packet Tracer<br />
                        VMware vSphere<br />
                        MATLAB<br />
                        Python<br />
                        C++<br />
                        JavaScript<br />
                        HTML<br />
                        Wireshark<br />
                        Pack Microsoft Office<br />
                        Language SQL<br />
                        LabView
                    </h6>
                </article>
                <article className='centerleft'>
                    <h4>LANGUAGES</h4>
                    <h6>
                        Arabe : Langue maternelle<br />
                        Français : Courant<br />
                        Anglais : Courant
                    </h6>
                </article>
            </section>
            <section className='centerright'>
                <article>
                    <h4>ÉDUCATION</h4>
                    <h5>
                        <strong>Lycée Abdellah Guennoun, Bejaad</strong><br />
                        Baccalauréat ScienceMath, mention Très Bien 2019/2020
                    </h5>
                    <h5>
                        <strong>Lycée Ibn Abdoun, Khouribga</strong><br />
                        Classes préparatoires aux grandes écoles MPSI/MP 2020/2022
                    </h5>
                    <h5>
                        <strong>L'Ecole Mohammadia d'Ingénieurs, Rabat</strong><br />
                        Cycle d'ingénierie en réseaux et télécoms 2022/2024
                    </h5>
                </article>
                <article>
                    <h4>EXPÉRIENCE PROFESSIONNELLE</h4>
                    <h5>
                        <strong>Stage d'initiation chez OCP GROUP | 2022 - 2023</strong><br />
                        Étude du réseau électrique de la Mine de Sidi Chennane, Khouribga
                    </h5>
                </article>
                <article>
                    <h4>DIVERS</h4>
                    <h5>
                        <strong> TIPE : Travaux D'initiative Personnelle Encadrés | 2021 - 2022</strong><br />
                        Lutte contre les incendies: Étude d'un extincteur à ondes sonores
                    </h5>
                    <h5>
                        <strong>Projets Intégrés | 2023 - 2024<br />
                            Projet 1 :</strong> Utilisation Des Fibres Optiques Dans l'Aérospatiale :<br />
                        Câblage de la nouvelle génération des avions<br />
                        <strong>Projet 2 :</strong> Mise en place d'une chaîne de transmission/réception<br />
                        avec modulation OFDM sur USRP et LabView
                    </h5>
                    <h5>
                        <strong>Certificats | 2023 - 2024</strong><br />
                        CCNAv7: Introduction to Networks<br />
                        CCNAv7: Switching, Routing, and Wireless Essentials
                    </h5>
                </article>
                <article>
                    <h4>COMPETENCES</h4>
                    <h5>
                        <b>L</b>eadership<br />
                        <b>C</b>réativité<br />
                        <b>E</b>sprit d'initiative<br />
                        <b>C</b>ommunication efficace<br />
                        <b>R</b>ésolution de problèmes<br />
                        <b>A</b>utonomie
                    </h5>
                </article>
            </section>
            <div className="horizontal-line2"></div>
            <footer>
                Édité par : CHEMLAL Ouissal.<br />
                Dernière mise à jour : {currentDate}.<br />
                © EMI, Tous droits réservés.
            </footer>
            <style>{`
                .her {
                    width: 30rem; 
                    float: left; 
                    margin-left: auto; 
                }

                  .plz{
                    transform: translateX(2rem);
                 }
 
                  body {
                    background-color: #F8F7F2; 
                    overflow-x: hidden; 
                    display: flex;
                    flex-direction: column;
                  }
                  
                  h3 {
                    font-family: 'The Seasons';
                    font-size: 35px;
                    text-align: center;
                    margin-top : 2rem;
                    color: #6B4C3A;
                    margin-bottom: -2rem;
                  }
                  
                  .horizontal-line1 {
                    border-bottom: 0.1rem solid #6B4C3A; 
                    margin: 5.8rem 0;
                    width: 100%;
                }

                  .horizontal-line2 {
                    border-bottom: 0.1rem solid #6B4C3A; 
                    margin: 65.9rem 0;
                    width: 100%;
                    margin-bottom: 3rem;
                }

                  .vertical-line {
                    position: absolute; 
                    top: 0;
                    left: 40%;
                    width: 0.1rem; 
                    height: 235.5%;
                    background-color: #6B4C3A; 
                    margin: 20rem 0;
                  }
                  
                  h4 {
                    font-family: 'The Seasons';
                    font-size: 1.5rem;
                    margin-bottom: -1.5%;
                    color: #6B4C3A;
                    line-height: 4;
                  }
                  
                  h5 {
                    font-family: 'Lovelace';
                    margin-bottom: 2%;
                    font-size: 1.2rem;
                    font-weight: normal;
                    color: #000000;
                  }
                  
                  h6 {
                    font-family: 'Lovelace';
                    margin-bottom: 0.75%;
                    font-size: 1.2rem;
                    color: #6B4C3A;
                  }
                  
                  .centerleft {
                    transform: translateX(-23rem);
                    text-align: center;
                    margin-top: 2%;
                  }
                  
                  .centerright {
                    transform: translateX(35rem) translateY(22rem);
                    text-align: left;
                    margin-top: -79.5%;
                  }
                  
                  footer {
                    font-family: 'Lovelace';
                    text-align: center;
                    font-size: 0.8rem;
                    font-weight: normal;
                    color: #000000;
                    transform: translateX(-7rem);
                  }                  
                  
            `}</style>

        </>
    );
}

export default CV;