import {search} from '@/data/index'

const state = {
  list: []
}

const mutations = {
  updateList(state, list){
    function formatPrice(price){
      price = price.toString();
      let len = price.length;
      return '￥'+price.slice(0, len-2)+'.'+price.slice(len-2);
    }

    list.forEach(item=>{
      item.sell_price = formatPrice(item.sell_price)
    })
    state.list = list;
  }
}

const actions = {
  async search({commit}, q){
    let data = await search(q);
    console.log('data...', data);
    commit('updateList', data.data);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
