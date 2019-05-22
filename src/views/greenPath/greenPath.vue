<template>
    <div>
        <go-back :title="title"></go-back>
        <div class="pad20">
            <div class="index-list-div" @click="onSelect">
                <div>缓交方式</div>
                <div>{{currentChoose.name}} ></div>
            </div>
            <div class="index-list-div">
                <div>缓交方式</div>
                <div>国家助学贷款 ></div>
            </div>
            <div class="index-list-div">
                <div>缓交方式</div>
                <div>国家助学贷款 ></div>
            </div>
            <div class="index-list-div">
                <div>缓交方式</div>
                <div>国家助学贷款 ></div>
            </div>
            <van-button @click="onSelect">123</van-button>
            <van-actionsheet
                    v-model="currentChoose"
                    :actions="chooseList"
                    cancel-text="取消"
                    @select="onSelect"
                    @cancel="onCancel"
            />
        </div>
    </div>
</template>

<script>
    /**
     * @author Xus
     * @date 2019/5/6
     * @Description: 绿色通道
     */
    import goBack from '@/components/goBack'
    import {Actionsheet} from 'vant'

    export default {
        name: "greenpath",
        data() {
            return {
                title: '绿色通道',
                chooseList: [
                    {name: '国家助学贷款'},
                    {name: '生源地贷款'},
                    {name: '其他'}
                ],
                currentChoose: '',
                flag:true
            }
        },
        components: {
            goBack,
            [Actionsheet.name]: Actionsheet
        },
        methods: {
            onSelect(e) {
                this.currentChoose = true
            },
            onCancel(e) {
                console.log(e)
            }
        },
        mounted() {
            console.log(Actionsheet)
        },
        ActionSheet() {

        }
    }
</script>

<style scoped>

</style>