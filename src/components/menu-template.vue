<template >

<div id="wrapper">

  <div class="title"><slot name="menutitle"></slot></div>

  <div class="con" ><slot name="menucontent"></slot></div>

</div>
</template>



<script>

</script>


<style scoped>

.title{
  color: #41403C;
  font-weight: bold;
  background: #D3B875;
  padding: 3px;
  padding-left: 15px;
}


.con{
  background: #D9D4B4;
  margin-top: 8px;
}

#wrapper{
}

</style>
