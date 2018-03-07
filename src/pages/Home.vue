<template>
    <section class="home">
        <img class="banner" src="@/assets/home/banner.png">
    </section>
</template>

<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
const list = () => ['精选', '美食', '电影', '酒店', '外卖']

export default {
    components: {
        Tab,
        TabItem,
        Sticky,
        Divider,
        XButton,
        Swiper,
        SwiperItem
    },
    data() {
        return {
            index01: 0,
            list2: ['报名', '科目一', '科目二', '科目三', '领证'],
            demo2: '美食',
            list3: ['收到的消息', '发出的消息'],
            demo3: '收到的消息',
            list4: ['正在放映', '即将上映'],
            demo4: '即将上映',
            demoDisabled: 'A',
            index: 0,
            getBarWidth: function(index) {
                return (index + 1) * 22 + 'px'
            }
        }
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
.home{
    .banner {
        width: 100%;
    }
}
</style>
