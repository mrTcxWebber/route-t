<template>
  <div class="about-box">
        <div class="menu-box">
            <!-- 用命名路由不用整天修改 -->
            <router-link class="nav-list"  to="/about" exact><a>技能</a></router-link>
            <router-link class="nav-list" tag="div" :to="{name:'voice'}"><a>语言</a></router-link>
            <router-link class="nav-list" tag="div" :to="{name: 'hobby'}"><a>爱好</a></router-link>
        </div>
        <hr>
        <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'about',
    }
</script>

<style>
    .menu-box {
        width: 300px;
        margin: 10px auto;
        height: 30px;
        display: flex;
        box-sizing: border-box;
    }
    
    .nav-list {
        height: 100%;
        flex: 1;
        text-align: center;
        line-height: 30px;
        font-size: 20px;
        color: #333333;
        border-right: 1px solid #ddd;
        background-color: #ffffff;
    }
    
    .nav-list:last-child {
        border-right: none;
    }
    
    .link-active {
        background-color: #0000ff;
    }
    
    .link-active a {
        color: #dc4087;
    }
</style>