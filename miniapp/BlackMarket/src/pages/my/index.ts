import { Vue, Component } from 'vue-property-decorator'

@Component({})

export default class extends Vue{
    // 2.储存用户信息
    userInfo:Object = {}
    showModal: boolean = false

    // 1.获取用户信息 前面已经绑定这个点击事件了
    getUserInfo(res) {
        console.log('userInfo...',JSON.parse(res.mp.detail.rawData))
        // 判断
        if(res.mp.detail.rawData) {
            this.userInfo = JSON.parse(res.mp.detail.rawData) // 字符串
        }
    }

    // 3.代付款的点击事件
    goOrder(type) {
        // 4.跳转页面  每一次跳转将页面的类型送过去
        wx.navigateTo({
            url:`/pages/order/main?type=${type}`
        })
    }

    // 4.在生命周期里面设置一些
    onShow() {
        // 5.微信的授权检测  scope.userInfo  res.authSetting['scope.userInfo'] 布尔值 
        wx.getSetting({
            success:res=> {
                if(res.authSetting['scope.userInfo']) {
                    // 6.为true 检测成功 授权成功
                    wx.getUserInfo({
                        success:res => {
                            this.userInfo = res.rawData;
                        }
                    })
                } else {
                    // 7.弹框提示去授权
                    this.showModal = true;
                }
            }
        })
    }
}