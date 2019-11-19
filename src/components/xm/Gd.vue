<template>
    <div  ref="carousel" >
        <Login></Login>
        <div style="position:relative;">
            <img style="width:100%;height:100%;margin-top:50px" src="../../img/pBan.jpg" alt="" >
            <a @click="sy"><img style="right: 10px;top: 110px;position: absolute;" src="../../img/jiantou.png" alt=""></a>
        </div>
        <div >
            <h3>选择你想了解的城市</h3>
            <div >
                <mt-picker :slots="slots" :visible-item-count="3"
                @change="onValuesChange"></mt-picker>
            </div>
            <div class="dz">
            <h4 v-for="(a,i) of this.value" :key="i">{{a}}</h4>
            </div>
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
            value:"",
            slots:[{values:['重庆','北京','上海','深圳','新疆','拉萨','昆明','湖南','武汉','陕西']}],
            cq:['重庆碧桂园','重庆','123456','重庆市'],
            bj:["北京碧桂园","北京","123456","北京市"],
            sh:["上海碧桂园","上海","123456","上海市"],
            sz:["深圳碧桂园","深圳","123456","深圳市"],
            bgy:['佛山碧桂园','佛山','123456','佛山市']
        }
    },
    methods:{
       onValuesChange(picker, values){
           this.value=values[0];
           if(this.value=="重庆"){
               this.value=this.cq
           }else if(this.value=="北京"){
               this.value=this.bj
           }else if(this.value=="上海"){
               this.value=this.sh
           }else if(this.value=="深圳"){
               this.value=this.sz}
            else{this.value=this.bgy}
       },

       sy(){
           this.$router.push({path:'/St'})
       }
    }
    
}
</script>
<style scoped>

h3{
    text-align: center

}
.dz{margin: 0 20px 0 20px;background-color: #bbcab62e}

</style>
