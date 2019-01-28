<template>
  <div class="counter-warp">
    <p class="search" @click="goSearch">
      <i-icon type="search" i-class="icon" size="20"></i-icon>
      你随便搜，搜得到算我输
    </p>
    <i-tabs :current="current" scroll @change="handleChange" color="#000">
        <i-tab title="热门推荐" :key="-1"></i-tab>
        <i-tab v-for="(item, index) in categories" :key="index" :title="item.name"></i-tab>
    </i-tabs>
    <div v-if="currentTab && currentTab.cover_img">
      <img :src="currentTab.cover_img" @click="coverClick" mode="widthFix" class="cover-img">
      <div class="children">
         <div v-for="(item, index) in currentTab.children" :key="index">
          <img :src="item.image.url" mode="widthFix">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>

    <p class="hr"></p>

    <prodcut :products="products"></prodcut>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>

<style lang="less" scoped>
.search{
  font-size: 26rpx;
  color: #999;
  width: 100%;
  height: 50rpx;
  line-height: 50rpx;
  border-radius: 50rpx;
  padding: 0 30rpx;
  box-sizing: border-box;
  background: #f4f4f4;
}
.icon view{
  margin-top: -10rpx;
}
.cover-img{
  width: 100%;
  margin-top: 15rpx;
}
.children{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  div{
    width: 20%;
    text-align: center;
    margin-top: 10rpx;
    img{
      width: 100%;
    }
    span{
      font-size: 28rpx;
    }
  }
}
.hr{
  background: #999;
  width: 120%;
  height: 1rpx;
  margin: 55rpx 0 15rpx -10%;
}
</style>
