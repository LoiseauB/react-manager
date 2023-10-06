const initialState = {
    login: false,
    teams: JSON.parse(localStorage.getItem("teams")) || []
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'LOGIN': {
            let newLogin = { ...state };
            newLogin.login = !newLogin.login;
            return newLogin;
        }
        

        /*------ TEAM CASE -----*/

        case 'CREATE_TEAM': {
            let newTeam = {
                name: action.payload.name,
                color: action.payload.color,
                players: []
            }
            return {
                ...state,
                teams: [...state.teams, newTeam]
            };
        }

        case 'DELETE_TEAM': {
            return {
                ...state, 
                teams: state.teams.filter((team, index) => index !== action.payload.teamId )
            };
        }

        case 'EDIT_TEAM': {
            let newTeam = {
                name: action.payload.name,
                color: action.payload.color,
                players: [...state.teams[action.payload.teamId].players]
            }
            let newState = { ...state };
            newState.teams[action.payload.teamId] = newTeam;
            return newState;
        }

        case 'LOCAL_STORAGE': {
            let newState = {...state};
            newState.teams = action.payload.teams;
            return newState;
        }

         /*----- TEAM PLAYERS CASE -----*/

        case 'DELETE_PLAYER': {
            const teamId = action.payload.teamId;
            const playerId = action.payload.playerId;
            let newStatePlayers = [...state.teams[teamId].players];
            newStatePlayers.splice(playerId, 1);
            let newStateTeam= {...state.teams[teamId], players: newStatePlayers}
            let newStateTeams = [...state.teams];
            newStateTeams[teamId] = newStateTeam;
            return {...state, teams: newStateTeams};
        }

        case 'CREATE_PLAYER': {
            let newPlayers = {
                name: action.payload.name,
                age: action.payload.age,
                position: action.payload.position
            }
            let newState = { ...state };
            newState.teams[action.payload.teamId].players = [...newState.teams[action.payload.teamId].players, newPlayers]
            return newState;
        }

        case 'EDIT_PLAYER': {
            let newPlayers = {
                name: action.payload.name,
                age: action.payload.age,
                position: action.payload.position
            }
            let newState = { ...state };
            newState.teams[action.payload.teamId].players[action.payload.playerId] = newPlayers;
            return newState;
        }

        default: return state;
    }


}

export default AppReducer;