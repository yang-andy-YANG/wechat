<template>
    <section class="home">
        <card>
            <img slot="header" class="banner" src="@/assets/home/banner.png" style="width:100%;display:block;">
            <group slot="content" gutter=0 class="introduce">
                <cell>
                    <span slot="title" class="text-primary-1">河北利安驾校</span>
                    <span class="start">{{raterDataDisplay}}</span>
                    <rater v-model="raterData" disabled></rater>
                </cell>
                <cell value-align="left" class="weui-cell-no-border">
                    <p class="main">简介：创建于1989年，是消费者信得过的驾校。近年来 更是研发出了机器人教练的......
                    </p>
                </cell>
                <cell class="weui-cell-no-border">
                    <img slot="icon" width="16" style="display:block;margin-right:8px;" src="@/assets/home/location.png">
                    <span slot="title" class="address">河北省石家庄市井陉县微矿路38号</span>
                </cell>
            </group>
        </card>
        <group gutter=20>
            <cell>
                <span slot="title" class="text-primary-1" >套餐展示</span>
                <span  style="font-size: 14px;color: #8D8D8D;">更多</span>
            </cell>
        </group>        
        <group gutter=0>
            <cell>
                <group slot="title" gutter=0 class="group-block" @click.native="gotoDetial">
                    <cell>
                        <span slot="title" class="text-primary-main" >A1普通班（A1）</span>
                        <span style="background: #F68930;border-radius: 6px; padding: 2px 10px;color:#fff">¥ 6800</span>
                    </cell>            
                    <cell value-align="left" class="weui-cell-no-border">
                        <p class="text-primary-2">不包含补考费及模拟费。</p>
                    </cell>
                </group>
            </cell>
            <cell class="weui-cell-no-border">
                <group slot="title" gutter=0 class="group-block" @click.native="gotoDetial">
                    <cell>
                        <span slot="title" class="text-primary-main" >A1普通班（A1）</span>
                        <span style="background: #F68930;border-radius: 6px; padding: 2px 10px;color:#fff">¥ 6800</span>
                    </cell>            
                    <cell value-align="left" class="weui-cell-no-border">
                        <p class="text-primary-2">不包含补考费及模拟费。</p>
                    </cell>
                </group>
            </cell>
        </group>

    </section>
</template>

<script>
import { Card, Group, Cell, CellFormPreview, Rater } from 'vux'
import { getJsSdk } from '@/service/getData'
const list = () => ['精选', '美食', '电影', '酒店', '外卖']

export default {
    components: {
        Card,
        Group,
        Cell,
        CellFormPreview,
        Rater
    },
    data() {
        return {
            raterData: 5
        }
    },
    mounted(){
        this.initWX()
    },
    computed:{
        raterDataDisplay(){
            return '5.0'
        }
    },
    methods: {
        gotoDetial(){
            this.$router.push({name: 'Detail'})
        },
        async initWX(){
                var wxConfig = await getJsSdk({
                    url: window.location.href.split('#')[0]
                })
                var wx = this.$wechat;
                console.log(1)
                console.log(wxConfig)
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: wxConfig.appId, // 必填，公众号的唯一标识
                    timestamp: wxConfig.timestamp, // 必填，生成签名的时间戳
                    nonceStr: wxConfig.nonceStr, // 必填，生成签名的随机串
                    signature: wxConfig.signature, // 必填，签名，见附录1
                    jsApiList: wxConfig.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                })
                wx.ready(function () {
                    wx.checkJsApi({
                        jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                        success: function(res) {
                        console.log(res)
                        }
                    });
                    wx.onMenuShareTimeline({
                        title: '易佳驾让您无忧学车，快速拿证！',
                        desc: '点击进入有好礼相送！',
                        link: window.location.href,
                        imgUrl: 'http://yy.machsys.cn/static/road.jpg'
                    });                    
                    wx.onMenuShareAppMessage({
                        title: '易佳驾让您无忧学车，快速拿证！',
                        desc: '点击进入有好礼相送！',
                        link: window.location.href,
                        imgUrl: 'http://yy.machsys.cn/static/road.jpg'
                    });
                })
                    
                wx.error(function (res) {
                    console.log(res)
                    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                })
            },
    }
}
</script>

<style lang="less">
@import '~@/style/cell.less';
@import '~@/style/text.less';
.home {
    .banner {
        width: 100%;
    }
    .introduce {
        .start {
            font-size: 18px;
            color: #FF2774;
            font-weight: 700;
        }
        .main {
            font-size: 14px;
            color: #8E8E8E;
        }
        .address {            
            font-size: 13px;
            color: #4A4A4A;
        }
    }
}
</style>
