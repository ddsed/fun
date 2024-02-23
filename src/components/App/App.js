import React from 'react';

function App() {
  return (
    <div className="page">
      <img src={require(`../../images/cover.jpg`)} alt="Gosling" className="page__image" />
      <h1 className='page__question'>Wanna switch your {'{'}AS IS{'}'} = Ekaterinburg to {'{'}TO BE{'}'} = Kaliningrad?</h1>
      <div className='page__button-container'>
        <button className='page__button-no button'>Nope :(</button>
        <button className='page__button-yes button'>Yep</button>
      </div>
    </div>
  );
}

export default App;
