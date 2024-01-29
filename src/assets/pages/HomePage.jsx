import './HomePage.css'; // Import your CSS file
import GenerativeArt from './GenerativeArt.jsx';
import {useEffect, useState } from 'react';

function HomePage() {
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
// For displaying name only if it is not in a mobile phone
const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
useEffect(() => {
    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
        <>
        <div className="main">
            <div className="mycomponent">
                <GenerativeArt/>
            </div>
            {!isMobile?(<div className="overlay-text">
                    <div className='first'>
                        <h1 >Someeee</h1>
                    </div>
                    <div className='second'>
                        <h1>Randommm</h1>
                    </div>
                    <div className='third'>
                        <h1>LongName</h1>
                    </div>
            </div>): null}
            
        </div>
        </>
        
      )
}
  
export default HomePage;