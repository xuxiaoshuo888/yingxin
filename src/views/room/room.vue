<template>
    <div>
        <go-back :title="title"></go-back>
        <div class="pad20">
            <div class="band">
                <div class="title1">当前选择</div>
                <div class="title2">
                    <img src="@/assets/img/2.png" alt="">&nbsp;&nbsp;&nbsp;瑶湖校区-学6栋-南楼-(瑶)6南415室-02床
                </div>
            </div>
        </div>
        <div class="btn-contain">
            <van-button type="info" size="large" class="button-bg" @click="toRoomList">
                重新选择
            </van-button>
        </div>
    </div>
</template>

<script>
    /**
     * @author Xus
     * @date 2019/5/6
     * @Description: 选宿舍
     */
    import goBack from '@/components/goBack'

    export default {
        name: "room",
        components: {goBack},
        data() {
            return {
                title: '选择宿舍'
            }
        },
        methods:{
            toRoomList(){
                this.$router.push('roomList')
            }
        }
    }
</script>

<style scoped type="text/css">
    .band {
        box-shadow: 0px 0px 40px 0px rgba(62, 107, 103, 0.16);
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        padding: 20px;
        min-height: 300px;
        background-color: rgba(255, 255, 255, 1);
        background: url("../../assets/img/bg.png") no-repeat scroll bottom;
        background-size: 100% auto;
    }
</style>