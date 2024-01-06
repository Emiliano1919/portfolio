import './GenerativeArt.css'
import { useEffect } from 'react';

function GenerativeArt() {
  useEffect(() => {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    const size = 500;
    const step = 20;
    const dpr = window.devicePixelRatio;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    context.scale(dpr, dpr);

    context.lineCap = 'square';
    context.lineWidth = 2 * dpr;
    context.strokeStyle = 'white';

    function draw(x, y, width, height) {
      const leftToRight = Math.random() >= 0.5;

      if (leftToRight) {
        context.moveTo(x, y);
        context.lineTo(x + width, y + height);
      } else {
        context.moveTo(x + width, y);
        context.lineTo(x, y + height);
      }

      context.stroke();
    }
    const drawFromScratch = () => {
      context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      context.beginPath(); // Begin a new path
      for (let x = 0; x < size; x += step) {
        for (let y = 0; y < size; y += step) {
          draw(x, y, step, step);
        }
      }
    };

    // Initial drawing
    drawFromScratch();

    // Set interval to draw from scratch every 5 seconds
    const drawingInterval = setInterval(drawFromScratch, 2500);

    // Cleanup: Clear the interval when the component is unmounted
    return () => clearInterval(drawingInterval);
  }, []); // Empty dependency array to ensure useEffect runs only once



  return (
    <div className="border">
      <div className="frame">
        <canvas></canvas>
      </div>
    </div>
  );
}

export default GenerativeArt;