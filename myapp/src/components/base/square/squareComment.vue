<template>
  <div class="squareComment">
    <h2 class="squareComment-h2">热门评论</h2>
    <div class="squareComment-content">
        <ul class="squareComment-content-ul">
            <li v-for="item in comments">
                <a :href="item.href">
                    {{item.content}}
                </a>
                <p>
                    {{item.name}}
                    <span :style="{
                        background:'url('+item.icon+') no-repeat',
                        backgroundSize: item.iconSize,
                        backgroundPosition: item.iconPosition
                    }"></span>
                    <em>评论了：</em>
                    {{item.title}}
                </p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'squareLeave',
  data () {
    return {
      comments:[]
    }
  },
  created () {
    this.getContent()
  },
  methods: {
    getContent:function(){
      this.$http.get('../../../static/comment.json').then(res => {
        
        this.comments=res.body;
      })
    }
  }
}
</script>
<style lang="less" scoped>
    .squareComment{
        width:100%;
        font-size: 0.12rem;
        margin-bottom: 0.1rem;
        padding:0.2rem;
        box-sizing:border-box;
        .squareComment-h2{
            wdith:100%;
            padding:0.1rem 0rem;
            font-size:0.2rem;
            color:#808080;
        }
        .squareComment-content{
            width:100%;
            .squareComment-content-ul{
                width: 100%;
                li{
                   
                    margin-bottom: 0.2rem;
                    a{
                        color: #333;
                        line-height:0.2rem;
                        padding: 0.1rem;
                        background: #fff;
                        display:block;
                        font-size:0.14rem;
                    }
                    p{
                            line-height: 0.2rem;
                            overflow: hidden;
                            padding:0.1rem;
                            background: #f8f8f8;
                            font-size: 0.14rem;
                            color:#808080;
                            span{
                                 display: inline-block;
                                vertical-align: middle;
                                width:0.16rem;
                                height:0.16rem;
                            }
                            em{
                                    color: #b3b3b3;
                            }
                    }
                }
            }
        }
    }
      
</style>
