<template>
  <div class="my-wrapper">
      <!-- 头部 -->
      <div class="my-header">
          <header class="header">
              <img :src="userInfo.avatarUrl" mode="widthFix">
              <span>{{userInfo.nickName}}</span>
          </header>
      </div>
      <!-- 下面的部分 -->
      <section>
          <p @click="goOrder('all')" class="order">
            <span>我的订单</span>
            <span>查看全部</span>
          </p>
          <div class="type">
                  <li @click="goOrder('unpaid')">
                    <i-icon type="commodity" size="30" />
                    <span>待付款</span>
                  </li>
                  <li @click="goOrder('unshipped')">
                    <i-icon type="commodity" size="30" />
                    <span>待发货</span>
                  </li>
                  <li @click="goOrder('unreceived')">
                    <i-icon type="commodity" size="30" />
                    <span>待收货</span>
                  </li>
                  <li @click="goOrder('unevaluated')">
                    <i-icon type="commodity" size="30" />
                    <span>评价</span>
                  </li>
                  <li @click="goOrder('evaluated')">
                    <i-icon type="commodity" size="30" />
                    <span>退款售后</span>
                  </li>
          </div>
      </section>
      <i-modal :visible="showModal" show-ok=false show-cancel=false>
          <view>为了更好的提供服务,我们需要获取您的用户信息</view>
          <button open-type="getUserInfo" @getuserinfo="getUserInfo" @click="showModal=false">确定</button>
          <button open-type="openSetting" @click="showModal=false">取消</button>
      </i-modal>
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
    text-align: left;
    line-height:422rpx;
  }
  /*头部样式*/
  .header>img {
      width:110rpx;
      height:110rpx;
      border-radius:50%;
      vertical-align: middle;
  }
  .header>span {
    margin-left:58rpx;
  }
  .order {
    display:flex;
    justify-content: space-between;
    height:176rpx;
    line-height: 179rpx;
    border:1rpx solid #EAEAEA;
  }
  /*icon图标*/
  .type{
    display:flex;
    justify-content: space-around;
    text-align: center;
  }
  .type li {
    display:flex;
    flex-direction: column;
    color:#989898;
  }
</style>
