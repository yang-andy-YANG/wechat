<template>
    <section class="confirm">
        <group gutter=0>
            <cell :border-intent="false">
                <p slot="title" style="margin-top: 10px; font-size: 18px;" class="text-primary-1">报名信息核实</p>
            </cell>
            <cell-form-preview :list="list" :border-intent="false"></cell-form-preview>
        </group>
        <group gutter=20>
            
            <selector ref="defaultValueRef" :border-intent="false" title="付款方式" :options="payment" v-model="defaultValue"></selector>
            <cell :border-intent="false" value="查看优惠卷" is-link>
                <p slot="title" class="text-primary-1">优惠卷ID</p>
            </cell>
            <cell :border-intent="false">
                <p slot="title" class="text-primary-1">实付款</p>
                <span style="color: #F58123;">¥ 4000.00</span>
            </cell>
        </group>
        <label for="weuiAgree" class="weui-agree">
            <input id="weuiAgree" type="checkbox"  v-model="agree" class="weui-agree__checkbox">
            <span class="weui-agree__text">
                阅读并同意<a href="javascript:void(0);">《XX驾校机动车驾驶员培训合同》相关条款</a>
            </span>
        </label>
          
        <box gap="35px 15px">   
            <x-button :type="agree?'primary':''" :disabled="!agree" @click.native="">付款</x-button>
        </box>

    </section>
</template>

<script>
import { Box, Card, Group, Cell, CellFormPreview, Rater, XButton, Selector } from 'vux'
const list = () => ['精选', '美食', '电影', '酒店', '外卖']

export default {
    components: {
        Box,
        Card,
        Group,
        Cell,
        CellFormPreview,
        Rater,
        XButton,
        Selector
    },
    data() {
        return {
            raterData: 5,
            agree: false,
            list: [{
                label: '利安驾校',
                value: '（石家庄）'
            }, {
                label: '套餐',
                value: '不二班'
            }, {
                label: '证型',
                value: 'C1'
            }, {
                label: '车型',
                value: '桑塔纳'
            }, {
                label: '教练星级',
                value: '一级教练'
            }],
            payment:[{key: 'zfb', value: '支付宝'}, {key: 'wx', value: '微信'}],
            defaultValue: 'wx'
        }
    },
    methods: {
    }
}
</script>

<style lang="less">
@import '~@/style/text.less';
@import '~@/style/button.less';
.confirm {
    .weui-form-preview__label {
        font-size: 16px;
        color: #8E8E8E;
    }
    .weui-form-preview__value {
        font-size: 16px;
        color: #4A4B4B;
    }
    .vux-selector.weui-cell_select-after {
        justify-content: space-between;
        .weui-cell__bd {
            flex: none;
            select {
                color: #888888;
            }
        }
    }
    .weui-agree {
        display: inline-block;
        margin: 15px 0 0 15px; 
        font-size: 12px;
    }
}
</style>
