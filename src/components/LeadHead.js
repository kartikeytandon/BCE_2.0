import React from 'react'
import TeamLeaderboard from './TeamLeaderboard'

const LeadHead = () => {
  return (
    <>
      <div class="container px-12">
          <table class="table-auto w-full border-collapse">
              <thead>
                  <tr class="text-left bg-blue-500 border-b-2 text-white">
                      <th class="px-4 py-2 text-2xl">Position</th>
                      <th class="px-4 py-2 text-2xl">Team Name</th>
                      <th class="px-4 py-2 text-2xl">Current Accuracy</th>
                      <th class="px-4 py-2 text-2xl">Checks Made</th>
                  </tr>     
              </thead>
              <TeamLeaderboard />
          </table>
      </div>
    </>
  )
}

export default LeadHead
