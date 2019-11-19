
const state = {
  users: []
};

const getters = {

};

const actions = {
  fetchingUsers({commit}, userDetails) {
    commit('updateUsers', userDetails)
  }
};

const mutations = {
  updateUsers: (state, userDetails) => {
    state.users = [...userDetails];
  }
};

export default {
  state,
  actions,
  getters,
  mutations
}
