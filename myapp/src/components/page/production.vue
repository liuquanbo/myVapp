<template>

  <div class="production">
      <production-content></production-content>
  </div>
  
</template>

<script>
import productionContent from "@/components/base/production/productionContent"
export default {
  name: 'production',
  data () {
    return {
     
    }
  },
  components: {
    productionContent
  }
}
</script>
<style lang="less" scoped>
.production{
  padding-bottom: 0.1rem;
}
 
</style>
