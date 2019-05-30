<template>
    <div>
        <go-back :title="title"></go-back>
        <div class="pad20">
            <div class="index-list-div" @click="onShow">
                <div class="left-head">交通方式</div>
                <div class="right-content">{{currentChoose.name || '点击选取'}} ></div>
            </div>
            <div class="index-list-div" @click="onShow">
                <div class="left-head">到达时间</div>
                <div class="right-content">{{currentChoose.name || '点击选取'}} ></div>
            </div>
            <div class="index-list-div" @click="onShow">
                <div class="left-head">到达地点</div>
                <div class="right-content">{{currentChoose.name || '点击选取'}} ></div>
            </div>

            <div class="index-list-div">
                <div class="left-head">同行人数</div>
                <div class="right-content">
                    {{value}}
                </div>

            </div>
            <div style="padding: 30px 0;">
                <van-slider
                        v-model="value"
                        active-color="#06BEBD"
                        bar-height="4px"
                        :max="max"
                        :min='min'
                        inactive-color="#A8B6C8"
                >
                    <div
                            slot="button"
                            class="slider-button"
                    >
                        {{ value }}
                    </div>
                </van-slider>
            </div>
            <div v-if="currentChoose.name == '生源地贷款'" class="index-list-div" @click="onShow_bank">
                <div>贷款银行</div>
                <div>{{currentChoose_bank.name || '点击选取'}} ></div>
            </div>
            <van-cell-group>
                <van-field
                        v-model="code"
                        center
                        clearable
                        label-align="left"
                        input-align="right"
                        label="回执验证码"
                        placeholder="请输入验证码"
                >
                </van-field>
            </van-cell-group>
            <div class="index-list-div">
                <div>金额</div>
                <div>￥23321 ></div>
            </div>
            <!--缓交方式-->
            <van-actionsheet
                    v-model="show"
                    :actions="chooseList"
                    cancel-text="取消"
                    @select="onSelect"
            />
            <!--贷款银行-->
            <van-actionsheet
                    v-model="show_bank"
                    :actions="banList"
                    cancel-text="取消"
                    @select="onSelectBank"
            />
            <!---->
            <van-cell-group>
                <van-field
                        v-model="reason"
                        label="原因"
                        type="textarea"
                        placeholder="请输入原因"
                        rows="1"
                        :autosize='heightRange'
                />
            </van-cell-group>
        </div>
        <div class="info">
            <div>温馨提示</div>
            <div>1.缴纳学杂费前先开通建设银行网银。</div>
            <div>2.请按照页面显示的步骤先后完成报到。</div>
        </div>
        <div class="btn-contain">
            <van-button type="info" size="large" class="button-bg">
                提交
            </van-button>
        </div>
    </div>
</template>

<script>
    /**
     * @author Xus
     * @date 2019/5/6
     * @Description: 抵校登记
     */
    import goBack from '@/components/goBack'
    import {Actionsheet, Slider} from 'vant'

    export default {
        name: "regist",
        data() {
            return {
                arrive_info:"",//
                ways:[],//交通方式列表
                arriveTime:"",//到达时间
                stations:[],//到达地点列表
                value: 33,
                max:100,
                min:0,
                title: '抵校登记',
                chooseList: [//缓交方式
                    {name: '国家助学贷款'},
                    {name: '生源地贷款'},
                    {name: '其他'}
                ],
                banList: [
                    {name: '招商银行', id: ''},
                    {name: '建设银行', id: ''},
                    {name: '中国银行', id: ''}
                ],
                show: false,//控制缓交方式actionsheet展示与否
                show_bank: false,//控制银行列表展示与否
                currentChoose: {},//当前选中的缓交方式
                currentChoose_bank: {},//当前选中的银行
                code: '',//验证码
                reason: "",//原因
                heightRange: {maxHeight: 500, minHeight: 150}
            }
        },
        components: {
            goBack,
            [Actionsheet.name]: Actionsheet,
            [Slider.name]: Slider
        },
        methods: {
            onShow() {
                this.show = true
            },
            onShow_bank() {
                this.show_bank = true
            },
            onSelect(e) {
                this.currentChoose.name = e.name
                this.show = false
            },
            onSelectBank(e) {
                this.currentChoose_bank.name = e.name
                this.show_bank = false
            },
            getInfo(){//获取学生信息
                this.$ajax.get('/arrive_api/arrive_info').then(res => {
                    this.arrive_info = res.data.data
                })
            },
            getWay(){//获取交通方式
                this.$ajax.get('/arrive_api/transports').then(res => {
                    this.ways = res.data.data
                })
            },
            getStation(){//车站信息
                this.$ajax.get('/arrive_api/stations').then(res => {
                    this.stations = res.data.data
                })
            }
        },
        mounted() {
            this.getInfo()
            this.getWay()
            this.getStation()
        },
        ActionSheet() {

        }
    }
</script>

<style scoped>
    /*
      覆盖vant原生样式
       */
    .van-cell {
        padding: 24px 16px !important;
        font-size: 16px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    }

    input {
        text-align: right !important;
    }


</style>