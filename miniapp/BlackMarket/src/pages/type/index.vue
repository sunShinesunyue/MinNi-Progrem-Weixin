<template>
    <!-- 类型页面总页面 -->
    <div class="type-wrapper">
        <!-- 头部 -->
        <div class="type-header">
            搜索 头部
        </div>

        <!-- 中间切换内容区域块 -->
        <div class="type-container">
            <section class="list">
              <ul @click="tabClick">
                <!-- 进行数据渲染 -->
                  <li v-for="(item, index) in categories" :key="index" :class="index==current?'active':''" :data-index="index">{{item.name}}</li>
              </ul>
              <div class="content" v-if="currentList">
                  <a :href="currentList.cover_url">
                    <img :src="currentList.cover_img" mode="widthFix">
                  </a>
                  <div class="children">
                    <div v-for="(item,index) in currentList.children" :key="index">
                      <img :src="item.image.url" mode="widthFix">
                      <span>{{item.name}}</span>
                    </div>
                  </div>
              </div>
            </section>
        </div>
    </div>
</template>

<script>
    // 1.从vuex里面引入
    import {mapState,mapActions} from 'vuex';
    // 2.抛出
    export default {
      // 3.数据
      data() {
        return {
          current:0 // 4.切换的下标
        }
      },
      // // 4.计算属性
      computed : {
        ...mapState({
          // 5.要渲染的数据 6.从数据仓下面取出数据
          categories: state=>state.index.categories
        }),
        // 7.做一些判断
        currentList() {
            // 10.判断数据的长度
            if(this.categories.length) {
                // 11.获取当前切换下面所对应的内容
                let current = this.categories[this.current]
                // 12.替换所切换跳转的路径
                current.cover_url = current.cover_url.replace('/commodity/details', '/detail/main')
                // 13.将替换好的路径返出
                return current
            } else {
              // 14.就返回一个undefined
              return undefined
            }
        }
      
      },
        // 8.方法
        methods: {
          ...mapActions({
              // 9.将要渲染的数据请求出来
              getCategories: 'index/getCategories'
          }),
          // 15.点击获取
          tabClick(e) {
            // 16.当点击的这一项是undefined && 不和当前点击的这一项相对应
            if(e.target.dataset.index != undefined && e.target.dataset.index != this.current) {
                // 17.就让current 和当前点击的这一项对应上
                this.current = e.target.dataset.index;
            }
          }
          
        },
          // 9.调用这个获取数据的方法
          onShow() {
            this.getCategories();
          }
    }

</script>

<style>
    page {
      width:100%;
      height:100%;
      margin:0;
      padding:0;
    }
    .type-wrapper {
      width:100%;
      height:100%;
      display:flex;
      flex-direction: column;
    }
    /* 头部 */
    .type-header {
      width:100%;
      height:130rpx;
      border:1rpx solid #E5E3E4;
    }
    .type-container{
      flex:1;
      width:100%;
    }
</style>