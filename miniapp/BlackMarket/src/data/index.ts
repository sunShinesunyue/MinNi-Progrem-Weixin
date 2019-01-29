import {fly} from './api';

// 获取顶部tab分类
export let getCategories = ()=>{
  return fly.request('api/shop/categories')
}

// 获取tab详情
export let getCategoryProduct = id=>{
  return fly.request(`api/shop/sub-category-products/${id}`)
}

// 搜索接口
export let search = q=>{
  return fly.request('api/shop/search-product', {q})
}

// 获取点击每一个商品的详情
export let getProductDetail = id => {
  // 用fly请求数据 记得要return出去
  return fly.request(`api/multi-requests`, {
    "0": {
        "method": "GET",
        "uri": `shop/product/${id}/statistics`,
        "data": {
            "__form_id": null
        }
    },
    "1": {
        "method": "GET",
        "uri": `shop/product/${id}`,
        "data": {}
    },
    "2": {
        "method": "GET",
        "uri": `shop/comments/short/${id}`
    },
    "3": {
        "method": "GET",
        "uri": "shop/user/badges/cart"
    }
}, {
  method: 'POST',
  header: {
    'content-type': 'application/json'
  }
})
}