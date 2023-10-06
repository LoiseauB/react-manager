const initialState = {
    login: false,
    player: null,
    teams: []
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'LOGIN': {
            let newLogin = { ...state };
            newLogin.login = !newLogin.login;
            return newLogin;
        }
        default: return state;



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
            let newState = { ...state };
            newState.teams.splice(action.payload.id, 1);
            return newState;
        }

        case 'EDIT_TEAM': {
            let newTeam = {
                name: action.payload.name,
                color: action.payload.color,
                players: []
            }
            let newState = { ...state };
            newState.teams[action.payload.teamId] = newTeam;
            return newState;
        }



        case 'PLAYER': {
            let newPlayer = { ...state };
            newPlayer.player = action.payload.id;
            return newPlayer;
        }

        case 'DELETE_PLAYER': {
            let newState = { ...state };
            newState.teams[action.payload.teamId].players.splice(action.payload.playerId, 1);
            return newState;
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
    }


}

export default AppReducer;