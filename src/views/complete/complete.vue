<template>
    <div style="padding: 10px;">
        <go-back :title="title"></go-back>
        <el-card style="margin-bottom: 10px;">
            <el-form ref="form" :model="Info" label-width="100px" size="small">
                <el-form-item label="姓名：">
                    <div class="item-content">{{Info.xm || '暂无数据'}}</div>
                </el-form-item>
                <el-form-item label="性别：">
                    <div class="item-content">{{Info.xb || '暂无数据'}}</div>
                </el-form-item>
                <el-form-item label="学号：">
                    <div class="item-content">{{Info.xh || '暂无数据'}}</div>
                </el-form-item>
                <el-form-item label="专业：">
                    <div class="item-content">{{Info.majorname || '暂无数据'}}</div>
                </el-form-item>
                <el-form-item label="班级：">
                    <div class="item-content">{{Info.classname || '暂无数据'}}</div>
                </el-form-item>
                <el-form-item label="学院：">
                    <div class="item-content">{{Info.deptname || '暂无数据'}}</div>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card>
            <div slot="header" style="padding: 10px;">您的迎新环节完成情况如下：</div>
            <el-form ref="form" :model="Info" label-width="150px" size="small">
                <el-form-item v-for="(item,index) in planList" :key="index" :label="`${item.stepname}：`">
                    <div class="item-content">{{item.status == '1' ? '已完成' : '未完成'}}
                        <van-icon style="color: green;" class="con" v-if="item.status == '1'" name="passed"/>
                        <van-icon style="color: red;" class="con" v-else name="question-o"/>
                    </div>
                </el-form-item>
            </el-form>
            <div>

            </div>
        </el-card>
        <div class="btn-contain" v-if="flag_wc" style="padding-bottom: 0;">
            <van-button type="info" size="large" class="button-bg" @click="wc">
                确认完成注册
            </van-button>
        </div>
        <div class="btn-contain">
            <van-button type="info" size="large" class="button-bg" @click="qj">
                {{flag ? '查看请假申请信息' : '请假申请'}}
            </van-button>
        </div>
    </div>
</template>

<script>
    import goBack from '@/components/goBack'

    export default {
        name: "complete",
        data() {
            return {
                title: '完成注册',
                Info: {},
                flag: false,//请假
                qjxx: {
                    // bz: "123123123",
                    // id: "82a75dbe4fe34ae2989acf5337598e52",
                    // qjts: 22,
                    // qjyy: "我就是要请假123123",
                    // scrq: "2019-07-23T07:06:01.000+0000",
                    // studentid: "205832",
                    // yjdxsj: "2019-07-26 11:10"
                },
                planList: [],
                flag_wc: false,//完成注册按钮是否显示
            }
        },
        components: {
            goBack
        },
        methods: {
            sfqj() {//判断是否请假
                this.$ajax.get('/leave_api/find').then(res => {
                    if (res.data.data) {//存在请假信息
                        this.flag = true
                        this.$store.state.qjxx = res.data.data
                    } else {//不存在请假信息
                        this.flag = false
                    }
                })
            },
            qj() {//跳转到请假界面
                this.$router.push({
                    path: '/complete/qj',
                    query: {
                        flag: this.flag ? '1' : '0'
                    }
                })
            },
            wc() {//完成注册
                this.$ajax.post('/common_step_api/save_record', {stepId: 'bdd'}).then((res) => {
                    if (res.data.errcode == '0') {
                        this.$toast({
                            type: 'success',
                            message: '完成注册'
                        })
                        setTimeout(() => {
                            this.$router.push('/desk')
                        }, 3000)
                    } else {
                        this.$toast({
                            type: 'fail',
                            message: res.data.errmsg
                        })
                    }
                })
            },
            getHj() {//获取环节信息
                let planId = this.$store.getters.stdInfo.planid
                let studentId = this.$store.getters.stdInfo.studentid
                this.$ajax.get('/plan_step_api/steps', {
                    params: {
                        planId: planId,
                        studentId: studentId
                    }
                }).then(res => {
                    this.planList = res.data.data
                    this.isWc()
                })
            },
            isWc() {
                let flag = true;
                let list = this.planList
                console.log(list)
                for (let i = 0; i < list.length; i++) {
                    if (list[i].stepid === 'bdd') {
                        if (list[i].status === '1') {
                            flag = false;
                            console.log("已完成注册");
                            break;
                        }
                    } else {
                        if (list[i].ismust === '1' && list[i].status === '0') {
                            flag = false;
                            console.log("环节未完成", list[i].stepid);
                            break;
                        }
                    }
                }
                console.log(flag)
                this.flag_wc = flag;
            }
        },
        mounted() {
            this.getHj()
            window.vue = this;
            this.Info = this.$store.getters.stdInfo;//学生信息
            this.planList = this.$store.state.planList;//环节信息
            this.sfqj()
        }
    }
</script>

<style scoped>
    .con {
        vertical-align: middle;
        font-size: 26px;
    }
</style>