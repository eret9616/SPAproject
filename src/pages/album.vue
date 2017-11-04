<template>
<div id="wrapper">


  <h1 id="head">Discography</h1>


  <div class="top">

      <menutemplate>
         <span slot="menutitle">Menu</span>
         <div class="menucontent" slot="menucontent">

              <li v-for="item in Menulist"  >
                <a @click="select($event)" :class="{select:false}" href="javascript:void(0)">{{item}}</a>
              </li>

         </div>
      </menutemplate>

  </div>


    <div class="bottom" >
     <div class="indicate">
           {{currenttitle}}
     </div>

      <div class="content" >

    <contenttemplate v-for="content in contentlist" v-show="content.show" >

          <span class="album-header" slot="artiletitle"  >{{content.title}}</span>

          <span slot="articlecontent">
          <img :src="content.img">

              <ol class="songlist">
              <li v-for="list in content.lists" >{{list.name}}<span class="songbtn" v-if="list.play" @click=play($event,list.song)>▸</span></li>
              </ol>
              <span class="album-content" >{{content.content}}</span>
         </span>

    </contenttemplate>

      </div>

  </div>

</div>
</template>


<script scoped>
import contenttemplate from '../components/content-template'
import menutemplate from '../components/menu-template'

export default{

    data(){
      return{
           profileimg :require( "../assets/profile/boku.jpg"),
           Menulist:["All","Single","Album","Other","DVD"],
           currenttitle:"All",
           contentlist:[
            { title:"DVD　「日比谷、夕暮れ。」",
              img:require("../assets/cover/onaji.jpg"),
              content:"DDBB-14006　￥3,700（税込）／￥3,426（税抜）2015.4.1発売",
              cls:"All DVD",
              show:1,
              lists:[
                {name:"鬼が来た",play:0},
                {name:"潮どき",play:0},
                {name:"ホンマツテントウ虫",play:0},
                {name:"大宴会",play:0},
                {name:"小舟",play:0},
                {name:"ぼくのお日さま",play:0}]
              },

            { title:"1th Album　「道はつづく」",
              img:require("../assets/cover/dao.jpg"),
              content:"MDCL-1475　￥3,150（税込価格）2006.08.30 発売",
              cls:"All Album",
              show:1,
              lists:[

                {name:"願い",play:0},
                {name:"林檎　[試聴]",play:1,song:require("../assets/audio/lin.mp3")},
                {name:"1時間",play:0},
                {name:"日が落ちるまで",play:0},
                {name:"虹　[試聴]",play:1,song:require("../assets/audio/niji.mp3")},
                {name:"この街",play:0}]
            },

            {title:"2th Single　「今晩はお月さん」",
             img:require("../assets/cover/jinwan.jpg"),
             content:"MDCS-1060　￥1,050（税込）2006.04.27 発売",
             cls:"All Single",
             show:1,
             lists:[
               {name:"今晩はお月さん",play:0},
               {name:"春一番",play:0},
               {name:"ライブの日",play:0}]
           },

             {
             title:"1th Single　「天井」",
             img:require("../assets/cover/tianjing.jpg"),
             content:`MDCS-1059　￥1,050（税込）2005.04.13 発売`,
             cls:"All Single"
             ,show:1,
             lists:[
               {name:"天井　[試聴]",play:1,song:require("../assets/audio/tenjo.mp3")},
               {name:"旅の終わり　[試聴]",play:1,song:require("../assets/audio/tabinoowari.mp3")},
               {name:"午睡（Single version）",play:0}]
           },

             { title:"3枚組BOX　「10年前のハンバートハンバート」",
               img:require("../assets/cover/shi.jpg"),
               content:"BNCL-40　￥3,000（税込）2009.10.21発売",
               cls:"All Other",
               show:1,
               lists:[
                 {name:"メッセージ [試聴]",play:1,song:require("../assets/audio/message.mp3")},
                 {name:"桜の木の下で [試聴] ",play:1,song:require("../assets/audio/sakura.mp3")},
                 {name:"アメリカの恋人 [試聴]",play:1,song:require("../assets/audio/amerikano.mp3")},
                 {name:"陽炎［LIVE 2006］",play:0},
                 {name:"生活の柄［LIVE 2006］",play:0}]
            },

             { title:"CD　くるり鶏びゅ～と",
               img:require("../assets/cover/ji.jpg"),
               content:"BNCL-40　￥3,000（税込）2009.10.21発売",
               cls:"All Other",
               show:1,
              lists:[
                {name:"春風／松任谷由実",play:0},
                {name:"宿はなし／二階堂和美",play:0},
                {name:"Old-fashioned／キセル",play:0},
                {name:"東京／世武裕子",play:0}],
             },
           ],
      }
    },
    components:{
       contenttemplate,
       menutemplate
    },
    methods:{

         clearUnderline(){

           var aAll = document.getElementsByClassName("menucontent")[0].getElementsByTagName("a");

           for(let index=0; index<aAll.length; index++)
           {
             aAll[index].removeAttribute("class");
           }

           },
         select(event){

            let Now =  event.target;
            this.currenttitle = Now.innerHTML;

            for(let i in this.contentlist)
            {
               this.contentlist[i].show = 0;
              if(this.contentlist[i].cls.includes(this.currenttitle) ) this.contentlist[i].show=1;
            }

            this.clearUnderline();
            Now.setAttribute("class","select");
            console.log(Now);

         },
         play(event,song){

            let audioplayer = document.getElementsByTagName("audio")[0];

              if(event.target.innerHTML=="┅")
              {
                 audioplayer.pause();
                 event.target.innerHTML="▸";
                 return;
              }
              else
              {

              var allbtn = document.getElementsByClassName("songbtn");
              for(let i=0;i<allbtn.length;i++)
              {allbtn[i].innerHTML = "▸" }

              if(!audioplayer.src.includes(song))
              {audioplayer.src= song;}

             new Promise ((resolve,reject)=>{if(audioplayer.play()) resolve()})
             .then(()=>{  event.target.innerHTML="┅"; });


              }
        }
    }


}
</script>


<style scoped>

    #head{
      padding-bottom: 15px;
    }

  .bottom{
     margin-top: 15px;
   }

  .bottom img{
    max-width: 200px;
    display: inline-block;
    padding: 15px;
  }

  .songlist{
    display: inline-block;
    position: absolute; margin-top: 40px;
    margin-left: 20px;
    font-size: 14px;
    line-height: 1.5;

  }

  #wrapper{
    overflow: hidden;
    position: relative;
  }

  .menucontent{
    padding: 15px;
    line-height: 1.7;
    display: flex;
  }

  .menucontent>*{
        display: inline;
        flex:1;
  }



  .select{
    text-decoration: underline;
  }

  .content{
    margin-top: 15px;
  }

  .content >div{
    margin-top: 15px;

  }

 li a{
   list-style-type:square;
   text-decoration: none;
   color: #333;
 }



 li a:hover {
   text-decoration: underline;
 }


 .indicate{
   background: #a79c88;
   padding: 3px;
   font-weight: bold;
 }

 .album-content{
   display: block;
   color:#333;
   font-size: 15px;
   margin-left: 15px;
   padding-bottom: 15px;
 }

 .album-header{
   margin-left: 15px;
   color: #7E6B5A;
 }

 .songbtn{
   margin-left:3px;
   font-size:15px;
 }


 .songbtn:hover{
     cursor: pointer;
   }

</style>
