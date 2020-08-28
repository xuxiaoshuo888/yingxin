<template>
    <div v-loading="loading"
         element-loading-text="加载中..."
         element-loading-spinner="el-icon-loading"
         style="height: 100vh">
        <van-index-bar sticky>
            <div v-for="(item,index) in area" :key="index">
                <van-index-anchor :index="item.key"></van-index-anchor>
                <van-cell v-for="(i,index) in item.value" :key="index" :title='i' @click='getName(i)'></van-cell>
            </div>
        </van-index-bar>
    </div>
</template>

<script>
    import Area from './Area.json'

    export default {
        name: "area",
        data() {
            return {
                loading: true,
                area: []//车站
            }
        },
        methods: {
            getName(e) {
                console.log(e)
                // this.$router.replace({path: '/hcyhk', query: {areaStation: e}})
                this.$store.state.areaStation = e
                this.$router.go(-1)
            }
        },
        mounted() {
            setTimeout(() => {
                this.area = Area.station
                this.$nextTick(() => {
                    this.loading = false
                })
            }, 100)
        }
    }
</script>

<style scoped>

</style>