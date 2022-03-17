<!-- 首页 -->
<template>
    <div>
        <wbc-nav></wbc-nav>
        <div class = "HomeBackgroundBox">
        <div class="container">
            <el-row  :gutter="30">
                <el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
                    <!-- <wbc-sharelist></wbc-sharelist> -->
                </el-col>
                <el-col :sm="24"  :md="8" >
                    <wbc-rightlist></wbc-rightlist>
                </el-col>
            </el-row>
        </div>
        </div>
        <!-- <wbc-footer></wbc-footer> -->
    </div>
</template>

<script>
import header from '../components/header.vue'
// import footer from '../components/footer.vue'
// import temSharelist from '../components/temSharelist.vue'
import temRightlist from '../components/temRightlist.vue'
    export default {
        name:'Home',
        data() { //选项 / 数据
            return {

            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件
            'wbc-nav':header,
        //     'wbc-sharelist':temSharelist,
            'wbc-rightlist':temRightlist,
        //     'wbc-footer':footer
        },
        created() { //生命周期函数

        }
    }
</script>

<style>

.HomeBackgroundBox {
    background-size: 100%;
    background-image: url('../../static/img/HomeBackground.jpg');
	height: 100%;
	width: 100%;
	background-position: center 50%;
}

</style>