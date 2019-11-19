<template>
    <div class="login" ref="carousel">
     <van-popup v-model="show" position="top" :style="{ height: '8%' }">
       <van-search placeholder="请输入搜索关键词" v-model="value" />
     </van-popup>
        <ul class="tou">
            <li ><img style="padding:10px 0 0 30px"  src="../../img/log.jpg" alt=""></li>
            <li style="float:right"  class="bg"><a class="a" href="javascript:;"><img @click="add" src="../../img/sq.png" alt=""></a></li>
            <li style="float:right" @click="showPopup"><a><img src="../../img/sousuo.png" alt=""></a></li>
        </ul>
        <!-- 选择栏 -->
        <van-popup is-link  v-model="show1" position="left" 
        :style="{width:'70%',height:'100%'}">
        <ul class="sy">
          <h2>首页</h2>
          <hr>
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item :title="syy[0]" name="1">
              <li v-for="(a,i) of syy1[0]" :key="i">{{a}}</li>
            </van-collapse-item>
            <van-collapse-item :title="syy[1]" name="2">
              <li v-for="(a,i) of syy1[1]" :key="i">{{a}}</li>
            </van-collapse-item>
            <van-collapse-item :title="syy[2]" name="3">
              <li v-for="(a,i) of syy1[2]" :key="i">{{a}}</li>
            </van-collapse-item>
            <van-collapse-item :title="syy[3]" name="4">
              <li v-for="(a,i) of syy1[3]" :key="i">{{a}}</li>
            </van-collapse-item>
            <van-collapse-item :title="syy[4]" name="5">
              <li v-for="(a,i) of syy1[4]" :key="i">{{a}}</li>
            </van-collapse-item>
            <van-collapse-item :title="syy[5]" name="6">
              <li v-for="(a,i) of syy1[5]" :key="i">{{a}}</li>
            </van-collapse-item>
            
        </van-collapse>
        </ul>
        </van-popup>
                             
    </div> 
</template>
<script>


export default {

 

    data(){
      return{
        value:"",
       activeName:1,
       show: false,
       show1:false,
       syy:["碧桂园集团","产品服务","投资者关系","新闻中心","加入碧桂园","客服中心"],
       syy1:[['集团介绍','集团文化','集团董事'],['产品介绍','产品分布'],['投资人','投资注意','独立投资','投资合作','投资方向'],['2018碧桂园新闻','2019碧桂园新闻'],['校园招聘','社会招聘'],['人工客服']]
      }
    },
    methods:{
      add(){
      
      this.show1=true
      },
    
      showPopup(){
        this.show=true
      }
      
     
      }
    }

</script>
<style scoped>
.sy{margin: 30px 15px 0 15px}
.a{background-color:rgb(224, 224, 224)}
ul{list-style-type: none;}

.login>.tou {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position:fixed;
    width: 100%;
    background-color: white;
    z-index: 111;
    top:0;
}
.tou>li {
    float: left;
}
.tou>li a {
    display: block;
    padding: 14px 16px;
}

</style>
