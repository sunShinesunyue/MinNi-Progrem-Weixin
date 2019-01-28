import { Vue, Component } from 'vue-property-decorator'
import {mapState, mapActions} from 'vuex'

@Component({
  computed: {
    ...mapState({
      list: state=>state['search'].list
    })
  },
  methods: {
    ...mapActions({
      search: 'search/search'
    })
  }
})
export default class Search extends Vue{
  value: string = '充电器'
  history: string[] = []
  showHistory: boolean = false

  onShow(){
    let history = wx.getStorageSync('search_history');
    if (history){
      history = JSON.parse(history)
    }else{
      history = [];
    }
    this.history = history
  }

  // 搜索
  confirm(){
    console.log('点击回车....', this.value);
    let history = wx.getStorageSync('search_history');
    if (history){
      history = JSON.parse(history)
    }else{
      history = [];
    }
    history.push(this.value)
    this.history = history
    wx.setStorageSync('search_history', JSON.stringify(history));

    this['search'](this.value);
    this.showHistory = false;
  }
  
  change(e){
    this.value = e.target.value;
  }

  // 返回上一页
  goBack(){
    wx.navigateBack();
  }
}
