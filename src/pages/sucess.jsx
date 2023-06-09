import React, { useEffect, useRef, useState } from 'react';
import "./SuccessPage.css"

import { Link } from 'react-router-dom';
const ConfettiAnimation = () => {
  const [phoolJhri, setPhoojheri]=useState(true)
  const containerRef = useRef(null);
  let confettiInterval;

  useEffect(() => {
    const getRandomAnimation = () => {
      const confettiAnimations = ["right","left","up","bottom"];
      const randomIndex = Math.floor(Math.random() * confettiAnimations.length);
      return confettiAnimations[randomIndex];
    };

    const renderConfetti = () => {

      confettiInterval = setInterval(() => {
        const confettiEl = document.createElement('div');
        confettiEl.classList.add('confetti');

        const size = Math.floor(Math.random() * 10) + 1 ;
        const xPos = Math.floor(Math.random() * 100) + 1 + '%';
        const yPos = -20 + 'px'; // Start from the top
        const duration = Math.random() * 3 + 5 + 's';
        const delay = Math.random() * 2 + 's';

        const randomColorIndex = Math.floor(Math.random() * confettiColors.length);
        const color = confettiColors[randomColorIndex];
        
        const confettiAnimation = getRandomAnimation();
        const width=size+ "px"
        const height=size*2 + "px"
        confettiEl.style.width = width;
        confettiEl.style.height = height;
        confettiEl.style.left = xPos;
        confettiEl.style.top = yPos;
        confettiEl.style.transform = `translate(${xPos,yPos})`;
        confettiEl.style.animationDuration = duration;
        confettiEl.style.animationDelay = delay;

        confettiEl.style.background = color;
        confettiEl.style.boxShadow = `inset -5px -5px 10px ${color}, inset 15px 5px 10px white,inset 12px 2px 3px ${color}`;
        confettiEl.style.animationName = confettiAnimation;
        confettiEl.classList.add(`confetti--animation-${confettiAnimation}`);
        containerRef.current.appendChild(confettiEl);

    if(phoolJhri==="false"){clearInterval(confettiInterval)}

      },100)
    };

    if(phoolJhri){renderConfetti()};


    return () => {
      clearInterval(confettiInterval);
    };
  }, [phoolJhri]);

  setTimeout(()=>{
    setPhoojheri("false")
  },10000)

  const confettiColors = ['#5A216F', '#722ED', '#9038A3', '#B04CBC ', '#D06FD8'];

  return<>
    {phoolJhri? <div className="confetti-container" ref={containerRef}>
    </div>:null} 
  
  <Congratulations/>


</>
};

export default ConfettiAnimation;



const Congratulations = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.done').classList.add('drawn');
    }, 500);
  }, []);

  return (
    <div className="contain">
      <div className="congrats">
        <h1>
          successfull !
        </h1>
        <div className="done">
          <svg
            version="1.1"
            id="tick"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 37 37"
            style={{ enableBackground: 'new 0 0 37 37' }}
            xmlSpace="preserve"
          >
            <path
              className="circ path"
              style={{
                fill: '#0cdcc7',
                stroke: '#07a796',
                strokeWidth: 3,
                strokeLinejoin: 'round',
                strokeMiterlimit: 10,
              }}
              d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
            />
            <polyline
              className="tick path"
              style={{
                fill: 'none',
                stroke: '#fff',
                strokeWidth: 3,
                strokeLinejoin: 'round',
                strokeMiterlimit: 10,
              }}
              points="11.6,20 15.9,24.2 26.4,13.8"
            />
          </svg>
        </div>
        <div className="text">
          <p>
            You have successfully booked an appointment with us. <br />
            Here are your details<br />
            Date: 12.12.12<br />
            Time: 11am<br />
            ID: 12324
          </p>
          <p>Eagerly awaiting your visit</p>
        </div>
        <p className="regards">Regards, Team Tarini Netradham</p>
        <Link to="/failed" >Got to failed page</Link>
      </div>
    </div>
  );
};

