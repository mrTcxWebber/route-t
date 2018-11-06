<template>
  <div id="app">
      <div class="menu-box">
        <!-- 1.hash模式 <div class="nav-list"><a class="on" href="#/home">home</a></div>
        <div class="nav-list"><a href="#/about">about</a></div>
        <div class="nav-list"><a href="#/other">iniMsg</a></div> -->
        <!-- 2.这里有a标签会刷新 <div class="nav-list"><a class="on" href="/home">home</a></div>
        <div class="nav-list"><a href="/about">about</a></div>
        <div class="nav-list"><a href="/other">iniMsg</a></div> -->
        <!-- 3. -->
        <!-- <router-link :to="item.links" class="nav-list" v-for="item,index in navList" :key="index">{{item.name}}</router-link> -->
        <div class="nav-list"><router-link to="/" tag="li" exact>home</router-link></div>
        <div class="nav-list"><router-link :to="{path:'/about'}" tag="p">about</router-link></div>
        <!-- 局部设置active-class -->
        <router-link to="/other" class="nav-list"  active-class="active"><i></i><span>other</span></router-link>
      </div>
      <div class="wrap">
          <router-view class="center"></router-view>
          <!-- 同一个page内显示多个component -->
          <router-view name="otherRight"></router-view> 
      </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                navList: [{
                    links: '/home',
                    name: 'home'
                }, {
                    links: '/about',
                    name: 'about'
                }, {
                    links: '/other',
                    name: 'other'
                }],
            }
        },
        name: 'app',
        components: {}
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    
    .wrap {
        width: 600px;
        margin: 10px auto 0;
    }
    
    .link-active {
        background-color: #0000ff;
    }
    
    .router-link-active {
        background-color: #dddddd;
    }
    
    .nav-list.active {
        background-color: #dddddd;
    }
    
    .center {
        text-align: center;
        font-size: 22px;
        font-weight: 500;
    }
    
    .menu-box {
        width: 300px;
        margin: 10px auto;
        height: 50px;
        display: flex;
        box-sizing: border-box;
    }
    
    .nav-list {
        height: 100%;
        flex: 1;
        text-align: center;
        line-height: 50px;
        border-right: 1px solid #ddd;
        background-color: #ffffff;
        font-size: 20px;
        color: #333333;
    }
    
    .nav-list a {
        font-size: 20px;
        color: #333333;
    }
    
    .nav-list:last-child {
        border-right: none;
    }
    
    .nav-list a.on {
        color: #f00;
    }
</style>