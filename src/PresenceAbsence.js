const state = {
  presence_absence: [
    {
      total: '12',
      presence: '5',
      absence: '1',
      leftover: '7',
      Authorized: '1',
    },
  ],
}
const getters = {
  GetPresenceAbsence(state) {
    return state.presence_absence
  },
}
const mutations = {}
const actions = {}

export default {
  state,
  getters,
  mutations,
  actions,
}
