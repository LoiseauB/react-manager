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
                    </>
                ))}
            </ul>
        </>
    );
};


export default Teams;