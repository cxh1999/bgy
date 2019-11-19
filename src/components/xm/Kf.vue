<template>
    <div  ref="carousel" >
        <Login></Login>
        <div style="position:relative;">
            <img style="width:100%;height:100%;margin-top:50px" src="../../img/kf.jpg" alt="" >
            <a @click="sy"><img style="right: 10px;top: 110px;position: absolute;" src="../../img/jiantou.png" alt=""></a>
        </div>
            <div class="ys">
                <h3>联系我们</h3>
                <hr>
                <h4>碧桂园总部服务电话</h4>
                <img src="../../img/dianhua.png" alt=""><br>
                <span>4008919338</span>
                <hr>
                <h4>碧桂园总部服务监督邮箱</h4>
                <img src="../../img/youjian.png" alt=""><br>
                <span>khfw@countrygarden.com.cn</span>
            </div>
            <div class="sm">
                <p>
                    欢迎广大客户、业主通过该邮箱向碧桂园公司咨询或反映任何问题；我们衷心感谢您的支持！
                </p>
                <p>
                1、 您与我司往来的邮件不作为我司与您之间合作或我司向您发出要约邀请之凭据。
                </p>
                <p>
                    2、 您向我司发送邮件纯属您个人行为，且发送邮件的内容仅代表您的观点和意愿，并不代表我司立场。
                </p>
                <p>
                    3、 我司回复的邮件及内容不作为碧桂园对您的任何承诺，仅作为服务体现。
                </p>
            </div>
           
        <End></End>
    </div>
</template>
<script>
import Login from "./Login.vue"
import End from "./End.vue"
export default {
    components:{Login,End},
    
    data(){
        return{
            
        }
    },
    methods:{
      sy(){
           this.$router.push({path:'/St'})
       }
       },

      
    
}
</script>
<style scoped>
.sm{margin: 5px 10px 5px 10px;}
.ys{text-align: center;background-color: rgb(226, 226, 226);
margin: 30px 10px 0 10px;padding:10px 5px 10px 5px;}


</style>
