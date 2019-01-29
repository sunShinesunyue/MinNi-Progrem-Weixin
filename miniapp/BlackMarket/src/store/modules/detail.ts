/**
 * 一：详情页的数据仓
 */
import {getProductDetail} from '@/data/index' // 1.有数据

// 2.内部状态数据
const state = {
    info:{}
}

// 3.行为
const actions = {
    // 4.异步取值
    async getProductDetail({commit},id) {
        let data = await getProductDetail(id) // 5.获取响应的数据
        console.log('----data',data)
    }
}

// 4.抛出
export default {
    namespaced:true,
    state,
    actions
}