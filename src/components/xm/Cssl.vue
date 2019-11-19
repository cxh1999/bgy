<template>
    <div >
        <div style="position: relative;">
            <img style="width: 100%;" src="../../img/bg-slcs.jpg" alt="">
            <img class="slcs" style="right: 121px;top: 110px;position: absolute;" src="../../img/slcs.png" alt="">
            <img src="../../img/shouqianniuicon.png" style="right: 60px;top: 100px;position: absolute;" @click="add" alt="">
            <img src="../../img/ai207.png" style="right: 60px;top: 150px;position: absolute;" @click="fh" alt="">
        </div>
        <div class="zt" >
       
             <h2>
                A PRIME MODEL OF FUTURE CITIES
            </h2>
            <hr>
            <h3>
                AN EMERGING FUTURISTIC URBAN DEVELOPMENT
            </h3>
        </div>
         <van-popup is-link  v-model="show1" position="left" 
            :style="{width:'100%',height:'100%',}" style="opacity:0.5">
            <h1 @click="add1" style="right: 60px;top: 90px;position: absolute;margin:0"><van-icon name="cross" /></h1>
        </van-popup>
    </div>
</template>
<script>
export default {
    data(){
        return{
             show1:false,
        }
    },
    methods:{
        add(){
            this.show1=true
        },
        add1(){
            this.show1=false
        },
        fh(){
             this.$router.push({path:'/St'})
        }
        
    }

}
</script>
<style scoped>
.zt{margin:0 80px 0 80px;top: 250px;position: absolute;text-align: center;color: white}
 
</style>