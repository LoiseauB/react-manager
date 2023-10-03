import { useEffect, useState } from "react";

function Standings(){
 const [standings, setStandings] = useState([]);
 useEffect(()=> {
    fetch('https://football-standings-api-pqotco6hc-azharimm.vercel.app/leagues/fra.1/standings?season=2023')
   .then(response => response.json())
   .then(data => setStandings(data.data.standings));
 })

 console.log(standings)
    return(
        <>
         <div className="container">
            <h2>Classements de la ligue 1</h2>
            <table>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Rank</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map(({team, note}, index)=>
                    <tr key={index}>
                        <td>{team ? team.name : "N/A"}</td>
                        <td>{note ? note.rank : "N/A"}</td>
                    </tr>
                    )}
                </tbody>
            </table>
         </div>
        </>
    )
}

export default Standings;