<template>
  <div id="app">
		<search-bar></search-bar>
    <nav-bar></nav-bar>
		<transition name="fade">
    	<router-view></router-view>
		</transition>
    <div class="loading-box" v-show="loadingShow">
					<div class="loading-css3">
								<div>
									<i class="fa fa-spinner fa-spin"></i>
								</div>
					</div>
				</div>
  </div>
</template>

<script>
import navBar from "@/components/page/nav";
import searchBar from "@/components/page/search";
export default {
  name: 'app',
  computed: {
		loadingShow:function(){
			return this.$store.state.loadingShow
		}
	},
  components: {
    navBar,
    searchBar
  }
}
</script>

<style lang="less">
@import "./assets/reset.css";
@import "./assets/animate.css";
@import "./lib/font-awesome-4.7.0/css/font-awesome.min.css";
body,html{
  font-size: 100px;
  overflow-x: hidden;
  background: #f2f2f2;

}
a{
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}
@media screen and (min-width: 413px) {
	body,html{
			font-size: 120.4px;
	}
}
@media screen and (min-width: 319px) {
	body,html{
			font-size: 95.3px;
	}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
@media screen and (min-width: 413px) {
	body,html{
			font-size: 120.4px;
	}
}
@media screen and (min-width: 319px) {
	body,html{
			font-size: 95.3px;
	}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.top{
            position: fixed;
            right:0.1rem;
            bottom:1rem;
            
            li{
                img{
                    width:0.3rem;
                }
            }
    }
  .loading-box{
	position:fixed;
	z-index:1000;
	bottom:0;
	left:0;
	width:100%;
	height:100%;
	background:transparent;
	font-size:0.2rem;

}
.loading-css3{
	position:fixed;
	width: 0.85rem;
	height: 0.7rem;
	text-align: center;
	top:50%;
	left:50%;
	margin-left: -0.4rem;
	margin-top: -0.35rem;
	border-radius:.1rem;
	z-index:1001;
	color:#fff;
	background:rgba(0, 0, 0, 0.7);
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-box-align:center;
	-webkit-box-pack:center;
	line-height: 0.25rem;
	i{
		font-size:0.3rem;
	}
	p{
		font-size: 0.12rem;
	}

}
.loading-box .loader{
	-webkit-animation:loading 1.1s infinite linear;
	animation:loading 1.1s infinite linear;
	text-indent:-9999em;
	border-top:.3em solid hsla(0,0%,100%,.2);
	border-right:.3em solid hsla(0,0%,100%,.2);
	border-bottom:.3em solid hsla(0,0%,100%,.2);
	border-left:.3em solid #fff;
}
.loading-box .loader,.loading-box .loader:after{
	width:0.5em;
	height:0.5em;
	margin:0 auto .125rem;
	border-radius:50%;
}
@-webkit-keyframes loading{
	0%{
		-webkit-transform:rotate(0deg);
		transform:rotate(0deg)
	}
	to{
		-webkit-transform:rotate(1turn);
		transform:rotate(1turn)
	}
}
@keyframes loading{
	0%{
		-webkit-transform:rotate(0deg);
		transform:rotate(0deg)
	}
	to{
		-webkit-transform:rotate(1turn);
		transform:rotate(1turn)
	}
}
</style>
