import React, { useState, useEffect } from "react";
import "./land.css";
import profileImg from "../assets/first.png";
import resume from "../assets/resume.gif";
function Land() {
    const words = ["Developer", "Analyst"];
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout;

        if (!isDeleting && text.length < currentWord.length) {
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, text.length + 1));
            }, 150);
        } else if (!isDeleting && text.length === currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && text.length > 0) {
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, text.length - 1));
            }, 100);
        } else if (isDeleting && text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words]);

    return (
        <div className="land-container" id="home">
            <div className="text-container">
                <h1 className="starter">Aspiring</h1>
                <h1 className="dev">{text}<span className="cursor">|</span></h1>
                <h1 className="char">Passionate about creating</h1>
                <h1 className="char">clean, functional,</h1>
                <h1 className="char">and engaging digital</h1>
                <h1 className="char">experience.</h1>
            </div>

            <div className="image-container">
                <img src={profileImg} alt="Profile" className="profile-img" />
            </div>

            <div className="button-column">
                <button className="side-btn social-btn">
                    <a href="https://www.linkedin.com/in/shan-benzer" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
                    </a>
                </button>
                <button className="side-btn social-btn">
                    <a href="https://www.instagram.com/des1redug/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
                    </a>
                </button>
                <button className="side-btn social-btn">
                    <a href="https://www.facebook.com/des1redug" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" />
                    </a>
                </button>
                <button className="side-btn download-btn">
                    <a
                        href="https://drive.google.com/uc?export=download&id=1jaO7jyH6UPR_0zrMNuhJn_z-EGL8EkoO"
                        download="resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={resume}
                            alt="download icon"
                            width="120"
                            height="120"
                            style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                        />
                    </a>
                </button>
            </div>
        </div>

    );
}

export default Land;