import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import UnderConstruction from '../UnderConstruction/UnderConstruction';

function App() {
  const[yesClicked, setYesClicked] = useState(false);
  const [yesButtonBottom, setYesButtonBottom] = useState('100px');
  const [noButtonPosition, setNoButtonPosition] = useState({bottom: '100px', right: 'calc(50vw + 15px)' });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isUnderConstruction = windowWidth < 1050;

  const handleButtonHover = () => {
    const newPosition = {
      bottom: Math.max(20, Math.min(750, Math.random() * window.innerHeight)),
      right: Math.max(10, Math.min(1130, Math.random() * window.innerWidth)),
    };

    setNoButtonPosition(newPosition);
  };

  useEffect(() => {
    const handleResize = () => {
      let newBottom;

      if (window.innerHeight < 670) {
        newBottom = '10px';
      } else if (window.innerHeight > 800) {
        newBottom = '200px';
      } else {
        newBottom = '100px';
      }

      setNoButtonPosition({
        bottom: newBottom,
        right: 'calc(50vw + 15px)',
      });
      setYesButtonBottom(newBottom);
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="page">
      { isUnderConstruction 
      ? 
      (
        <UnderConstruction />
      ) 
      : 
      (
      !yesClicked 
      ?
      <>
      <img src={require(`../../images/cover.jpg`)} alt="Gosling" className="page__image" />
      <h1 className='page__question'>Wanna switch your {'{'}AS IS{'}'} = Ekaterinburg to {'{'}TO BE{'}'} = Kaliningrad in March?</h1>
      <div className='page__button-container'>
        <button 
          className='page__button-no' 
          style={{ position: 'absolute', bottom: noButtonPosition.bottom, right: noButtonPosition.right }}
          onMouseEnter={handleButtonHover}
        >
          Nope :(
        </button>
        <button 
        className='page__button-yes' 
        style={{ position: 'absolute', bottom: yesButtonBottom, left: 'calc(50vw + 15px)' }}
        onClick={() => { setYesClicked(true)}}
        >
          Yep :)
        </button>
      </div>
      </>
      :
      <>
      <div className='page__player-wrapper'>
          <ReactPlayer
            className='page__react-player'
            url='videos/yes.mov'
            playing={true}
            loop={true}
          />
      </div>
      <h1 className='page__title-yes'>!!! I am glad AF !!!</h1>
      </>
    )
    }
    </div>
  );
}

export default App;
