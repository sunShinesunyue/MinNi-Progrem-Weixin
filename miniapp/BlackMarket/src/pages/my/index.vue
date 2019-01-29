<template>
  <div class="my-wrapper">
      <!-- 头部 -->
      <div class="my-header">
          <section>
              我是用户的信息
          </section>
      </div>
      <!-- 下面的部分 -->
      <div class="my-bottom">
          <button open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</button>
          <i-cell-group>
            <i-cell title="地址管理" is-link url=""></i-cell>
            <button>意见反馈</button>
            <button>在线客服</button>
          </i-cell-group>
      </div>
  </div>
</template>

<script lang="ts" src="./index.ts">

</script>

<style>
  page {
    width:100%;
    height:100%;
    padding:0;
    margin:0;
  }
  .my-wrapper {
    width:100%;
    height:100%;
  }
  .my-header {
    width:100%;
    height:422rpx;
    background: linear-gradient( #252525,#494949,#545454);
    color:#fff;
  }
</style>
