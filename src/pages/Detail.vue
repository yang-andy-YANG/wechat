<template>
    <section class="detail">
        <group gutter=0>
            <cell is-link>
                <p slot="title" style="margin-top: 10px">
                    <span class="text-primary-main">A1普通班（A1）</span>
                    <span style="background: #F68930;border-radius: 6px; padding: 2px 10px;color:#fff">¥ 6800</span>
                </p>
                <p slot="inline-desc" class="text-primary-2" style="margin-top:10px;">不包含补考费及模拟费。</p>
            </cell>        
        </group>
        <group gutter=20>
            <cell>
                <span slot="title" class="text-primary-2" >费用明细</span>
            </cell>            
            <cell value-align="left"  :border-intent="false">
                <p class="text-primary-content">报名费、照相费、服务费、科目一考试费、科目二考试费、科目三考试费、工本费、培训费、补考费</p>
            </cell>
        </group>
        <group gutter=20>
            <cell>
                <span slot="title" class="text-primary-2" >培训服务</span>
            </cell>                  
            <cell value-align="left"  :border-intent="false">
                <p class="text-primary-content">自主约课、考试不合格需要补交考费及模拟费</p>
            </cell>
        </group>
        <group gutter=20>
            <cell>
                <span slot="title" class="text-primary-2" >报名须知</span>
            </cell>           
            <cell value-align="left"  :border-intent="false">
                <p class="text-primary-content">身体条件符合体检医院要求（包括视力、身高、听力、上肢、下肢等），年龄18周岁</p>
            </cell>
        </group>       
        <box gap="35px 15px">   
            <x-button type="primary" @click.native="gotoConfirm">报名</x-button>
        </box>


    </section>
</template>

<script>
import { Box, Card, Group, Cell, CellFormPreview, Rater, XButton } from 'vux'
const list = () => ['精选', '美食', '电影', '酒店', '外卖']

export default {
    components: {
        Box,
        Card,
        Group,
        Cell,
        CellFormPreview,
        Rater,
        XButton
    },
    data() {
        return {
            raterData: 5
        }
    },
    methods: {
        gotoConfirm(){
            this.$router.push({name: 'Confirm'})
        }
    }
}
</script>

<style lang="less">
@import '~@/style/text.less';
@import '~@/style/button.less';
.detail {
}
</style>
