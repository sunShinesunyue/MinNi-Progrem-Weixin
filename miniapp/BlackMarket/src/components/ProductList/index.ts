import { Vue, Component } from 'vue-property-decorator'

// 必须使用装饰器的方式来指定component
@Component({
  props: ['products']
})
class ProductList extends Vue {
  mounted(){
    console.log('products...')
  }
}

export default ProductList;