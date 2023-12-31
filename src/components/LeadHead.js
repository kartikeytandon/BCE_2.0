import React from 'react'
import TeamLeaderboard from './TeamLeaderboard'
import { Link } from 'react-router-dom'

const LeadHead = () => {
  return (
    <>
      <div class="container px-12 mx-auto">
        <div className='flex items-center justify-center gap-80'>
          <h1 className='text-4xl text-center py-4'>LEADERBOARD</h1>
          <h1 className='text-4xl text-center py-4 invisible'>HELLO THERE</h1>
          <button className='px-4 py-2'>
            <Link className='text-white text-lg' to='/blockverse'>CLOSE</Link>
          </button>
        </div>
          <table class="table-auto w-full border-collapse rounded-lg leadTable">
              <thead>
                  <tr class="text-left text-white bg-primary">
                      <th class="px-4 py-2 text-2xl text-center">Position</th>
                      <th class="px-4 py-2 text-2xl text-center">Team Name</th>
                      <th class="px-4 py-2 text-2xl text-center">Current Accuracy</th>
                      <th class="px-4 py-2 text-2xl text-center">Time Taken</th>
                  </tr>     
              </thead>
              <TeamLeaderboard />
          </table>
      </div>
    </>
  )
}

export default LeadHead
