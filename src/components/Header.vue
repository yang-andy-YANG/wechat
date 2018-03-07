<template>
    <header class="header">
        <sticky scroll-box="vux_view_box_body" :check-sticky-support="false">
            <tab :line-width='2' active-color='#27A3F4'>
                <tab-item class="vux-center" :selected="selected === item" v-for="(item, index) in list" @on-item-click="onMenuChange(item)" :key="index">{{item}}</tab-item>
            </tab>
        </sticky>
    </header>
</template>

<script>
import { Tab, TabItem, Sticky } from 'vux'
export default {
    name: 'voHeader',
    data() {
        return {
            index: 0,
            list: ['报名', '科目一', '科目二', '科目三', '领证'],
            selected: '报名'
        }
    },
    components: {
        Tab,
        TabItem,
        Sticky
    },
    mounted() {
    },
    methods: {
        onMenuChange(item){
            console.log(item)
            this.selected = item
            if(item === '报名'){
                this.$router.push({name: 'Home'})
            }else{
                this.$router.push({name: 'Coming'})
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {}
</style>
