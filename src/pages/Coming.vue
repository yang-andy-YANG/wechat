<template>
    <div>
        <load-more tip="Coming Soon"></load-more>
        <load-more :show-loading="false" tip="Coming Soon" background-color="#fbf9fe"></load-more>
        <load-more :show-loading="false" background-color="#fbf9fe"></load-more>
    </div>
</template>

<script>
import { LoadMore } from 'vux'
export default {
    name:'coming',
    components: {
        LoadMore
    }
}
</script>