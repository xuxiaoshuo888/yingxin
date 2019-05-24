<template>
    <div class="blue-top-bg">
        <go-back :title="title" :bg="bg"></go-back>
        <div class="bg-blue-band">
            <div class="info-band">
                <div class="name-band">
                    <div class="name">张三</div>
                    <div class="notice">欢迎你，请完成填写！</div>
                </div>
                <img class="potrait" src="@/assets/img/Photo.png" alt="">
            </div>
            <div class="index-list-div" @click="toDetail(item.path)" v-for="(item,index) in list" :key="index">
                <div>{{item.name}}
                    <!--<van-icon class="state-icon" :name="item.flag ? 'checked' : 'info'"></van-icon>-->
                    <img class="state-icon" v-if="item.flag === true" src="@/assets/img/right.png" alt="">
                    <img class="state-icon" v-else src="@/assets/img/right.png" alt="">
                </div>
                <img src="@/assets/img/1.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    /**
     * @author Xus
     * @date 2019/5/6
     * @Description: 首页
     */
    import goBack from '@/components/goBack'

    export default {
        name: "desk",
        data() {
            return {
                bg:'blue',
                title: '自助迎新',
                list: [
                    {name: '缴纳学杂费', icon: '@/assets/img/1.png', flag: true, path: '/fees'},
                    {name: '选宿舍', icon: '@/assets/img/2.png', flag: false, path: '/room'},
                    {name: '绿色通道', icon: '@/assets/img/3.png', flag: false, path: '/greenPath'},
                    {name: '一卡通充值', icon: '@/assets/img/4.png', flag: true, path: '/card'},
                    // {name: '购买生活用品', icon: '@/assets/img/5.png', flag: true},
                    {name: '军训服装', icon: '@/assets/img/6.png', flag: true, path: '/clothes'},
                    // {name: '个人信息', icon: '@/assets/img/7.png', flag: true},
                    // {name: '户口迁移', icon: '@/assets/img/8.png', flag: true},
                    {name: '抵校登记', icon: '@/assets/img/9.png', flag: true, path: '/regist'}
                ]
            }
        },
        components: {goBack},
        methods: {
            getStdInfo() {//获取学生信息
                this.$ajax.post('/student/find').then(res => {

                })
            },
            toDetail(path) {
                if (path) {
                    this.$router.push(path)
                } else {
                    this.$toast('尽情期待！')
                }
            }
        },
        mounted() {
            // this.getStdInfo()
        }
    }
</script>

<style scoped lang="scss">
    /*.blue-top-bg {*/
    /*    background: url("../../assets/img/Topbar.png") no-repeat fixed;*/
    /*    background-size: 100% auto;*/
    /*}*/

</style>