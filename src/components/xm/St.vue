<template>

    <div class="St" >
         <Login></Login>
        <!-- 轮播图 -->
        <div style="height:300px;margin-top:50px">
        <mt-swipe :auto="4000" >
            <mt-swipe-item ><img  class="tp" src="../../img/lb1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item ><img class="tp" src="../../img/lb2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item ><img  class="tp" src="../../img/lb3.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
        </div>
        <!-- 插字 -->
        <ul>
            <li>
                <h3>关键项目</h3>
            </li>
        </ul>
        <!-- 简介 -->
        <div >
            <img @click="cssl" class="tp" src="../../img/cssl.jpg" alt="">
            <!-- 文字内容 -->
            <div class="jj">
                <div style="margin:0 10px 0 10px">
                <h3>碧桂园森林城市</h3>
                <p>森林城市地面都是公园，车辆在底层穿行，地面是无污染轨道交通，建筑外墙长满垂直分布的植物，每一天，人们就都生活在花园里，呼吸在森林里，愉悦在自然之中。</p>
             </div>
            <mt-button size="large" type="default" @click="gd" plain>更多<a style="float:right">＞</a></mt-button>                
            </div>
        </div>
        <!-- 客服 -->
        <div style="margin:15px 0 15px 0" @click="kf">
            <a ><img style="width:50%;height:50%" src="../../img/s1.jpg" alt=""></a>
            <a ><img style="width:50%;height:50%" src="../../img/s2.jpg" alt=""></a>
        </div>
        <!-- 新闻中心 -->
        <div style="margin:0 10px 0 10px">
            <h3 >新闻中心</h3>
            <hr>
            <div>
            <h3>2019年国庆阅兵气势恢宏</h3>
                <p >刚刚过去的国庆，十一的天安阅兵展示了我国将士的宏伟气势，以及我国先进装备以在国际上取得的优秀成绩。</p>
                <hr>
            </div>
            <h3>月刊</h3>
            <div v-for="(a,i) of xinwen" :key="i">
                <hr>
                <p>{{a}}</p>
            </div>
            <mt-button size="large" type="default" plain>更多<a style="float:right" @click="gdxw">＞</a></mt-button>
        </div>
         
        <End></End>
     </div>
</template>
<script>
import Login from "./Login.vue"
import End from "./End.vue"
export default {
     components:{
         Login,
         End
    },
    data(){
        return{
          xinwen:['震惊！半夜猪圈传来猪叫','震惊！香港废青居然吃哪种东西','天啦！小学生居然...','哈哈哈...欢迎....']
            }
    },
    methods:{
        gd(){
            this.$router.push({path:'/Gd'})
        },
        kf(){
            this.$router.push({path:'/Kf'})
        },
        gdxw(){

        },
        cssl(){
             this.$router.push({path:'/Cssl'})
        }
    
    },
        

}
</script>
<style >

.tp{width: 100%;height: 100%}
.jj{
    margin: -40px 25px 0 25px;
    background-color: white;
   
    position:relative;
    padding-top: 1PX
   
}
.St>ul{list-style:none;padding:0 147px} */
    img{
    width: 100%;height: 100%
    }
   
</style>
