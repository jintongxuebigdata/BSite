const state = {
  currentActiveTab: 1
}

const mutations = {
  CHANGE_CURRENT_ACTIVE_TAB: (state, payload) => {
    state.currentActiveTab = payload
  }
}

const actions = {
  changeCurrentActiveTab ({ commit }, payload) {
    commit('CHANGE_CURRENT_ACTIVE_TAB', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
