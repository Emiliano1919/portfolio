import './HomePage.css'; // Import your CSS file
import GenerativeArt from './GenerativeArt.jsx';

function HomePage() {
    return (
        <>
        <div className="main">
            <div className="mycomponent">
                <GenerativeArt/>
            </div>
            <div className="overlay-text">
                    <div className='first'>
                        <h1 >Emiliano</h1>
                    </div>
                    <div className='second'>
                        <h1>Jimenez</h1>
                    </div>
                    <div className='third'>
                        <h1>Guadarrama</h1>
                    </div>
            </div>
        </div>
        </>
        
      )
}
  
export default HomePage;