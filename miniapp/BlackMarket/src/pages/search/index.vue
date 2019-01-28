<template>
  <div>
    <header>
      <input confirm-type="search" :value="value" type="text" @focus="showHistory=true" @input="change" placeholder="你随便搜 搜得到算我输" @confirm="confirm">
      <span @click="goBack">取消</span>
    </header>
    <section v-if="showHistory">
      <p>历史记录</p>
      <p>
        <span v-for="(item, index) in history" :key="index">{{item}}</span>
      </p>
    </section>
    <section class="list" v-else>
      <div v-for="(item, index) in list" :key="index" class="item">
        <div class="wrap">
          <img :src="item.cover_img" mode="widthFix">
        </div>
        <span class="ship" v-if="!item.shipping_fee">包邮</span>
        <span class="name">{{item.name}}</span>
        <span class="point">{{item.selling_point}}</span>
        <span class="price">{{item.sell_price}}</span>
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>


<style lang="less" scoped>
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  input{
    font-size: 28rpx;
    width: 88%;
    height: 60rpx;
    line-height: 60rpx;
    border-radius: 50rpx;
    padding: 0 30rpx;
    box-sizing: border-box;
    background: #f4f4f4;
  }
  span{
    font-size: 32rpx;
    color: #333;
  }
}
.list{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item{
  margin-top: 20rpx;
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .wrap{
    width: 100%;
    padding: 20rpx 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10rpx;
    background: #f8f8f8;
  }
  img{
    width: 100%;
  }
  .ship{
    font-size: 24rpx;
    padding: 5rpx;
    background: #f7bd7d;
    border-radius: 5rpx;
    color: #fff;
  }
  .name{
    font-size: 30rpx;
  }
  .point{
    font-size: 24rpx;
    color: #999;
  }
  .price{
    font-size: 40rpx;
  }
}
</style>
