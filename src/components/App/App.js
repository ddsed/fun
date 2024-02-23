import React, {useState} from 'react';
import ReactPlayer from 'react-player'

function App() {
  const[yesClicked, setYesClicked] = useState(false)

  return (
    <div className="page">
      {!yesClicked ?
      <>
      <img src={require(`../../images/cover.jpg`)} alt="Gosling" className="page__image" />
      <h1 className='page__question'>Wanna switch your {'{'}AS IS{'}'} = Ekaterinburg to {'{'}TO BE{'}'} = Kaliningrad?</h1>
      <div className='page__button-container'>
        <button className='page__button-no button'>Nope :(</button>
        <button className='page__button-yes button' onClick={() => { setYesClicked(true)}}>Yep</button>
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
      }
    </div>
  );
}

export default App;
