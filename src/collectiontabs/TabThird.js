import React from 'react'
import "../scss/tab.scss";
import bodies from "../assests/main.images/ls/Wagmi Wolves Club Bodies.gif";


const TabThird = () => {
  return (
    <>
    <section id="tabOne">
      <div className="container" style={{gridTemplateColumns:'2fr 1fr'}}>
        <div className="heading">
          <h1 

          >Layer Up</h1>
          <p>
          We are one of the first generative collections on Loopring Layer 2. As we move to Layer 1 we aim to bridge the gap, bringing more awareness to the Loopring ecosystem.
          </p>
        </div>
        <div className="content-img"  style={{justifyContent:'end'}}>
          <img src={bodies} alt="" />
        </div>
      </div>
    </section>
  </>
  )
}

export default TabThird
