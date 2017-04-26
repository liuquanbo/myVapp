<template>

  <div class="production">
      <a :href="item.href" v-for="item in productionC" class="production-li">
			<img v-lazy="item.src" :alt="item.title">
			<div class="production-t overdot ">{{item.title}}</div>
			<div class="production-m">{{item.vtime}}</div>
			<div class="production-d">
				<span class="production-n cb3">{{item.spanName}}</span>
				<span class="production-s" :style="{
                    background:'url('+item.icon+') no-repeat',
                    backgroundSize: item.iconSize,
                    backgroundPosition: item.iconPosition
                }"></span>
				
			</div>
			<div class="production-b">
				<span>
                    <i class="fa fa-play-circle-o" title=""></i>
                    {{item.timesOfPlay}}
                </span>
                <span>
                    <i class="fa fa-heart-o" title=""></i>
                    {{item.like}}
                </span>
                <span>
                    <i class="fa fa-commenting-o" title=""></i>
                    {{item.comment}}
                </span>

			</div>
		</a>
  </div>
</template>

<script>

export default {
  name: 'production',
  data () {
    return {
        productionC:[]
    }
  },
  created () {
    this.getContent()
  },
  methods: {
    getContent:function(){
      this.$http.get('../../../static/production.json').then(res => {
      
        this.productionC=res.body;
      })
    }
  }
}
</script>
<style lang="less" scoped>
    .production{
        width:100%;
        font-size: 0.12rem;
        margin-bottom: 0.1rem;
        padding:0.2rem;
        box-sizing:border-box;
        z-index: 100;
        .production-li{
            display: block;
            width: 100%;
            position: relative;
            background: #fff;
            margin-bottom: 0.2rem;
            img{
                width:100%;
            }
            .production-t{
                width: 100%;
                padding: 0.04rem 0.1rem;
                font-size: 0.18rem;
                color:#333;
            }
            .production-m{
                    font-size: 12px;
                    color: #fff;
                    position: absolute;
                    right: 0;
                    top: 142px;
                    background-color: rgba(0,0,0,0.5);
                    padding: 0 2px;
            }
            .production-d{
                    margin-bottom: 4px;
                    position: relative;
                    .production-n{
                        display: inline-block;
                        vertical-align: middle;
                        line-height: 1.5em;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        -o-text-overflow: ellipsis;
                        overflow: hidden;
                        max-width: 190px;
                        margin: 0 2px 0 0.1rem;
                        font-size:0.16rem;
                    }
                    .production-s{
                        display: inline-block;
                        vertical-align: middle;
                        width:0.16rem;
                        height:0.16rem;
                    }
            }
            .overdot {
                white-space: nowrap;
                text-overflow: ellipsis;
                -o-text-overflow: ellipsis;
                overflow: hidden;
            }
            .cb3{
                color: #b3b3b3;
            }
            .production-b{
                width: 100%;
                padding: 0.1rem 0rem;
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
