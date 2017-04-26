<template>

  <div class="article">
      
      <div class="article-content">
        <a :href="item.href" v-for="item in articles">
          <h3 class="article-content-h3">{{item.title}}</h3>
          <div class="article-content-dl">
           <img v-lazy="item.pricUrl" :alt="item.smalltitle">
           <p>{{item.smalltitle}}</p>
          </div>
          <div class="article-content-msg">
            <div class="article-content-msg-time">{{item.time}}</div>
            <div class="article-content-msg-name">
              <span>{{item.name}}</span>
              <span class="article-content-msg-s" :style="{
                      background:'url('+item.icon+') no-repeat',
                      backgroundSize: item.iconSize,
                      backgroundPosition: item.iconPosition
              }"></span>
            </div>
          </div>
          <div class="article-art">
            <span>
              <i class="fa fa-eye" :title="item.looks"></i>
              {{item.looks}}
            </span>
            <span>
              <i class="fa fa-heart-o" :title="item.like"></i>
              {{item.like}}
              </span>
            <span>
              <i class="fa fa-commenting-o" :title="item.comment"></i>
              {{item.comment}}
            </span>
          </div>
          </a>
      </div>
  </div>
  
</template>

<script>

export default {
  name: 'article',
  data () {
    return {
     articles:[]
    }
  },
  created () {
    this.getContent()
  },
  methods: {
    getContent:function(){
      this.$http.get('../../../static/article.json').then(res => {
        this.articles=res.body;
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .article{
       width:100%;
        font-size: 0.12rem;
        margin-bottom: 0.1rem;
        z-index: 100;
        padding-bottom: 0.1rem;
        .article-content{
          width: 100%;
           box-sizing:border-box;
           padding:0.2rem;
          a{
            width: 100%;
            display: block;
            background:#fff;
            color:#333;
            margin-bottom: 0.2rem;
            .article-content-h3{
              font-size: 0.18rem;
              padding:0.1rem;
            }
            .article-content-dl{
              padding: 0.1rem;
              width: 100%;
              display: -webkit-box;
              -webkit-box-align: center;
              font-size: 0.14rem;
              img{
              
                    width: 120px;
                    height: 80px;
                    display:block;
                    margin-right: 8px;
               
              }
              p{
               
                -webkit-box-flex:1;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
                font-size: 0.16rem;
              }
            
            }
            .article-content-msg{
              width: 100%;
              padding:0rem 0.1rem;
              color:#b3b3b3;
              font-size: 0.16rem;
              overflow: hidden;
              .article-content-msg-time{
                float:right;
              }
              .article-content-msg-name{
                float: left;
                .article-content-msg-s{
                   display: inline-block;
                        vertical-align: middle;
                        width:0.16rem;
                        height:0.16rem;
                }
              }
            }
            .article-art{
              width: 100%;
              padding: 0.1rem;
              background: #f8f8f8;
              display: -webkit-box;
              -webkit-box-align:center;
              -webkit-box-pack:center;
              span{
                display:block;
                text-align:center;
                -webkit-box-flex:1;
                font-size:0.14rem;
              }
            }
          }
        }
  }
</style>
