<template >

<div id="wrapper">


  <div class="title"><slot name="artiletitle"></slot></div>
   <!-- <img :src="imgsrc"   alt=""> -->
  <div ><slot name="articlecontent"></slot></div>

</div>

</template>



<script>
export default{
  //  props:['imgsrc']
}
</script>


<style scoped>

/*img{
  max-width: 200px;
  margin: 15px;

}*/

.title{
  color: #7E6B5A;
  font-weight: bold;
  background: #EBDDB8;
  padding: 3px;
}

#wrapper{
    background: #FDF6DA;
    overflow: hidden;
}


</style>
