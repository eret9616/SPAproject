<template>
  <div id="wrapper">

    <div class="header">

      <span class="nav">
         |<router-link title="PROFILE" to="/"> PROFILE </router-link>
         |<router-link title="DISCOGRAPHY" to="/discography"> DISCOGRAPHY </router-link>|
         <router-link title="LIVE" to="/live"> LIVE </router-link>|
      </span>

    </div>

     <div class="container">

       <keep-alive exclude="live">
           <router-view></router-view>
       </keep-alive>

                 <!-- <transition name="animate" mode="out-in"></transition > -->

     </div>


     <div class="footer">
     <span>©201710胡浩</span>
     </div>


   <audio style="display:none;" id="songpanel" controls="controls" src=""></audio>

  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  }
}
</script>

<style scoped>

.animate-enter-active {
  transition: .01s
}
.animate-leave-active {
  transition: .01s
}
.animate-enter
 {
  opacity: 0;
}

.animate-leave-to
{
  opacity: 0;
}


#wrapper{
  margin:0 auto;
  overflow: hidden;
}

.header{
  position: relative;
  min-height: 100px;
  min-width: 420px;
  background: #F7F4EF;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header a{
  text-decoration: none;
  color:#222;
}

.header .nav{
  margin-left: 50px;

}

.header .sign{
  margin-right: 50px;
}

.container{
   color: #333;
   margin: 0 30px;
   margin-top:30px;
   overflow: hidden;
}

.footer{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.nav :hover{
  color: #888;
}

</style>
