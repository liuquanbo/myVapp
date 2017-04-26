<template>

  <div class="squareContent">
      <a class="square-a" :href="item.href" v-for="item in contents">
        <img class="square-i" v-lazy="item.src" :alt="item.title">
        <div class="square-d texthidden">{{item.title}}</div>
        <div class="square-d"  v-if="item.spanName">
          <span class="square-s">{{item.spanName}}</span>
          <span class="square-st" :style="{
            background:'url('+item.icon+') no-repeat',
            backgroundSize: '712px 1160px',
            backgroundPosition: '-177px -521px'
          }"></span>
        </div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'squareContent',
  data () {
    return {
      contents:[]
    }
  },
  created () {
    this.getContent()
  },
  methods: {
    getContent:function(){
      this.$http.get('../../../static/square.json').then(res => {
       
        this.contents=res.body;
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .squareContent{
    width: 100%;
    font-size: 0.12rem;
    padding:0.2rem 0.2rem;
    box-sizing:border-box;
    .square-a{
      width: 100%;
      display: block;
      background:#fff;
      margin-bottom: 0.3rem;
      .square-i{
        width: 100%;
      }
      .square-d{
        width: 100%;
        padding: 0.01rem 0.1rem;
        font-size: 0.2rem;
        color:#333;
        .square-s{
          font-size: 0.14rem;
          color:#b3b3b3;
        }
        .square-st{
              display: inline-block;
              vertical-align: middle;
              width:0.16rem;
              height:0.16rem;
              
        }
      }
      .texthidden{
            white-space: nowrap;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
            overflow: hidden;
      }
    }
  }
</style>
