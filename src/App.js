import "./App.css";
import About from "./Components/About";
import Typed from "typed.js";
import candle from "./candle1.gif";
import React, { useRef, useEffect } from "react";

const string = `Dear Friends, on this auspicious occasion of Diwali, may your lives
  be filled with light, laughter, and love. Wishing you a sparkling
  and joyous Diwali! `;

function App() {
  const data = useRef(null);

  useEffect(() => {
    const typed = new Typed(data.current, {
      strings: [string],
      typeSpeed: 40,
      backSpeed: 5,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });
    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="App">
        <div className="bg_container">
          {/* <div className="video">
            <video className="videoTag" autoPlay loop muted>
              <source src={media2} type="video/webm" />
            </video> */}
          <div className="BG">
            {/* <img id="myimg" src={bg2} alt="error" /> */}
          </div>
          <div className="content">
            <h4 className="text-content" ref={data}></h4>
          </div>

          <div className="footer">
            <ul>
              <li>
                <img src={candle} alt="Error" />
              </li>
              <li>
                <img src={candle} alt="Error" />
              </li>
              <li>
                <img src={candle} alt="Error" />
              </li>
              <li>
                <img src={candle} alt="Error" />
              </li>
              <li>
                <img src={candle} alt="Error" />
              </li>
            </ul>
          </div>
        </div>
        <About />
      </div>
    </>
  );
}

export default App;
