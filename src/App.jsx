import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import shoe from './assets/shoe.png';
import flipkart from './assets/flipkart.png';
import amazon from './assets/amazon.png'

const App = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    setIsDragging(true);
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y
      });
    }
  }

  const handleMouseUp = (e) => {
    setIsDragging(false);
  }

  return (
    <>
      <NavBar />
      <main>

        <div className="right">
          <img src={shoe} style={{
  
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }} alt="Shoe" id='shoe' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onMouseLeave={handleMouseUp} />
        </div>
        <div className="left">
          <div className="heading1">
            YOUR FEET DESERVE THE BEST
          </div>
          <div className="heading2">
            your feet deserve the best and we're here to help you with that. your feet deserve the best and we're here to help you with that.
          </div>
          <div className="buttons">
            <div className="button-below shop-now-btn">
              <span>Shop Now</span>
            </div>
            <div className="button-below category-btn">
              <span>Category</span>
            </div>
          </div>
          <div className="also-available">
            Also Available On
            <div className="btns">
              <img src={flipkart} alt="" id='flipkart' />
              <img src={amazon} alt="" id='amazon' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App