<template>
    <div id="header">
            <Row>
                <Col span="12" style="padding-left:15px;">
                    <div style="border-bottom:0;background:none;box-sizing:border-box;line-height:0;">
                        <router-link to="/">
                                <img style="height:50px;padding-top:10px;" src="../../assets/logo.png" />
                        </router-link>
                    </div>
                </Col>
                <Col span="12" style="padding-right:15px;border-bottom:0;">
                    <Menu mode="horizontal" :theme="theme" :active-name="activeName" >
                        <Submenu name="3" style="float:right;border-bottom:0;border-left:1px solid #fff;">
                            <template slot="title">
                                <Icon type="stats-bars"></Icon>
                                其他
                            </template>
                            <router-link v-for="(item, index) in menu.other" :key="index" :to="{name: item.routerName}">
                                <Menu-item :name="item.menuItemName">{{item.name}}</Menu-item>
                            </router-link>
                        </Submenu>
                        <Submenu name="2" style="float:right;border-bottom:0;border-left:1px solid #fff;">
                            <template slot="title">
                                    <Icon type="stats-bars"></Icon>
                                    目录
                            </template>
                            <Menu-group title="常见列表">
                                <router-link v-for="(item, index) in menu.catalogue" :key="index" :to="{name: item.routerName}">
                                    <Menu-item :name="item.menuItemName">{{item.name}}</Menu-item>
                                </router-link>
                            </Menu-group>
                            <Menu-group title="其他">
                                <router-link v-for="(item, index) in menu.otherList" :key="index" :to="{name: item.routerName}">
                                    <Menu-item :name="item.menuItemName">{{item.name}}</Menu-item>
                                </router-link>
                            </Menu-group>
                        </Submenu>
                        <router-link :to="{name: 'home'}">
                            <Menu-item name="1" style="float:right;border-bottom:0;border-left:1px solid #fff;">
                                <Icon type="ios-people"></Icon>
                                首页
                            </Menu-item>
                        </router-link>
                    </Menu>
                </Col>
            </Row>
    </div>
</template>
<script>
    import VueRouter from '@/router/index.js';
    import menu from '@/libs/menu.js';
    export default {
        data(){
            return {
                 title:'这是Header',
                 theme:'light',
                 activeName: '1',
                 menu: menu,
            }
        },
        created(){
            this.changeTab();
        },
        watch: {
            $route (to, form) {
                this.changeTab();
            },
        },
        methods:{
            changeTab(){
                let routeName = this.$route.name;
                if (this.menu.config[routeName]){
                    this.activeName = this.menu.config[routeName];
                }
            }
        }
    }
</script>
<style scoped>
    #header .ivu-menu-item-active, #header .ivu-menu-item:hover, #header .ivu-menu-submenu-active, #header .ivu-menu-submenu:hover{
        color:#fff;
        background:#47cb89;

        box-sizing:border-box;
    }
    #header{
        background:#fff;
        border-bottom: 1px solid #e1e1e1;
        box-sizing: border-box;
        height: 61px;
    }
    .ivu-menu-horizontal.ivu-menu-light:after{
        background: none;
    }
</style>
