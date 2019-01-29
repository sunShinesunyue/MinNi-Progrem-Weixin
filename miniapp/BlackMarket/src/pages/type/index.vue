<template>
    <!-- 类型页面总页面 -->
    <div class="type-wrapper">
        <!-- 头部 -->
        <div class="type-header">
            搜索 头部
        </div>

        <!-- 中间切换内容区域块 -->
        <div class="type-container">

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
      // 4.计算属性
      computed : {
        ...mapState({
          // 5.要渲染的数据 6.从数据仓下面取出数据
          categories:state => state.index.categories
        }),
        // 7.做一些判断

        // 8.方法
        methods: {
          
        }
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