<template>
    <div id="app" style="height:100%;">
        <view-box ref="viewBox">
            <vo-header></vo-header>
            <router-view></router-view>
            <vo-footer></vo-footer>
        </view-box>
    </div>
</template>

<script>
import voHeader from '@/components/Header'
import voFooter from '@/components/Footer'
import { ViewBox } from 'vux'
export default {
    name: 'app',
    components: {
        voHeader,
        voFooter,
        ViewBox
    }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~@/style/vuxreset.less';

body {
    background-color: #fbf9fe;
}

html,
body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
}
</style>
