var vm = new Vue({
    el: "#app",
    data: {
      keyword: "",
      cards: [
        {
          link:"https://up.tt98.com/25/pic/4c/e7/ff/4ce7ffe0dafe8616cb71b363ddc7f27b.jpg",
          title: "照片1" ,
          width: "100%" ,
          height: "100%" 
                
        },
        {
          link:"https://up.tt98.com/25/pic/c7/b5/2c/c7b52c5aa853db8d41e45d02a97e070b.jpg",
            title: "照片2",
            width: "100%" ,
          height: "100%" 
           

          },
          {
            link:"https://up.tt98.com/25/pic/87/c7/63/87c763d6d7db7684904dfa77eb8f41e6.jpg",
            title: "照片3",
            width: "100%" ,
          height: "100%" 
            
          },
          {
            link:"https://img.bizhizu.com/2017/0706/20170706023356739.jpg",
            title: "照片4",
            width: "100%" ,
          height: "100%" 
          } 
		],
    },
    
    mounted:function(){        
        swiper = new Swiper('.carousel', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination'
            }
        })     

        }
  });