<template slot-scope="scope">
<div>
  <div class="headBack">
		<el-row class="container">
			<el-col :span="24">
        <div class="headBox">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="1"><i class="el-icon-price-tag"></i>Home</el-menu-item>
          <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-fold"></i>Classify</i></template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" ><i class="el-icon-coin"></i>Donate</el-menu-item>
          <el-menu-item index="4" ><i class="el-icon-male"></i>Join</el-menu-item>
          <el-menu-item index="5" ><i class="el-icon-chat-line-round"></i>bbs</el-menu-item>
          <el-menu-item index="6" ><i class="el-icon-message"></i>About</el-menu-item>
          <div index="" class="pcsearchbox">
					  <i class="el-icon-search pcsearchicon"></i>
					  <div class="pcsearchinput" :class="input?'hasSearched':''">
						  <el-input placeholder="搜索" @input="forceUpdate" icon="search" v-model="input" :on-icon-click="searchEnterFun" @keyup.enter.native="searchEnterFun" @change="searchChangeFun">
						  </el-input>
					  </div>
				  </div>
        </el-menu>
        </div>
			</el-col>
		</el-row>
  </div>
  <div class="headImgBox">  
    <div class="scene">
			<div><span id="luke"></span></div>
		</div>
  </div>
</div>
</template>

<script>
import {
	Typeit
} from '../utils/plug.js'
export default {
  name: 'App',
   data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
		searchEnterFun()
		{
			window.open("http://www.baidu.com");
		},
		forceUpdate()
		{
			 this.$forceUpdate();
		}
    },


    mounted() { //页面元素加载完成
	  	var that = this;
      console.log("this");
	  	var timer = setTimeout(function() {
			  Typeit(true, "#luke"); //打字机效果
			  clearTimeout(timer);
		    }, 500);
	    }
    
}
</script>



<style>
.headImgBox {
  
  background-size: cover;
  background-image: url('../../static/img/backgroundimg01.jpg');
	height: 650px;
	position: relative;
	width: 100%;
	background-position: center 50%;
	background-repeat: no-repeat;
	margin-bottom: 90px;
  opacity:0.5;
  z-index:1;
}
.headBox .pcsearchbox {
	padding: 0;
	max-width: 170px;
	/*min-width: 30px;*/
	height: 100%;
	line-height: 38px;
	position: absolute;
	top: 20%;
	right: 20%;
	cursor: pointer;
  z-index:2;
}

.headBox .pcsearchbox:hover .pcsearchinput {
	opacity: 1;
	/*transform: scaleX(1);*/
	visibility: visible;
}

.headBox .pcsearchbox i.pcsearchicon {
	color: #fff;
	padding-left: 10px;
}

.headBox .pcsearchbox .pcsearchinput {
	width: 180px;
	padding: 10px 20px 10px 20px;
	background: rgba(40, 42, 44, 0.6);
	border-radius: 0 0 2px 2px;
	position: absolute;
	right: 0;
	top: 38px;
	opacity: 0;
	visibility: hidden;
	/*transform: scaleX(0);*/
	transform-origin: right;
	transition: all 0.3s ease-out;
}

.headBox .pcsearchbox .hasSearched {
	opacity: 1;
	/*transform: scaleX(1);*/
	visibility: visible;
}

.headBox .pcsearchbox .el-input {
	width: 100%;
}

.headBox .el-input__inner {
	height: 30px;
	border: none;
	background: #fff;
	/*border: 1px solid #333;*/
	border-radius: 2px;
	padding-right: 10px;
}

.headImgBox .scene {
	width: 100%;
	/*height:300px;*/
	text-align: center;
	font-size: 100px;
	font-weight: 200;
	color: #fff;
	position: absolute;
	left: 0;
	top: 160px;
	font-family: 'Sigmar One', Arial;
	text-shadow: 0 2px 2px #47456d;

}

.headImgBox .scene span {
	transform: matrix(1, 0, 0, 1, 0, 0);
	-webkit-transform: matrix(1, 0, 0, 1, 0, 0);
	text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
}
</style>