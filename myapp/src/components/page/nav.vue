<template>
  <div class="nav" ref="navbar">
      <div ref="nav">
        <ul class="nav-ul" ref="ul">
            <li>
                <router-link to="/" active-class="navLi" exact>广场</router-link>
            </li>
             <li>
                <router-link to="production" active-class="navLi">作品</router-link>
            </li>
             <li>
                <router-link to="article" active-class="navLi">文章</router-link>
            </li>
             <li>
                <router-link to="composer" active-class="navLi">创作人</router-link>
            </li>
            <li>
                <router-link to="serve" active-class="navLi" >服务</router-link>
            </li>
        </ul>
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
  name: 'nav',
  data () {
    return {
        scroll:''
    }
  },
  mounted () {
     this.inits(),
     this.onscrollt();
  },
  methods: {
      inits:function(){
         
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.nav, {
               scrollX:true,
               click:true
            })
            
          }else{
              this.scroll.refresh()
          }
      },
      onscrollt:function(){
            var that=this;
            var navbar=that.$refs.navbar;
            var body=document.getElementsByTagName("body")[0];
            var newd=document.createElement('div');
            newd.style.height="0.44rem";
            newd.style.width="100%";
            newd.className='nav';
            navbar.onclick=function(){
                  navbar.children[0].style.position='static';
                    navbar.children[0].style.top="auto";
                    navbar.children[0].style.height="0.44rem";
                    navbar.children[0].style.background="none";
                    navbar.children[0].style['border-bottom']='none'
                    body.scrollTop=0;
            }
              
            body.addEventListener("touchmove",function(){
               
                 if(this.scrollTop>50){
                    navbar.children[0].style.position='fixed';
                    navbar.children[0].style.top="0px";
                    navbar.children[0].style.height="0.44rem";
                    navbar.children[0].style.background="#f2f2f2";
                    navbar.children[0].style['border-bottom']='3px solid #e6e6e6'
                    navbar.children[0].className='animated slideInDown';
                 }else{
                    navbar.children[0].style.position='static';
                    navbar.children[0].style.top="auto";
                    navbar.children[0].style.height="0.44rem";
                    navbar.children[0].style.background="none";
                    navbar.children[0].style['border-bottom']='none'
                    navbar.children[0].className='none';
                 }
            })
            body.addEventListener("touchend",function(){
               
                 if(this.scrollTop>50){
                    navbar.children[0].style.position='fixed';
                    navbar.children[0].style.top="0px";
                    navbar.children[0].style.height="0.44rem";
                    navbar.children[0].style.background="#f2f2f2";
                    navbar.children[0].style['border-bottom']='3px solid #e6e6e6'
                    navbar.children[0].className='animated slideInDown';
                 }else{
                    navbar.children[0].style.position='static';
                    navbar.children[0].style.top="auto";
                    navbar.children[0].style.height="0.44rem";
                    navbar.children[0].style.background="none";
                    navbar.children[0].style['border-bottom']='none'
                    navbar.children[0].className='none';
                 }
            })
      }
  }
}
</script>
<style lang="less">
    .nav{
        width: 100%;
        height: 0.44rem;
        position: relative;
        border-bottom: 3px solid #e6e6e6;
        box-sizing: border-box;
        font-size: 0.14rem;
        z-index: 200;
        .nav-ul{
           display: -webkit-box;
           width:5rem;
           z-index: 200;
            li{
                position: relative;
                height:0.44rem;
                padding: 0rem 0.1rem;
                white-space: nowrap;
                a{
                        color: #555;
                        display: inline-block;
                        padding: 8px 20px 8px;
                        font-size: 18px;
                        font-family: "Microsoft YaHei",SimHei,helvetica,arial,verdana,tahoma,sans-serif;
                }
            }
            
                .navLi{
                        border-bottom: 3px solid #06a7e1;
                        color: #3399e0;
                       
                      
                }
            
        }
    }
</style>
