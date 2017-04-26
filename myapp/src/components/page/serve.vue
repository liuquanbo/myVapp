<template>

  <div class="serve">
    
     <ul class="serve-ul">
         <li v-for="item in serves" :style="{
                backgroundColor:item.backgroundColor,
                backgroundImage:'url('+item.priceUrl+')',
            }">
             <a :href="item.href">
                 {{item.name}}
             </a>
         </li>
     </ul>
  </div>
</template>

<script>

export default {
  name: 'serve',
  data () {
    return {
     serves:[]
    }
  },
  created () {
    this.getContent()
  },
  methods: {
    getContent:function(){
      this.$http.get('../../../static/serve.json').then(res => {
        console.log(res.body)
        this.serves=res.body;
      })
    }
  }
}
</script>
<style lang="less" scoped>
    .serve{
        width: 100%;
        padding-bottom: 0.5rem;
        .serve-ul{
            width: 90%;
            margin:auto;
            margin-top:0.2rem;
            li{
                margin-bottom: 0.2rem;
                height: 1.2rem;
                line-height: 1.2rem;
                border-radius: 0.02rem;
                text-indent: 1.3rem;
                background-repeat: no-repeat;
                background-position: 0.32rem center;
                background-size: 20%;
                a{
                    color: #fff;
                    display: block;
                    font-size: 0.2rem;
                }
            }
        }
    }

</style>
