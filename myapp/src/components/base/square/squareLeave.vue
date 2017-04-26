<template>
  <div class="squareLeave ">
      <a :href="item.href" class="squareLeave-section" v-for="item in leaves"> 
			<div class="squareLeave-section-c">
				<img v-lazy="item.src" alt="item.name">
				<div class="squareLeave-content-d">
                    <p class="squareLeave-content-name">{{item.name}}
                        <span class="squareLeave-content-title" :style="{
                            background:'url('+item.icon+') no-repeat',
                            backgroundSize: item.iconSize,
                            backgroundPosition: item.iconPosition
                        }"></span>
                    </p>
                    <p class="squareLeave-content-title">{{item.title}}</p>				
                </div>
		    </div>
			<div class="squareLeave-article">
				<span>作品 <strong>{{item.production}}</strong></span>
        <span>受喜欢 <strong>{{item.like}}</strong></span>
        <span>粉丝 <strong>{{item.fans}}</strong></span>
			</div>
	    </a>
  </div>
</template>
<script>
export default {
  name: 'squareLeave',
  data () {
    return {
      leaves:[]
    }
  },
  created () {
    this.getContent()
  },
  methods: {
    getContent:function(){
      this.$http.get('../../../static/leave.json').then(res => {
        this.leaves=res.body;
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .squareLeave{
      width: 100%;
      font-size: 0.12rem;
      padding: 0rem 0.2rem;
      .squareLeave-section{
          width: 100%;
          padding:0.1rem 0rem;
          display: block;
          .squareLeave-section-c{
              width: 100%;
              display:-webkit-box;
              -webkit-box-align:center;
              -webkit-box-pack:center;
              background:#fff;
              padding: 0.1rem;
              img{
                  width: 0.8rem;
                    height: 0.8rem;
                    margin-right: 8px;
                    border-radius: 50%;
              }
              .squareLeave-content-d{
                  -webkit-box-flex:1;
                  p{
                        font-size:0.18rem;
                        color:#333;
                        padding:0.05rem 0rem; 
                        span{
                            display: inline-block;
                            vertical-align: middle;
                            width:0.16rem;
                            height:0.16rem;
                        }
                  }
                  .squareLeave-content-title{
                      font-size:0.14rem;
                  }
              }
          }
          .squareLeave-article{
              width: 100%;
              padding: 0.05rem 0rem;
              display: -webkit-box;
              -webkit-box-align:center;
              -webkit-box-pack:center;
              background: #f8f8f8;
              span{
                display:block;
                -webkit-box-flex:1;
                text-align:center;
                color:#b3b3b3;
                font-size:0.14rem;
              }
          }
      }
  }
      
</style>
