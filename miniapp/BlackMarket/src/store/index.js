import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// 引入modules
import index from './modules/index'
import search from './modules/search'
import detail from './modules/detail'

export default new Vuex.Store({
  modules: {
    index,
    search,
    detail
  },
  plugins: [createLogger()]
})
