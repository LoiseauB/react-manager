export const login = () => ({
  type: 'LOGIN'
});

export const createTeam = (name, color) => ({
  type: 'CREATE_TEAM',
  payload: {
    name,
    color
  }
});

export const deleteTeam = teamId => ({
  type: 'DELETE_TEAM',
  payload: {
    teamId,
  }
});

export const editTeam = (teamId, name, color) => ({
  type: 'EDIT_TEAM',
  payload: {
    teamId,
    name,
    color
  }
});

export const createPlayer = (teamId, name, age, position) => ({
  type: 'CREATE_PLAYER',
  payload: {
    teamId,
    name,
    age,
    position
  }
});

export const deletePlayer = (teamId, playerId) => ({
  type: 'DELETE_PLAYER',
  payload: {
    teamId,
    playerId
  }
});

export const editPlayer = (teamId, playerId, name, age, position) => ({
  type: 'EDIT_PLAYER',
  payload: {
    teamId,
    playerId,
    name,
    age,
    position
  }
});

export const setLocalTeams = teams => ({
  type: 'LOCAL_STORAGE',
  payload: { teams }
})