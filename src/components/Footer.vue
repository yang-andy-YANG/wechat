<template>
    <div>
        <tabbar>
            <tabbar-item selected>
                <img slot="icon" src="@/assets/footer/home.png">
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item>
                <img slot="icon" src="@/assets/footer/class.png">
                <span slot="label">约课</span>
            </tabbar-item>
            <tabbar-item>
                <img slot="icon" src="@/assets/footer/service.png">
                <span slot="label">服务</span>
            </tabbar-item>
            <tabbar-item>
                <img slot="icon" src="@/assets/footer/me.png">
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
    name: 'voFooter',
    components: {
        Tabbar,
        TabbarItem,
        Group,
        Cell
    }
}
</script>

<style lang="less">
</style>

