<template>
  <div class="left">
    <div >other-component</div>
    
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .left {
        width: 200px;
        float: left;
        background-color: #666;
    }
    
    .right {
        width: 400px;
        float: left;
        background-color: #999999;
    }
</style>