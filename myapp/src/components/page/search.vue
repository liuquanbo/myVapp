<template>
  <div class="search">
    <header class="header">
		<div class="wrap pr">
			<router-link to="/" class="logo inbm" id="logo">
                 <img src="../../assets/logo.png" height="32px" alt="新片场logo">
            </router-link>
			<router-link to="login"  class="wrap-news inbm" id="wrap-news">				
               <img class="unlogin-img" src="../../assets/searchtop.png" alt="">
            </router-link >
			<div class="search inbm" id="search-box">
                <form class="index-search" method="get" id="search-form" action="http://www.xinpianchang.com/index.php">
                    <div class="search-input">
                            <input type="hidden" name="app" value="search">
                            <input type="text" name="kw" id="search-input" value="" ref='input' @click="scrollW"> 
                            <input type="submit" value="搜索" style="display:none;" id="search_btn">
                            <a href="javascript:;" class="search-btn" id="xma_search"></a>
                    </div>
                </form>
			</div>
	    </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
        
    }
  },
  methods: {
      scrollW:function(){
       this.$refs.input.className="inputw"
      }
  }
}
</script>
<style lang="less" scoped>
    .header {
        width: 100%;
        background-color: #333;
        border-bottom: 2px solid #ff3823;
        padding-top: 8px;
        padding-bottom: 8px;
        font-size: 0.12rem;
        .wrap {
            position: relative;
            width: 100%;
            height: 32px;
            .logo {
                float: left;
                padding-left: 6px;
            }
            .inbm {
                display: inline-block;
                zoom: 1;
                vertical-align: middle;
              
            }
            #wrap-news .unlogin-img {
                    width: 25px;
                    height: 25px;
                    display: block;
            }
            .wrap-news {
                width: 25px;
                height: 25px;
                float: right;
                margin-right: 10px;
                margin-top: 4px;
            }
            .search {
                position: relative;
                width: 120px;
                margin-left: 15px;
                margin-right: 10px;
                float: right;
                form {
                    width: 100%;
                     input[type="text"] {
                        -webkit-box-sizing: border-box;
                        -moz-box-sizing: border-box;
                        box-sizing: border-box;
                        width: 100%;
                        border: 1px solid #4d4d4d;
                        background: #4d4d4d;
                        padding: 7px 40px 7px 8px;
                        border-radius: 30px;
                        color: #fff;
                        -webkit-appearance: none;
                        outline: none;
                    }
                    .inputw{
                       -webkit-animation: widths .3s forwards ;
                    }
                    @-webkit-keyframes widths {
                       
                        from{
                            width: 1.2rem;
                            transform: translateX(0px);
                        }
                         to{
                            width: 2rem;
                             transform: translateX(-70px);
                        }
                    }
                }
               
                .search-btn {
                    position: absolute;
                    display: block;
                    right: 5%;
                    top: 7px;
                    width: 20px;
                    height: 20px;
                    background: url("../../assets/search-mobile.png") no-repeat center;
                    background-size: contain;
                }
            }
        }
    }   
</style>
