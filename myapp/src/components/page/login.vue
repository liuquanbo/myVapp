<template>
  <div class="login">
    <div class="login-logo">
        <img src="../../../static/images/logo.png" alt="新片场">
    </div>
    <div class="login-title">
        展示个人作品，与<span>572,661</span>位创作人一起成长
    </div>
    <div class="login-form animated zoomIn">

        <div class="login-circle">

            <input type="text" placeholder="登入邮箱">
            
            <input type="password" placeholder="登入密码">

        </div>
        
         <div class="login-rem">

            <input type="checkbox" checked id="login-check" style="display:none;*display:inline;">
            <label for="login-check" class="login-check">记住我</label>
            <a href="javascript:;" class="login-forget">忘记密码</a>

        </div>
        <div class="login-btn" ref="btn">

            <span>登入</span>
            
        </div>
        <div class="login-line">
            <span class="left_line fl"></span>
            <i>Or</i>
            <span class="right_line fr"></span>
         </div>
         <ul class="login-art clearfix">
            <a href="http://www.xinpianchang.com/index.php?app=pubs&amp;ac=plugin&amp;plugin=weibo&amp;in=login">
             <li class="weibo">
                 <span></span>
                 <img src="../../../static/images/artbg.png">
            </li>
            </a>
            <a href="http://www.xinpianchang.com/index.php?app=pubs&amp;ac=plugin&amp;plugin=qq&amp;in=login">
             <li class="qq">
                 <span></span>
                 <img src="../../../static/images/artbg.png">
            </li>
            </a>
        </ul>
    </div> 
    <div class="login-enter">
        <router-link to="/" class="enter_btn" style="height: 55.7039px;">
          <img src="../../../static/images/enter.png" alt="" class="dn">
        </router-link>
    </div>
    <ul class="login-lis">
        <li>
            <a href="javascript:;">
                <img src="../../../static/images/lis1.png" alt="">
                <img src="../../../static/images/lis1-start.png" alt="" class="dn">
                <span>高清4k原画播放</span>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <img src="../../../static/images/lis2.png" alt="">
                <img src="../../../static/images/lis2-start.png" alt="" class="dn">
                <span>无片头广告</span>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <img src="../../../static/images/lis3.png" alt="">
                <img src="../../../static/images/lis3-start.png" alt="" class="dn">
                <span>无视频水印</span>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <img src="../../../static/images/lis4.png" alt="">
                <span>影视创作人的专属圈子</span>
            </a>
        </li>
    </ul>
    <div ref="mark" class="mark" style="display:none"></div>
    <div ref='pro' class="popover" style="display:none">
        <p></p>
        <span></span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
    }
  },
  mounted () {
      this.sform()
  },
  methods: {
       sform:function(){
           var that=this;
        this.$refs.btn.addEventListener('touchend',function(){
            var lis = document.querySelector(".login-circle"),
                inps = lis.querySelectorAll('input');
                console.log()
                if(!inps[0].value && inps[1].value){
                     
                    that.alet("邮箱不能为空");
                    
                }
                if(!inps[1].value && inps[0].value){
                    that.alet("密码不能为空");
                }
                if(inps[0].value && inps[1].value){
                    var emailreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    if(!emailreg.test(inps[0].value)){
                        that.alet("您输入的邮箱不正确");
                    }else{
                        
                        if(localStorage.length==0){
                            that.alet("Emaile不存在,你可能还没有注册哦");
                        }else{
                           location.href='http://localhost:8080';
                        }
                    }
                    
                    
                }
                if(!inps[0].value && !inps[1].value){
                    that.alet("请输入您的登入邮箱和密码后在登入")
                }
        })
    },
    alet:function(dat){
        var ndiv = this.$refs.pro,
            nmark = this.$refs.mark,
            np = ndiv.childNodes[0],
            nbtn = ndiv.childNodes[2];
            nbtn.innerHTML = "确定";
            np.innerHTML=dat;
            ndiv.className='popover animated bounceIn';
            ndiv.style.display="block";
            nmark.style.display="block";
            nbtn.addEventListener('touchend',function(){
                ndiv.style.display="none";
                nmark.style.display="none";
                np.innerHtml="";
                nbtn.innerHTML = "";
            })
    }
  }
}
</script>
<style lang="less" scoped>
    .login{
        width: 100%;
        position: absolute;
        top:0;
        z-index: 99999;
        left:0;
        padding: 0.2rem 0.15rem 0;
        box-sizing: border-box;
        overflow: hidden;
        color: #999;
        background: url(../../../static/images/loginbg.png) no-repeat center;
        background-size: cover;
        font-size: 0.12rem;
        .mark{
            width: 100%;
            height:100%;
            background:rgba(0,0,0,0.5);
            position:absolute;
            top:0;
            left:0;
        }
        .popover{
                width: 80%;
                background: #fff;
                border-radius: 0.06rem;
                position: fixed;
                transform: translate(-50%,-50%);
                top: 36%;
                left: 10%;
                -webkit-transform: translate(-50%,-50%);
                text-align:center;
                font-size: 0.18rem;
                text-shadow: 0.01rem 0rem 0.5rem #ccc;
            p{
                padding:0.2rem 0rem;
                box-sizing: border-box;
                border-bottom: 0.01rem solid rgb(205,205,205);
                color: #888;
            }
            span{
                width: 100%;
                padding:0.25rem 0.5rem;
                display: block;
                box-sizing: border-box;
                color: rgb(140,20,40);
            }
        }
        .login-logo{
            width: 35%;
            height:0.44rem;
            margin:0 auto;
            img{
                width: 100%;
                display: block;
            }
        }
        .login-title{
            color: #666;
            text-align: center;
            font-size: 0.15rem;
            margin: 0.16rem 0;
            letter-spacing:0.02rem;
            span{
                color: #4bf;
                font-weight: bold;
                padding: 0 0.02px;
            }
        }
        .login-form{
            width: 100%;
            padding: 0.45rem 0.23rem;
            background: rgba(0, 0, 0, 0.5);
            .login-circle{
                width: 100%;
                input{
                    width: 100%;
                    height: 0.45rem;
                    border-radius: 0.03rem;
                    border: none;
                    padding: 0.06rem 0.09rem;
                    margin-bottom: 0.15rem;
                    font-size: 0.16rem;
                    outline: none;
                    border: 0.01rem solid rgba(1,150,227,0);
                    color:#333;
                }
                input::-webkit-input-placeholder{
                    color: #ccc;
                    opacity:1;
                }
            }
            .login-rem{
                width: 100%;
                .login-check{
                        background: url('../../../static/images/right.png');
                        background-repeat: no-repeat;
                        margin-right: 0.2rem;
                        vertical-align: middle;
                        font-size: .16rem;
                        color: #fff;
                        cursor: pointer;
                        width: 1rem;
                        height: .18rem;
                        background-size: .18rem;
                        line-height: .18rem;
                        padding-left: .23rem;
                        display: inline-block;
                }
                .login-forget{
                        vertical-align: middle;
                        color: #3ebafa;
                        float: right;
                        vertical-align: middle;
                        font-size: 0.16rem;
                }
                
            }
            .login-btn{
                        width: 100%;
                        height: .45rem;
                        background: #44bbff;
                        border-radius: .02rem;
                        margin-top: .23rem;
                        font-size: .16rem;
                        line-height: .45rem;
                        text-align: center;
                        color: #fff;
                        letter-spacing: .03rem;
                        cursor: pointer;
                        position: relative;
                }
                   .login-line{
                        margin-top: 40px;
                        text-align: center;
                        span{
                                width: 42%;
                                border-bottom: 1px solid rgba(255,255,255,0.3);
                        }
                        i{
                                font-style: normal;
                                color: #fff;
                                font-size: 15px;
                                position: relative;
                                top: -10px;
                        }
                        .fl{
                            float: left;
                        }
                        .fr{
                            float: right;
                        }
                }
                .login-art{
                    width: 100%;
                    margin-top: -7px;
                    text-align: center;
                    display: -webkit-box;
                    -webkit-box-pack:center;
                    -webkit-box-align:center;
                    a{
                        display: block;
                        -webkit-box-flex:1;
                       li{
                            width: 33.3%;
                            display: inline-block;
                            position: relative;
                            img{
                                width: 100%;
                                display: none;
                            }
                            span{
                               display: block;
                                background-size: 80%;
                                margin: 0 auto;
                                background-repeat: no-repeat;
                                margin-top: .1rem;
                            }
                            
                       } 
                       .qq span{
                            width: .35rem;
                            height: .3rem;
                            background-image: url('../../../static/images/qq.png');
                            margin-top: .11rem;
                        }
                        .weibo span{
                            width: .35rem;
                            height: .3rem;
                            background-image: url('../../../static/images/weibo.png');
                            margin-top: .11rem;
                        }
                    }
                }
        } 
        .login-enter{
            width: 100%;
            padding:0.4rem;
            a{
                display: block;
                width: 100%;
                img{
                    width:100%;
                }
            }
        }
        .login-lis{
        width: 100%;
           padding:0rem 0.8rem;
            a{
               padding:0.15rem 0rem;
                display:-webkit-box;
                -webkit-box-align:center;
                width:100%;
                color:#fff;
                font-size:0.16rem;
                span{
                    display: block;
                    margin-left:0.3rem;
                }
                img{
                    width: 0.5rem;
                   
                }
                .dn{
                    display: none;
                }
            }   
        }
        
    }
</style>
