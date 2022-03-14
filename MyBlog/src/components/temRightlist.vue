<template>
    <div class="rightlistBox">
            <div class="r1-head">
                <img src="../../static/img/backgroundimg02.jpg" alt="Smiley face">
                <h1>
                    <span>Student </span>cherry
                </h1>
            </div>
            <div class = "Timer" > {{ FormatTime(nowTime) }}</div>
            <div class="r1-body">
                <p>communication</p>
                <div class="catch-me" >
                    <div class="">
                        <el-tooltip  class="item"  content="Github" placement="top" >
                            <a :href="PersonalMessage.me.git" target="_blank" ><i class="fa fa-fw fa-github"></i>  </a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="QQ" placement="top">
                            <a  :href="PersonalMessage.me.qq" target="_blank"><i class="fa fa-fw fa-qq"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="微博" placement="top">
                            <a :href="PersonalMessage.me.sina" target="_blank"><i class="fa fa-fw fa-weibo"></i></a>
                        </el-tooltip>
                    </div>
                     <div class="">
                        <el-tooltip class="item" effect="dark" content="微信" placement="top">
                            <a :href="PersonalMessage.me.wechat" target="_blank"><i class="fa fa-fw fa-wechat"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="CSDN" placement="top">
                            <a :href="PersonalMessage.me.csdn" target="_blank"><i class="">C</i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="简历" placement="top">
                            <a :href="PersonalMessage.me.job" target="_blank"><i class="fa fa-fw fa-file-word-o"></i></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="更多" placement="top">
                            <a href="#/About" ><i class="el-icon-more"></i></a>
                        </el-tooltip>
                    </div>
                </div>
            </div>
    </div>
</template>


<script>
 export default {
        data() { //选项 / 数据
            return {
                fixDo:false,
                loveme:false,
                gotoTop:false,//返回顶部
                going:false,//是否正在执行上滑动作
                browseList:'1',//浏览量最多
                artCommentList:'',//评论量最多
                likeNum:0,//do you like me 点击量
                initLikeNum:0,//初始化喜欢数量
                PersonalMessage:{
                    me:{
                        git: 'https://github.com/qq446171434',
                        qq: 'static/img/me/QQ.jpg',
                        sina: 'https://weibo.com',
                        wechat: 'static/img/me/wx.jpg'
                    }
                },
                timer: undefined,
                nowTime: new Date(),
            }
        },
        methods:
        {
            toTopfun (e)
            {
                window.scrollTo(0, 0);
            },

            scrollToTop() { //做一个监听网页当前高度
　　            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
　　            console.log(scrollTop) ;
            },
            FormatTime() {
        //返回显示的日期时间格式
        var date = new Date();
        var year = this.formatTime(date.getFullYear());
        var month = this.formatTime(date.getMonth() + 1);
        var day = this.formatTime(date.getDate());
        var hour = this.formatTime(date.getHours());
        var minute = this.formatTime(date.getMinutes());
        var second = this.formatTime(date.getSeconds());
        var weekday = date.getDay();
        var weeks = new Array(
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      );
        var week = weeks[weekday];
        return `${year}-${month}-${day} ${hour}:${minute}:${second} ${week}`;
    },
    formatTime(n) {
      //判断是否需要加0
      if (n < 10) {
        return "0" + n;
      } else {
        return n;
      }
    },
        },

        created() {
         // 显示时间
        this.timer = setInterval(() => {
            this.nowTime= new Date().toLocaleString();
        });
        },

        mounted() { 
            window.addEventListener('scroll', this.scrollToTop)
        },

        beforeDestroy() {
            if (this.timer) {
            clearInterval(this.timer);
            }
        },

        destroyed () {
            window.removeEventListener('scroll', this.scrollToTop); 
        }
}
 
</script>


<style lang="less">
.rightlistBox{
    position: relative;
    background: rgb(206, 191, 191);
}
.rightlistBox section {
    transition: all 0.2s linear;
    position: relative;
    background: #fff;
    padding:15px;
    margin-bottom: 20px;
    border-radius: 5px;
}
.rightlistBox section:hover{
    transform: translate(0,-2px);
    box-shadow:0 15px 30px rgba(0,0,0,.1);
}
.rightlistBox .r1-head{
    text-align: center;
    border-radius: 4px 4px 0 0 ;
    text-align: center;
    position: relative;
    margin-top: 10%;
    //*box-shadow: inset 0 -70px 100px -50px rgba(0,0,0,.5);
}
.rightlistBox .r1-head img{
    width:70%;
    min-height: 70px;
}
.rightlistBox .r1-head h1{
    position: absolute;
    bottom:5px;
    margin:0 0 0 -65px;
    font-size: 20px;
    letter-spacing:0.5px;
    color:rgb(207, 22, 22);
    text-shadow: 1px 1px 1px rgba(0,0,0,.7);
    font-weight: 700;
    width:130px;
    left:50%;
}
.rightlistBox .r1-head h1 span{
    opacity: 0.3;
}
.rightlistBox .r1-body p{
    font-size: 14px;
    margin:5px 0 8px 0;
    font-weight: 700;
    text-align: center;
}
.rightlistBox .r1-body .catch-me{
    text-align: center;
}
.rightlistBox .r1-body .catch-me a{
    display: inline-block;
    margin-bottom: 7px;
    position: relative;
    text-decoration: none;
}
.rightlistBox .r1-body .catch-me a:hover i{
    color:#fff;
    background: #F4692C;
}
.rightlistBox .r1-body .catch-me a i{
    display: inline-block;
    font-size: 18px;
    width:42px;
    height:42px;
    line-height: 42px;
    border-radius: 42px;
    color:rgba(0,0,0,0.5);
    background: rgba(0,0,0,0.1);
    transition: all 0.3s ease-in-out;
    font-style: normal;
    margin:0 3.2px;
}

.rightlistBox .Timer{
    text-align:center;

}

/*************do you like me*******************/
.rightlistBox .rs2{
    /*padding:10px 0 4px 0;*/
    min-height: 100px;
}
.rightlistBox .rs2.fixed{
    position: fixed;
    top:40px;
    width:22%;
}
.rightlistBox .rs2 p{
    color:#DF2050;
    cursor: pointer;
    font-size: 20px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin-top:10px;
    font-weight: 500;
}
.rightlistBox .rs2 div{
    color:#DF2050;
    cursor: pointer;
    text-align: center;
    font-size: 40px;
    position: absolute;
    width:100%;
    height:100px;
    line-height: 100px;
    left:0;
    top:30px;
}
.rightlistBox .rs2 div i.heart{
    display: inline-block;
    text-align: center;
    width: 100px;
     height: 100px;
     margin-left: -20px;
     margin-top:-5px;
    //  background: url(../../static/img/heart.png) no-repeat;
     background-position: 0 0;
      cursor: pointer;
      -webkit-transition: background-position 1s steps(28);
      transition: background-position 1s steps(28);
      -webkit-transition-duration: 0s;
      transition-duration: 0s;
      vertical-align: middle;
}
.rightlistBox .rs2 div i.heart:hover{
    transform: scale(1.15);
    -webkit-transform: scale(1.15);
}
.rightlistBox .rs2 div i.heart.active{
    -webkit-transition-duration: 1s;
        transition-duration: 1s;
        background-position: -2800px 0;
}
.rightlistBox .rs2 div span{
    margin-left: -30px;
}
/**********排队来说*************/
.rightlistBox .rs3 .rs3-item{
    font-size: 13px;
    line-height: 20px;
}
.rightlistBox .rs3 .rs3-item a{
    display:block;
    padding:5px;
    transition: all .3s ease-out;
    border-bottom: 1px solid #ddd;
    margin:5px 0;
}
.rightlistBox .rs3 .rs3-item a:hover{
    background: rgba(230,244,250,.5);
    border-radius: 5px;
}
.rightlistBox .rs3 .rs3-photo{
    float:left;
}
.rightlistBox .rs3 .rs3-photo img{
    border-radius: 50%;
    width:32px;
    height:32px;
    object-fit: cover;
}
.rightlistBox .rs3 .rs3-inner{
    margin-left: 40px;
}
.rightlistBox .rs3 .rs3-inner .rs3-author{
    font-weight: 700;
}
.rightlistBox .rs3 .rs3-inner .rs3-text{
    font-size: 12px;
    text-align: justify;
}
.rightlistBox .rs3 .rs3-item:last-child a{
    border-bottom: none;
}
/************排队看这些***************/
.rightlistBox .rs4 li{
    padding:8px 0;
    text-align: justify;
}
.rightlistBox .rs4 li a{
    font-weight: 600;
}
.rightlistBox .rs4 li a:hover{
    color:#64609E;
}


/*回到顶部*/
/*返回到顶部*/
.toTop{
    position: fixed;
    right:40px;
    top:-150px;
    z-index: 99;
    width:70px;
    height:900px;
    transition: all .5s 0.3s ease-in-out;
    cursor: pointer;
}
.goTop{
    top:-950px;
}
.toTop img,.toTophui img{
    width:100%;
    height:auto;
}
.toTophui{
    position: fixed;
    right:10px;
    bottom:80px;
    z-index: 99;
    width:120px;
    height:120px;
    transition: all .5s 0.3s ease-in-out;
    cursor: pointer;
    animation: toflow 2s ease-in-out infinite;
}
@keyframes toflow {
    0%{
        /*top:400px;*/
        transform: scale(0.95) translate(0,10px);
    }
    50%{
        /*top:410px;*/
        transform:scale(1) translate(0,0px);
    }
    100%{
        /*top:400px;*/
        transform:scale(0.95) translate(0,10px);
    }
}
.goTophui{
    bottom:120vh;
}
</style>
