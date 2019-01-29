import { Vue, Component } from 'vue-property-decorator'
// 1.获取产品列表组件
import Product from '@/components/ProductList/index.vue'

// 2.从vuex里面引入辅助属性
import {mapState,mapActions} from 'vuex';

// 3.必须使用装饰器的方法来指定component
@Component({
    // 4.调用组件
    components: {
        Product
    },
    // 5.计算属性
    computed: mapState({
        // 6.从数据仓下面取出数据
        categories: state => state['index'].categories,
        // 7.从数据仓下面取出产品的数据
        products: state => state['index'].products
    }),
    // 8.方法
    methods:mapActions({
        // 9.详情页下面的
        getProductDetail: 'detail/getProductDetail'
    })
})

// 10.抛出
export default class extends Vue {
    // 11.生命周期里面
    onShow() {
        this['getProductDetail'](this.$root.$mp.query.id);
    }
}