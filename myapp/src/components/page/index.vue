<template>

  <div class="index">
      <square-content></square-content>
        <h2 class="squareLeave-h2">推荐创作人</h2>  
      <square-leave></square-leave>
     <square-comment></square-comment>
  </div>
</template>

<script>
import squareContent from "@/components/base/square/squareContent"
import squareLeave from "@/components/base/square/squareLeave"
import squareComment from "@/components/base/square/squareComment"
export default {
  name: 'index',
  data () {
    return {
     
    }
  },
  components: {
    squareContent,
    squareLeave,
    squareComment
  }
}
</script>
<style lang="less" scoped>
.index{
    padding-bottom: 0.1rem;
}
.squareLeave-h2{
  margin-bottom: 0.1rem;
  color: #808080;
  font-size:0.2rem;
  margin-top:0.2rem;

}
</style>
