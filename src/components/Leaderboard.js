import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import LeadHead from './LeadHead';
import Header from './Header';

const Leaderboard = () => {
  return (
    <section>
      {/* <h1 className='underline text-4xl font-semibold text-center pt-2'>Phase-1 Leaderboard</h1> */}
      <Header />
      <LeadHead />
    </section>
  )
}

export default Leaderboard  