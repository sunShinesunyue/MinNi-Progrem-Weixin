import { Vue, Component } from 'vue-property-decorator'

// 1.从vuex里面引入mapState,mapActions
import {mapState,mapActions} from 'vuex'

@Component({
    // 2.计算属性
    computed: {
        // 3.展开
        ...mapState({
            // 4.state['order']这样的写法
            list :state => state['order'].list
        })
    },
    // 5.方法
    methods: {
        ...mapActions({
          getOrderList: 'order/getOrderList'
        })
    }
    
})

// 6.写法
export default class extends Vue {
    onShow() {
        this['getOrderList'](this.$root.$mp.query)
    }
}