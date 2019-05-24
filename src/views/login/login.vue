<template>
    <div class="login-contain">
        <div>
            <div class="logo">
                <img src="@/assets/img/Logo.png" alt="">
                <p>北京大学</p>
            </div>
            <div class="pad20">
                <van-field
                        v-model="username"
                        clearable
                        label="学号"
                        placeholder="请输入用户名">
                    <img src="@/assets/img/user.png" slot="button"/>
                </van-field>
                <van-field
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码">
                    <img src="@/assets/img/lock.png" slot="button"/>
                </van-field>
            </div>
        </div>
        <div class="fixed-bottom">
            <div class="info">
                <div>温馨提示</div>
                <div>1.初始密码为身份证号后6位。</div>
            </div>
            <div class="btn-contain">
                <van-button type="info" size="large" class="button-bg" @click="login">
                    登录
                </van-button>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * @author Xus
     * @date 2019/5/6
     * @Description: 登录页
     */
    export default {
        name: "login",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                // if (!this.username.trim()) {
                //     this.$toast("请输入用户名")
                //     return
                // }
                // if (!this.password.trim()) {
                //     this.$toast("请输入密码")
                //     return
                // }
                // this.$ajax.post('/login', {username: this.username, password: this.password}).then(res => {
                //     console.log(res.data)
                //     /*
                //      登陆逻辑
                //      存token，role
                //       */
                //     if (res.data.errcode == '0') {
                //         this.$toast(res.data.errmsg)
                //         this.$store.commit('setToken', res.data.token)
                //         // commit('setRole',res.data.role)
                //         //res.data.role.roleid=self就是学生，其他的为老师
                //         //根据角色决定路由跳转，目前暂时不用
                //         // if (res.data.role.roleid) {
                //         //     this.$ajax.post('/set_role', {roleId: res.data.role.roleid}).then(res => {
                //         //         this.$toast(res.data.errmsg)
                //         //     }).catch(err => {
                //         //         this.$toast(err)
                //         //     })
                //         // }
                //         // if (res.data.role.roleid == 'self') {//学生
                //         //     this.$router.push({path: '/basicInfo'})
                //         // } else {//老师
                //         //     this.$router.push({path: "/glstep"})
                //         // }
                //         /*
                //         是否已读迎新须知，来决定页面跳转
                //          */
                //         this.$router.push('/desk')
                //     } else {
                //         this.$toast(res.data.errmsg)
                //     }
                // })
                this.$router.push('/desk')
            }
        }
    }
</script>

<style scoped type="text/css">

</style>