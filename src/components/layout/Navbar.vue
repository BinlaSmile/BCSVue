<template>
    <Header class="layout-header-bar">
        <Icon @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="24"></Icon>
    </Header>
</template>

<style scoped>
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<script>
    export default {
        data () {
        },
        computed: {
            
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>