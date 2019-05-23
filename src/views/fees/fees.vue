<template>
    <div>
        <go-back :title="title"></go-back>
        <div class="pad20">
            <div class="title1">
                收费信息
            </div>
            <div class="fee-content">
                <div class="fee-contain border-bottom">
                    <div class="fee-item" v-for="i in 4">
                        <div class="fee-title">学杂费</div>
                        <div class="fee-body">￥10086.00</div>
                    </div>
                </div>
                <div class="fee-contain">
                    <div class="fee-item" v-for="i in 3">
                        <div class="fee-title">学杂费</div>
                        <div class="fee-body">￥10086.00</div>
                    </div>
                </div>
                <div class="fee-contain border-top">
                    <div class="fee-item" v-for="i in 2">
                        <div class="fee-title">学杂费</div>
                        <div class="fee-body">￥10086.00</div>
                    </div>
                    <div class="fee-item fee-total">
                        <div class="fee-title" style="font-size: 16px">学杂费</div>
                        <div class="fee-body color-theme" style="font-size: 24px">￥10086.00</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pad20">
            <div class="title2">请选择支付方式</div>
            <van-radio-group v-model="payWay">
                <van-radio name="CCB" checked-color="#06BEBD" class="radio-item">中国建设银行</van-radio>
                <van-radio name="BOC" checked-color="#06BEBD" class="radio-item">中国银行</van-radio>
                <van-radio name="ALIPAY" checked-color="#06BEBD" class="radio-item">支付宝</van-radio>
                <van-radio name="WEPAY" checked-color="#06BEBD" class="radio-item">微信支付</van-radio>
            </van-radio-group>
        </div>
        <div class="info">
            <div>温馨提示</div>
            <div>1.缴纳学杂费前先开通建设银行网银。</div>
            <div>2.请按照页面显示的步骤先后完成报到。</div>
        </div>
        <div class="btn-contain">
            <van-button type="info" size="large" class="button-bg">
                确认
            </van-button>
        </div>
    </div>
</template>

<script>
    /**
     * @author Xus
     * @date 2019/5/6
     * @Description: 缴纳学杂费
     */
    import goBack from '@/components/goBack'

    export default {
        name: "fees",
        data() {
            return {
                title: '缴纳学杂费',
                payWay: 'ALIPAY'
            }
        },
        components: {goBack}
    }
</script>

<style scoped>
.fee-content{
    background: url("../../assets/img/wave.png") no-repeat scroll bottom;
    background-size: 100% auto;

}
</style>