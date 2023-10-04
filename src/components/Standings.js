import { useEffect, useState } from "react";

function Standings(){
 const [matchs, setMatchs] = useState([]);
 useEffect(()=> {
    const url = 'https://livescore-api.com/api-client/scores/history.json?competition_id=5&key='+process.env.REACT_APP_API_KEY+'&secret='+process.env.REACT_APP_API_SECRET
    fetch(url)
   .then(response => response.json())
   .then(data => setMatchs(data.data.match));
 })
    return(
        <>
         <div className="container">
            <h2>Scores de la ligue 1</h2>
            <table>
                <thead>
                    <tr>
                        <th>Domicile</th>
                        <th>Score</th>
                        <th>Visiteur</th>
                    </tr>
                </thead>
                <tbody>
                    {matchs.map((match, index)=>
                    <tr key={index}>
                        <td>{match.home_name ? match.home_name : "N/A"}</td>
                        <td>{match.et_score ? match.et_score : "N/A"}</td>
                        <td>{match.away_name ? match.away_name : "N/A"}</td>
                    </tr>
                    )}
                </tbody>
            </table>
         </div>
        </>
    )
}

export default Standings;