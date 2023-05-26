import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';

const TeamLeaderboard = () => {
  const accessToken = localStorage.getItem('accessToken')
  const [teamDetails, setTeamDetails] = useState([])

  const sortedTeams = [...teamDetails].sort((a, b) => b.score - a.score);

  useEffect(() => {
    axios.get('https://blockverseapi.brlakgec.com/leaderboard/', {
      headers: {
        Authorization: `Token ${accessToken}`
      }
    })  
    .then(response => {
      console.log(response.data);
      setTeamDetails(response.data.message)
      console.log(response.data.message)
      console.log(teamDetails);
    })
    .catch(error => {
      console.error(error);
    });
  }, [])
  return (
    <tbody>
        {
          sortedTeams.map((team, index) => {
            return (
              <tr className='bg-gray-100 m-4' key={index}>
                <td className="px-4 py-2 text-xl text-center">{index+1}</td>
                <td className="px-4 py-2 text-xl text-center">{team.team_name}</td>
                <td className="px-4 py-2 text-xl text-center">{team.score}</td>
                <td className="px-4 py-2 text-xl text-center">1:22:22</td>
              </tr>
            )
          })
        }
    </tbody>
  )
}

export default TeamLeaderboard
