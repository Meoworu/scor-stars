<template>
    <div class="box">
        <span v-for="(item,index) in starArr" :style="item.flag ? styles : default_style " @mouseover="mover(index)" @mouseout="mout(index)" @click="setStar(index)">★</span>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                starArr :[],
                lock : true,
                number:0
            }
        },
        created(){
            for (let i = 0; i < this.num; i++ ){
                let obj = new Object({});
                this.$set(obj, 'flag', false);
                this.starArr.push(obj);
            }
        },
        methods:{
            mover(num){
                this.lock = true ; 
                for(let i=0;i<=num;i++){
                    this.starArr[i].flag = true ;
                }
            },
            mout(num){
                if(this.lock){
                    for(let i=0;i<this.starArr.length;i++){
                        this.starArr[i].flag = false ;
                    }
                }
            },
            setStar(num){
                this.lock = false ; 
                this.number = num+1 ;  
                console.log(this.number);
            }
        },
        props:{
            num:{
                type:Number,
                default:5
            },
            option:{
                type:Object,
            }
        },
        computed:{
            default_style(){
                const options = this.option;
                if(!!options){
                    let str = `font-size:`+options.font_size+`;color:`+options.default_color+`letter-spacing:`+
                    options.letter_spacing+';';
                    return str ;
                }else{
                    return "";
                }
                 
            },
            styles(){
                const options = this.option;
                if(!!options){
                    let str = `color:`+options.light_color+`;`;
                    return str ;
                }else{
                    return 'color:#ffcf00';
                }
                
                 
            }
        }
        
    }
</script>
<style scoped lang="less">
    .box{
        span{
            font-size: 25px;
            color: #ccc;
            cursor: pointer;
        }
        .active{
            color:#ffcf00;
        }
        letter-spacing:5px;
    }
</style>
