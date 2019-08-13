<template>
    <div style="padding: 10px;">
        <go-back :title="title"></go-back>
        <el-card style="margin-bottom: 10px;">
            <el-form ref="form" :model="Info" label-width="100px" size="small">
                <el-form-item label="姓名:">
                    <div class="item-content">{{Info.xm || '暂无数据'}}</div>
                </el-form-item>
                <el-form-item label="性别:">
                    <div class="item-content">{{Info.xb || '暂无数据'}}</div>
                </el-form-item>
                <el-form-item label="学号:">
                    <div class="item-content">{{Info.xh || '暂无数据'}}</div>
                </el-form-item>
                <el-form-item label="专业:">
                    <div class="item-content">{{Info.majorname || '暂无数据'}}</div>
                </el-form-item>
                <el-form-item label="班级:">
                    <div class="item-content">{{Info.classname || '暂无数据'}}</div>
                </el-form-item>
                <el-form-item label="学院:">
                    <div class="item-content">{{Info.deptname || '暂无数据'}}</div>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card style="padding: 20px;">
            <el-form ref="form_qjxx" label-position="top" :rules="rules_qjxx" :model="qjxx" :disabled="flag == '1'"
                     label-width="100px" size="mini">
                <el-form-item label="请假原因" prop="qjyy">
                    <el-input type="textarea" v-model="qjxx.qjyy" autosize></el-input>
                </el-form-item>
                <el-form-item label="预计到校时间" prop="yjdxsj">
                    <el-date-picker type="date" v-model="qjxx.yjdxsj"></el-date-picker>
                </el-form-item>
                <el-form-item label="请假天数" prop="qjts">
                    <el-input type="number" v-model="qjxx.qjts"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="bz">
                    <el-input type="textarea" v-model="qjxx.bz" autosize></el-input>
                </el-form-item>
            </el-form>
        </el-card>
        <div class="btn-contain" v-if="flag !== '1'">
            <van-button type="info" size="large" class="button-bg" @click="submit">
                提交
            </van-button>
        </div>
    </div>
</template>

<script>
    import goBack from '@/components/goBack'

    export default {
        name: "qj",
        data() {
            return {
                title: '请假申请信息',
                Info: {},
                flag: '',//字符串1-有请假信息，0-无请假信息
                qjxx: {
                    qjyy: "",
                    yjdxsj: "",
                    qjts: "",
                    bz: ""
                },
                rules_qjxx: {
                    qjyy: [{required: true, message: "必填", trigger: "change"}],
                    yjdxsj: [{required: true, message: "必填", trigger: "change"}],
                    qjts: [{required: true, message: "必填", trigger: "change"}],
                    bz: [{required: true, message: "必填", trigger: "change"}]
                }
            }
        },
        components: {
            goBack
        },
        methods: {
            submit() {
                this.$refs['form_qjxx'].validate((valid) => {
                    if (valid) {//继续提交
                        this.$ajax.post('/leave_api/save', this.qjxx).then(res => {
                            if (res.data.errcode == '0') {
                                this.$toast(res.data.data)
                                this.$router.go(-1)
                            } else {
                                this.$toast(res.data.errmsg)
                            }
                        })
                    } else {//终止提交，并提示
                        this.$toast('请填写必填项！')
                    }
                });
            }
        },
        mounted() {
            this.Info = this.$store.getters.stdInfo;//学生信息
            this.flag = this.$route.query.flag
            if (this.flag == '1') {
                this.qjxx = this.$store.state.qjxx
            }
        }
    }
</script>

<style scoped>

</style>