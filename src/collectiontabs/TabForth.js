import React from 'react'
import "../scss/tab.scss";
import Origins from "../assests/main.images/ls/Wagmi Wolves Club Origins.gif";

const TabForth = () => {
  return (
    <>
      <section id="tabOne">
        <div className="container" style={{gridTemplateColumns:'1fr 2fr'}}>
        
          <div className="content-img"  style={{justifyContent:'start'}}>
            <img src={Origins} alt="" />
          </div>
          <div className="heading">
            <h1 >Conservation</h1>
            <p>
            We stand for the protection of wildlife. A vetted wolf conservation will be implemented into our metadata to ensure that every wolf traded is a donation to saving wolves.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default TabForth
