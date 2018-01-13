<template>
    <div id="header">
        <Menu mode="horizontal" :theme="theme" active-name="1">
            <Row>
                <Col span="12" style="padding-left:15px;">
                    <div style="border-bottom:0;box-sizing:border-box;background:none;">
                        <img style="height:30px;margin-top:15px;" src="../../assets/logo.png">
                    </div>
                </Col>
                <Col span="12" style="padding-right:15px;border-bottom:0;">
                    <Submenu name="2" style="float:right;border-bottom:0;border-left:1px solid #fff;">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            简介
                        </template>
                            <router-link to="about-web">
                                <Menu-item name="3-1">网站简介</Menu-item>
                            </router-link>
                             <router-link to="about-person">
                                <Menu-item name="3-1">个人简介</Menu-item>
                            </router-link>
                             <router-link to="about-other">
                                <Menu-item name="3-1">其他简介</Menu-item>
                            </router-link>
                    </Submenu>
                    <Submenu name="2" style="float:right;border-bottom:0;border-left:1px solid #fff;">
                        <template slot="title">
                            <router-link to="list">
                                <Icon type="stats-bars"></Icon>
                                目录
                            </router-link>
                        </template>
                        <Menu-group title="常见列表">
                            <router-link to="text">
                                <Menu-item name="3-1">文章</Menu-item>
                            </router-link>
                            <router-link to="pic">
                                <Menu-item name="3-1">图片</Menu-item>
                            </router-link>
                            <router-link to="music">
                                <Menu-item name="3-1">音乐</Menu-item>
                            </router-link>
                            <router-link to="video">
                                <Menu-item name="3-1">视频</Menu-item>
                            </router-link>
                        </Menu-group>
                        <Menu-group title="其他">
                            <router-link to="user-park">
                                <Menu-item name="3-1">用户社区</Menu-item>
                            </router-link>
                            <router-link to="other-list">
                                <Menu-item name="3-1">其他</Menu-item>
                            </router-link>
                        </Menu-group>
                    </Submenu>
                        
                    <Menu-item name="1" style="float:right;border-bottom:0;border-left:1px solid #fff;">
                        <Icon type="ios-people"></Icon>
                        首页                        
                    </Menu-item>
                </Col>
            </Row>
        </Menu>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                title: '这是Header',
                theme: 'light'
            };
        }
    };
</script>
<style scoped>
    #header .ivu-menu-item-active, #header .ivu-menu-item:hover, #header .ivu-menu-submenu-active, #header .ivu-menu-submenu:hover{
        color:#fff;
        background:#47cb89;
        
        box-sizing:border-box;
    }
</style>