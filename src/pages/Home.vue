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
    computed:{
        raterDataDisplay(){
            return '5.0'
        }
    },
    methods: {
        gotoDetial(){
            this.$router.push({name: 'Detail'})
        }
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
