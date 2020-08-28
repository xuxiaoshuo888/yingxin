<template>
    <div>
        <go-back :title="title" :toWhere="toWhere"></go-back>
        <el-form ref="form" style="padding: 10px;">
            <el-form-item label="始发站">
                <el-input v-model="start_value" readonly placeholder="请输入" @focus="toArea"></el-input>
            </el-form-item>
            <el-form-item label="终点站">
                <el-input v-model="end_value" disabled></el-input>
            </el-form-item>
        </el-form>
        <div class="info">
            <div style="text-indent: 0;">注意事项：</div>
            <div style="text-indent: 25px;">
                学生证磁条是学生在寒暑假半价购买火车票的通行证。磁条内贴着一张芯片，学生在购买火车票时可以在机器上刷一下以享受购票优惠。
            </div>
        </div>
        <div class="btn-contain">
            <van-button type="info" size="large" class="button-bg" @click="save">提交</van-button>
        </div>
    </div>
</template>

<script>
    /*
    火车优惠卡
     */
    import goBack from '@/components/goBack'

    export default {
        name: "hcyhk",
        data() {
            return {
                toWhere:'/desk',
                title: '火车优惠卡',
                start: [],//始发站
                end: [{
                    codeitemname: '武汉站'
                }],//终点站
                start_value: "",//选定的开始站
                end_value: "武汉站",//选定的结束站
                loading1: false,
                loading2: false
            }
        },
        components: {
            goBack
        },
        methods: {
            getData() {
                this.$ajax.get('/train_card_api/find').then(res => {
                    // console.log(res.data.data)
                    if (res.data.data.hcz) {
                        this.start_value = res.data.data.hcz
                    }
                    if (this.$store.getters.areaStation) {
                        this.start_value = this.$store.getters.areaStation
                    }
                })
            },
            getStations(arg) {
                if (arg.trim() != '') {
                    this.loading1 = true
                    this.$ajax.get('/train_card_api/stations', {
                        params: {name: arg}
                    }).then(res => {
                        this.loading1 = false
                        this.start = res.data.data
                    })
                }
            },
            save() {
                if (this.start_value.trim() != '' && this.end_value.trim() != '') {
                    this.$ajax.get('/train_card_api/save', {
                        params: {start: this.start_value, end: '武汉站'}
                    }).then(res => {
                        this.loading2 = false
                        this.end = res.data.data
                        this.$toast(res.data.data)

                    })
                } else {
                    this.$toast('请填写始发站和终点站!')
                }
            },
            changesfz() {
                //this.$refs.select.style.display = 'inline';
                this.$refs.select.focus();
                // $("#select").css("display","inline").val('');
                // $("#select").get(0).focus();
            },
            toArea() {//跳转到选择城市页面
                this.$router.push('/hcyhk/area')
            }
        },
        beforeCreate(){
            console.log("beforeCreate")
        },
        mounted() {
            //this.$refs.select.focus();
            this.getData()//shuju
        },
        updated() {
            console.log("updated")
        },
        beforeDestroy(){
            console.log('beforeDestroy')
            this.$store.state.areaStation = ''
        }
    }
</script>

<style scoped lang="scss">
    .van-index-bar__sidebar {
        position: fixed;
        right: 0;
        top: 20vw;
    }
</style>