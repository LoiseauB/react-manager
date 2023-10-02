function Teams({ teams }) {



    return (
        <>
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
        </>
    );
};


export default Teams;