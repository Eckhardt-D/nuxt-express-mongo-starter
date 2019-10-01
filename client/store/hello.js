export const state = () => ({
  message: ''
})

export const getters = {
  message: state => state.message
}

export const mutations = {
  SET_MESSAGE: (state, payload) => {
    state.message = payload
  }
}

export const actions = {
  async getMessage({ commit }) {
    const data = await this.$axios.$get('/api')
    commit('SET_MESSAGE', data.message)
  }
}

export const namespaced = true