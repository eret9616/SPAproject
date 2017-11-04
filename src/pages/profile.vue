<template>
<div >

 <h1 id="head">Profile</h1>

 <contenttemplate >

 <span slot = "artiletitle">Profile</span>

  <div class="content" slot = "articlecontent">


    <div class="header">
           <img :src="profileimg" alt="">
    </div>





   <div class="list">
    <li v-for="item in itemlist">{{item}}</li>
   </div>

  </div>

 </contenttemplate>

</div>
</template>


<script>
import contenttemplate from '../components/content-template'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default{

     data(){
       return {
        itemlist:["1998年結成、佐藤良成と佐野遊穂によるデュオ。",
       "2001年CDデビュー。",
       "2005年のシングル「おなじ話」が各地のFM局でパワープレイとなったのをきっかけに、東京を拠点としていた活動を全国へ広げる。",
       "2007年　映画『包帯クラブ』劇中音楽／舞台『砂利』劇中音楽",
       "2010年　サントリー・ニチレイアセロラCMソング「アセロラ体操のうた」",
       "2014年　「クーヨン」4月号（クレヨンハウス）表紙",
       "2016年　中国・上海にて初の海外単独公演",
       "2017年　TOKYO MX 他 アニメ『この素晴らしい世界に祝福を！"],
        profileimg:require("../assets/profile/boku.jpg")  
     }
     },
     components:{
        contenttemplate,swiper,swiperSlide
      }

}
</script>



<style scoped>


#head{
  padding-bottom: 15px;
}

.title>span{
  margin-left: 15px;
}

.list{
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 30px;
  margin-top: 15px;
    clear:both;
    line-height: 1.5;
    font-size: 15px;
}

.content{
  overflow: hidden;
}

.content .header img{
  display: block;
  margin:0 auto;
  padding: 15px;
  width: 90%;
 pointer-events: none;
}


</style>
