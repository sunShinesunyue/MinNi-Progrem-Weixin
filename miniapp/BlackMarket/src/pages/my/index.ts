import { Vue, Component } from 'vue-property-decorator'

@Component({})

export default class extends Vue{
    // 2.储存用户信息
    userInfo:Object = {}

    // 1.获取用户信息 前面已经绑定这个点击事件了
    getUserInfo(res) {
        console.log('userInfo...',JSON.parse(res.mp.detail.rawData))
        // 判断
        if(res.mp.detail.rawData) {
            this.userInfo = JSON.parse(res.mp.detail.rawData) // 字符串
        }
    }
}