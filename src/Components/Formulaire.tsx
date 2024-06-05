import React, { useState, ChangeEvent } from 'react';

export const Formulaire = () => {
    const [charCount, setCharCount] = useState(300);

    const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCharCount(300 - event.target.value.length);
    };

    return (
        <>
            <h2>Laissez-moi un message</h2>
            <h3>Les champs obligatoires sont marqués par '*'.</h3>
            <form action="#" method="post">
                <fieldset>
                    <label htmlFor="nom">Nom * :</label>
                    <input type="text" id="nom" name="nom" required />

                    <label htmlFor="prenom">Prénom * :</label>
                    <input type="text" id="prenom" name="prenom" required />

                    <div className="radio-group">
                        <label>Genre * :</label>
                        <input type="radio" id="homme" name="genre" value="Homme" />
                        <label htmlFor="homme">Homme</label>
                        <input type="radio" id="femme" name="genre" value="Femme" />
                        <label htmlFor="femme">Femme</label>
                        <input type="radio" id="autre" name="genre" value="Autre" />
                        <label htmlFor="autre">Autre</label>
                    </div>

                    <label htmlFor="age">Age * :</label>
                    <select id="age" name="age">
                        <option value="18-20">18 - 20</option>
                        <option value="21-26">21 - 26</option>
                        <option value="27-32">27 - 32</option>
                        <option value="33-40">33 - 40</option>
                    </select>

                    <label htmlFor="email">Email * :</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="telephone">Téléphone :</label>
                    <input type="tel" id="telephone" name="telephone" />

                    <label htmlFor="linkedin">LinkedIn :</label>
                    <input type="text" id="linkedin" name="linkedin" />

                    <label htmlFor="poste">Poste Occupé :</label>
                    <input type="text" id="poste" name="poste" />

                    <label htmlFor="entreprise">Entreprise :</label>
                    <input type="text" id="entreprise" name="entreprise" />

                    <label htmlFor="about">Laissez-moi un message, je vous répondrai dès que je serai libre * :</label>
                    <textarea id="about" name="about" rows={4} maxLength={300} required onInput={handleInput}></textarea>
                    <div id="charCounter" className="char-counter">{charCount} caractères restants</div>

                    <label>Votre contact préféré :</label>
                    <div className="flex-item">
                        <input type="checkbox" id="contact_telephone" name="contact_prefere" value="telephone" />
                        <label htmlFor="contact_telephone">Téléphone</label>
                    </div>
                    <div className="flex-item">
                        <input type="checkbox" id="contact_email" name="contact_prefere" value="email" />
                        <label htmlFor="contact_email">Email</label>
                    </div>
                    <div className="flex-item">
                        <input type="checkbox" id="contact_linkedin" name="contact_prefere" value="linkedin" />
                        <label htmlFor="contact_linkedin">LinkedIn</label>
                    </div>
                </fieldset>

                <input type="submit" value="Soumettre" />
            </form>

            <style>{`
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    background-color: #F8F7F2; 
                }

                h2 {
                    font-family: 'The Seasons';
                    font-size: 70px;
                    text-align: center;
                    line-height: 2.75;
                    color: #000;
                    font-weight: bold
                }

                .flex-container {
                    display: flex;
                    flex-wrap: wrap;
                }

                .flex-item {
                    margin-right: 20px;
                    margin-bottom: 10px;
                    display: flex;
                    align-items: center;
                }

                .flex-item input {
                    margin-right: 5px;
                }

                fieldset {
                    border: 4px solid #ccc;
                    padding: 20px;
                    margin-bottom: 20px;
                }

                legend {
                    font-weight: bold;
                    padding: 0 10px;
                    color: #333;
                }

                label {
                    margin-bottom: 5px;
                }

                input[type="text"],
                input[type="email"],
                input[type="tel"],
                input[type="number"],
                textarea,
                select {
                    width: calc(100% - 30px);
                    padding: 10px;
                    margin-bottom: 20px;
                    border: 2px solid #ccc;
                    border-radius: 5px;
                    box-sizing: border-box;
                }

                textarea {
                    resize: vertical;
                }

                input[type="submit"] {
                    padding: 10px 20px;
                    background-color: #28a745;
                    border: none;
                    color: white;
                    cursor: pointer;
                    border-radius: 10px;
                }

                input[type="submit"]:hover {
                    background-color: #218838;
                }

                .radio-group {
                    align-items: flex-end;
                    margin-bottom: 20px;
                }

                .radio-group input {
                    margin-left: 10px;
                    margin-right: 5px;
                }

                .char-counter {
                    font-size: 0.9em;
                    color: #666;
                    text-align: right;
                }

                h3{
                        font-family: 'Lovelace';
                        font-size: 1.1rem;
                        color: #000000;
                        max-width: 90%;
                        margin-left: auto;
                        margin-right: auto;
                }
            `}</style>
        </>
    );
};
