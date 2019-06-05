<template>
    <div>
        <go-back :title="title"></go-back>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="基本信息">
                <div class="person-div"><img src="@/assets/img/person.png" alt=""></div>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="姓名:">
                        <div class="item-content">{{Info.xm}}</div>
                    </el-form-item>
                    <el-form-item label="身份证号:">
                        <div class="item-content">{{Info.sfzh}}</div>
                    </el-form-item>
                    <el-form-item label="考生号:">
                        <div class="item-content">{{Info.ksh}}</div>
                    </el-form-item>
                    <el-form-item label="学号:">
                        <div class="item-content">{{Info.xh}}</div>
                    </el-form-item>
                    <el-form-item label="性别:">
                        <div class="item-content">{{Info.xb}}</div>
                    </el-form-item>
                    <el-form-item label="民族:">
                        <div class="item-content">{{Info.mz}}</div>
                    </el-form-item>
                    <el-form-item label="学院:">
                        <div class="item-content">{{Info.xy}}</div>
                    </el-form-item>
                    <el-form-item label="专业:">
                        <div class="item-content">{{Info.zy}}</div>
                    </el-form-item>
                    <el-form-item label="班级:">
                        <div class="item-content">{{Info.bj}}</div>
                    </el-form-item>
                    <el-form-item label="政治面貌:">
                        <div class="item-content">{{Info.zzmm}}</div>
                    </el-form-item>
                    <el-form-item label="出生年月:">
                        <div class="item-content">{{Info.csny}}</div>
                    </el-form-item>
                    <el-form-item label="入学年份:">
                        <div class="item-content">{{Info.rxnf}}</div>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="辅导员信息" name="辅导员信息">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="辅导员:">
                        <div class="item-content">{{Info.fdy || '暂无数据'}}</div>
                    </el-form-item>
                    <el-form-item label="志愿者:" v-for="item in Info.volunteer">
                        <div class="item-content">{{item.xm}}，tel：{{item.lxdh}}</div>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="学生信息" name="学生信息">
                <el-form ref="form" :model="Info" label-width="100px">
                    <el-form-item label="曾用名">
                        <el-input v-model="Info.cym"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="Info.lxdh"></el-input>
                    </el-form-item>
                    <el-form-item label="生源地">
                        <el-select v-model="Info.sydsfname" placeholder="">
                            <el-option v-for="item in province" :label="item.codeitemname" :key="item.codeitemid"
                                       :value="item.codeitemid"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="户口性质">
                        <el-select v-model="Info.hkxz" placeholder="">
                            <el-option v-for="item in household" :label="item.codeitemname" :key="item.codeitemid"
                                       :value="item.codeitemid"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="婚姻情况">
                        <el-select v-model="Info.hyqk" placeholder="">
                            <el-option v-for="item in marriages" :label="item.codeitemname" :key="item.codeitemid"
                                       :value="item.codeitemid"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="所在校区">
                        <el-select v-model="Info.szxq" placeholder="">
                            <el-option v-for="item in campus" :label="item.codeitemname" :key="item.codeitemid"
                                       :value="item.codeitemid"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="户口所在地">
                        <el-input v-model="Info.hkszsfid"></el-input>
                    </el-form-item>
                    <el-form-item label="户口详细地址">
                        <el-input v-model="Info.hkszdz"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭人口数">
                        <el-input v-model="Info.jtrks"></el-input>
                    </el-form-item>
                    <el-form-item label="全年总收入">
                        <el-input v-model="Info.nsr"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭经济情况">
                        <el-input v-model="Info.jjqk"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭电话">
                        <el-input v-model="Info.jtdh"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭现住址">
                        <el-input v-model="Info.jtzz"></el-input>
                    </el-form-item>
                    <el-form-item label="QQ号">
                        <el-input v-model="Info.qqh"></el-input>
                    </el-form-item>
                    <el-form-item label="毕业中学">
                        <el-input v-model="Info.byxx"></el-input>
                    </el-form-item>
                    <el-form-item label="毕业学校邮编">
                        <el-input v-model="Info.byxxyb"></el-input>
                    </el-form-item>
                    <el-form-item label="是否独生子女">
                        <el-radio-group v-model="Info.sfds">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否烈士子女">
                        <el-radio-group v-model="Info.sfls">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否贫困家庭">
                        <el-radio-group v-model="Info.sfpkjt">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="家庭详细信息" name="家庭详细信息">
                <el-form ref="form" :model="Info" label-width="180px">
                    <el-form-item label="是否建档立卡平困户">
                        <el-radio-group v-model="Info.sfjdlkpkh">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否城镇低保">
                        <el-radio-group v-model="Info.sfczdb">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否农村低保">
                        <el-radio-group v-model="Info.sfncdb">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否农村特困供养">
                        <el-radio-group v-model="Info.sfnctkgy">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否残疾人子女">
                        <el-radio-group v-model="Info.sfcjrzn">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否单亲家庭">
                        <el-radio-group v-model="Info.sfdq">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否家中有大病患者">
                        <el-radio-group v-model="Info.sfjzydbhz">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否孤儿">
                        <el-radio-group v-model="Info.sfge">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否军烈属或优抚子女">
                        <el-radio-group v-model="Info.sfjlshyfzn">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否父母丧失劳动能力">
                        <el-radio-group v-model="Info.sffmssldnl">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否家庭遭受自然灾害">
                        <el-radio-group v-model="Info.sfjtzfzrzh">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="自然灾害情况描述">
                        <el-input v-model="Info.jtzrzhms"></el-input>
                    </el-form-item>
                    <el-form-item label="是否家庭遭受突发意外事件">
                        <el-radio-group v-model="Info.sfjtzctfywsj">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="突发意外事件具体描述">
                        <el-input v-model="Info.tfywsjms"></el-input>
                    </el-form-item>
                    <el-form-item label="是否残疾">
                        <el-radio-group v-model="Info.sfjtzctfywsj">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="残疾类型">
                        <el-select v-model="Info.hkxz" placeholder="">
                            <el-option v-for="item in disabilities" :label="item.codeitemname" :key="item.codeitemid"
                                       :value="item.codeitemid"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="是否低收入家庭">
                        <el-radio-group v-model="Info.sfdfrjt">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="家庭主要收入来源">
                        <el-select v-model="Info.jtzysrly" placeholder="">
                            <el-option v-for="item in incomeSources" :label="item.codeitemname" :key="item.codeitemid"
                                       :value="item.codeitemid"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="家庭劳动人口总数">
                        <el-input v-model="Info.jtldlrks"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭人均年收入">
                        <el-input v-model="Info.jtrjnsr"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭成员失业数">
                        <el-input v-model="Info.jtcyssrs"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭适龄就学子女数">
                        <el-input v-model="Info.jtsljxzns"></el-input>
                    </el-form-item>
                    <el-form-item label="赡养人口数">
                        <el-input v-model="Info.syrks"></el-input>
                    </el-form-item>
                    <el-form-item label="本人月均消费数">
                        <el-input v-model="Info.bryjshf"></el-input>
                    </el-form-item>
                    <el-form-item label="本人月均食堂消费金额">
                        <el-input v-model="Info.brstyxfje"></el-input>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="直系家庭成员" name="直系家庭成员">
                <div>父母和未结婚的兄弟姐妹</div>
                <el-form ref="form" :model="Info.family" label-width="80px">
                    <el-form-item label="姓名">
                        <el-input v-model="Info.family.xm"></el-input>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="主要社会关系" name="主要社会关系">定时任务补偿</el-tab-pane>
            <el-tab-pane label="团员信息" name="团员信息">定时任务补偿</el-tab-pane>
            <el-tab-pane label="党员信息" name="党员信息">定时任务补偿</el-tab-pane>
            <el-tab-pane label="紧急联系人" name="紧急联系人">定时任务补偿</el-tab-pane>
        </el-tabs>
        <div class="pad20">

        </div>
    </div>
</template>

<script>
    import goBack from '@/components/goBack'
    import {Actionsheet, Slider, Picker, Popup} from 'vant'

    export default {
        name: "person",
        data() {
            return {
                title: '个人信息',
                Info: {
                    family: [],
                    relatives: []
                },//详细信息
                campus: [],//校区
                household: [],//户口
                marriages: [],//婚姻情况
                province: [],//省份
                disabilities: [],//残疾类型
                incomeSources: [],//收入来源
                activeName: "基本信息",


            }
        },
        components: {
            goBack,
            [Actionsheet.name]: Actionsheet,
            [Slider.name]: Slider,
            [Picker.name]: Picker,
            [Popup.name]: Popup
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleClick(tab, event) {
                console.log(tab.name)
                console.log(event)
            },
            getDetail() {//获取学生详情
                this.$ajax.get('/student_api/student_detail').then(res => {
                    this.Info = res.data.data
                })
            },
            getOptions() {//获取选项
                this.$ajax.get('/student_api/options').then(res => {
                    this.campus = res.data.data.campus
                    this.household = res.data.data.household
                    this.marriages = res.data.data.marriages
                    this.province = res.data.data.province
                    this.disabilities = res.data.data.disabilities
                    this.incomeSources = res.data.data.incomeSources
                })
            }
        },
        mounted() {
            this.getDetail()
            this.getOptions()
        }
    }
</script>

<style scoped lang="scss">

</style>