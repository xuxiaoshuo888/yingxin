<template>
    <div class="blue-top-bg" style="margin-top: -45px;">
        <div class="bg-blue-band" style="min-height: 300px">
            <!--            style="background-color: white;margin: 0 20px;"-->
            <div class="info-band">
                <div class="name-band">
                    <div class="name">张三</div>
                    <div class="notice">欢迎你，请完成填写！</div>
                </div>
                <img class="potrait" src="@/assets/img/Photo.png" alt="">
            </div>
            <div class="notice">
                <p><span style="color: red;">*</span>注意事项</p>
                <p>1.开始报到前请仔细查看页面上的姓名和学号,无误后再点击"开始报到"按钮.</p>
                <p>2.如果以上信息不是自己的信息,请停止操作,并立即联系管理员或通过新生qq群联系辅导员, 管理员联系电话:
                    <span style="color: #06BEBD;">027-6826374</span>
                </p>
            </div>
        </div>
        <div class="fixed-bottom">
            <div class="pad20 read">
                <van-checkbox v-model="radio" checked-color="#06BEBD">我已认真阅读上述信息</van-checkbox>
            </div>
            <div class="btn-contain">
                <van-button plain type="danger" size="large" hairline>
                    上面不是我的信息
                </van-button>
                <van-button type="info" size="large" class="button-bg" @click="toDesk">
                    开始报道
                </van-button>
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
                title: '自助迎新',
                radio: 2
            }
        },
        components: {goBack},
        methods: {
            toDesk() {
                this.$router.push('/desk')
            }
        }
    }
</script>

<style scoped type="text/css">
    .read {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(168, 182, 200, 1);
    }

    body {
        background: url("../../assets/img/Topbar.png") no-repeat scroll;
        background-size: 100% auto;
    }
</style>