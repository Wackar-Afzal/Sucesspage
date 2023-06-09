import { useEffect } from "react";
import "./failed.css"
import { Link } from "react-router-dom";
const Failed = () => {
    useEffect(() => {
      setTimeout(() => {
        document.querySelector('.done').classList.add('drawn');
      }, 500);
    }, []);

    return (
      <div className="parentClass">
<div className="contain">
        <div className="failedCOn">
          <h1>
            Error !
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
                  fill:"#b61919",
                  stroke:"#fd0236",
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
        points="11,12 25,24"
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
        points="25,12 11,24"
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
        <Link to="/" >Got to sucess page</Link>

        </div>
      </div>
      </div>
      
    );
  };
  
 
  export default Failed