<template>
<div >

<h1>Live</h1>

<div class="swiperwrap">
  <swiper :options="swiperOption" ref="mySwiper">
  <!-- slides -->
  <swiper-slide>  <img :src="img[0]" alt=""></swiper-slide>
  <swiper-slide>  <img :src="img[1]" alt=""></swiper-slide>
  <swiper-slide>  <img :src="img[2]" alt=""></swiper-slide>
  <swiper-slide>  <img :src="img[3]" alt=""></swiper-slide>
  <swiper-slide>  <img :src="img[4]" alt=""></swiper-slide>
  <!-- Optional controls -->
  <div class="swiper-pagination"  slot="pagination"></div>
 </swiper>
</div>


  <div class="ticket">
     <a href="http://eplus.jp/humbert17/">Concert Ticket</a>
  </div>



</div>
</template>


<script>
export default{
  data(){

    return{


      img:[require("../assets/swipe/1.jpg"),
           require("../assets/swipe/2.jpg"),
           require("../assets/swipe/3.jpg"),
           require("../assets/swipe/4.jpg"),
           require("../assets/swipe/5.jpg")],

      swiperOption: {//swiper官网看api，链接http://www.swiper.com.cn/api/
         // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
         notNextTick: true,
         // swiper configs 所有的配置同swiper官方api配置
         autoplay: 3000,
         direction : 'horizontal',
         grabCursor : true,
         setWrapperSize :true,
         autoHeight: true,
         pagination : '.swiper-pagination',
         paginationClickable :true,
         prevButton:'null',//上一张
         nextButton:'null',//下一张
         mousewheelControl : false,
         autoplayDisableOnInteraction : false,
         observeParents:true,
         // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
         debugger: true},
         newsimg:require("../assets/news/top.jpg"),
         newslist:["http://eplus.jp/humbert17/",'123123','234234324324','234234324324','234234324324','234234324324'],
    }
  }
  }




</script>



<style>

 .swiperwrap img{
   width: 100%;
 }


.middle{
  overflow: hidden;
}


.info{
  overflow: hidden;
  width: 500px;
  margin: 0 auto;
  background: white;
  margin-top: 15px;
}

.info img{
  float: left;
}

.info ul{
  float: left; overflow: auto;  width: 380px;height: 100px;
}

.swiper-pagination-bullet-active{
  background:rgba(255,255,255,.4);
}

.ticket{

}


</style>
