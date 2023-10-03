function Teams({ teams }) {



    return (
        <>
        <div className="container">
            <ul>
                {teams.map(team => (
                    <>
                        <li>
                            - Team Name : {team.name}
                        </li>
                        <li>
                            - Team Color : {team.color}
                        </li>
                        <ul>
                        {team.players.map(player =>(
                        <li>
                                - {player.name}
                        </li>

                        ))}
                        </ul>
                    </>
                ))}
            </ul>
            </div>
        </>
    );
};


export default Teams;