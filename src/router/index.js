import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import About from '@/components/about'
import Other from '@/components/HelloWorld'
import NoFind from '@/components/404'

// about-component
import Skill from '@/components/views/skills'
import Voice from '@/components/views/voice'
import Hobby from '@/components/views/hobby'

// 命名视图
import OtherRight from '@/components/views/other_right'

Vue.use(Router);
const router = new Router({
    mode: 'history',
    linkActiveClass: 'link-active', // 全局设置link-active-class
    routes: [{
        path: '', // 虽然跳转到home，但home的active-class没有被激活， 可以把route-link的to改为/  ，但activeC就被包含在其他path了，加上exact
        component: Home,
    }, { // 这个可以不要了
        path: '/home',
        name: 'home',
        alias: '/index',
        component: Home
    }, {
        path: '/about',
        // name: 'about', // 如果有默认的子路由， name就不需要了，否则报警告
        component: About,
        children: [{ // 路径可以不用嵌套，组件嵌套
            path: '/', // skills-path没有"/"就是 about/hobby 否则/xxx  把path删除了就是默认的子路由,进入父路由就会默认显示这个，设置默认路由 / 有没有都无所谓
            name: 'about', //  设置默认子路由，name不能给父路由
            component: Skill,
        }, {
            path: '/voice', // /about/voice,,  /voice== /voice  
            name: 'voice',
            component: Voice,
        }, {
            path: '/hobby',
            name: 'hobby',
            component: Hobby,
        }],
    }, {
        path: '/other',
        name: 'other',
        components: {
            default: Other,
            otherRight: OtherRight
        }
    }, {
        path: '*',
        // alias: '/index',
        // component: NoFind,
        // redirect: '/home', // 直接重定向会刷新
        // redirect: { name: 'home' },
        redirect: (to) => {
            // fullPath, hash, matched, meta, name, param, query, path
            console.log(to)
                // if (to.path == '/aaa') {

            //     return '/home'
            // } else {
            //     return '/other'
            // }
        }
    }],
    scrollBehavior(to, from, savedPosition) { // 点击前进后退或者切换导航的时候触发,  savedPosition是前进后退才会记录有对象的值
        // return 期望滚动到哪个的位置
        // if (savedPosition) {
        //     return savedPosition
        // } else {
        //     return { x: 0, y: 0 }
        // }
        if (to.hash) { // 利用hash做描点处理
            return {
                selector: to.hash
            }
        }
    }
});

export default router