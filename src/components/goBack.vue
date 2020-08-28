<template>
    <div class="goback-div" :toWhere="toWhere" :class="bg ? 'bg-blue' : ''">
        <van-icon name="arrow-left" @click="goBack"/>
        <div>{{title}}</div>
        <span></span>
    </div>
</template>

<script>
    export default {
        name: "goBack",
        props: {
            title: String,
            bg: String,
            toWhere:String
        },
        methods: {
            goBack() {
                console.log(this.toWhere)
                // if(this.toWhere){
                //     this.$router.push(this.toWhere)
                // }else{
                    this.$router.go(-1)
                // }
            }
        }
    }
</script>

<style scoped lang="scss">
    .bg-white {

    }

    .bg-blue {
        background-color: #06BEBD !important;
        color: white !important;
        border-bottom: 1px solid #06BEBD !important;

    }
    .bg-blue-sky{

    }
</style>