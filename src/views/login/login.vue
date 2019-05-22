<template>
    <div>
        <p>登录页</p>
        <van-field
                v-model="username"
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
        />

        <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
        />
        <div style="padding: 10px;">
            <van-button type="info" size="large" class="button-bg" @click="login">
                登陆
            </van-button>
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
                /*
                登陆逻辑
                 */
                this.$router.push({path:'/desk'})
            }
        }
    }
</script>

<style scoped>

</style>