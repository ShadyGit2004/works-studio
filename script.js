function locomotive(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    let toptobottom = document.querySelector("#accounts svg");

    toptobottom.addEventListener("click",()=>{
        scroll.scrollTo(10000)       
    })

    let backtoTop = document.querySelector("#back-to-top div");

    backtoTop.addEventListener("click",()=>{
        scroll.scrollTo(0)        
    })
}

function loaderAnimation(){
    let tl = gsap.timeline()
    tl.to("#yellow",{
        top: "-100vh",   
        delay: .2,
        duration: .9,
        ease: Expo.easeInOut
    });
    tl.to("#loader #vedio",{
        top: "-100vh",   
        duration: .9, 
        opacity: 0.8,     
        ease: Expo.easeInOut    
     })
  
    tl.to("#loader",{
        color: 'black',
        opacity: 0, 
        display: 'none',    
        delay: -.6,
        duration: .85,      
        ease: Expo.easeInOut
    })  
   
    

    let vedio = document.querySelector("#loader #vedio");

    let scrArr = ["assests/4_version1_200911_024106.mp4","assests/4_version1_200911_024121.mp4","assests/5_version2_200911_024123.mp4"];

    let randomNum = Math.floor(Math.random()*3);
    // console.log(scrArr[randomNum],randomNum)

    vedio.setAttribute("src",`${scrArr[randomNum]}`);
}

function rotatesvg(){  
    let svg = document.querySelector("#menuicon #computer");
    let links = document.querySelector("#links");
    let menu = document.querySelector("#menu");
    let childs = document.querySelectorAll("#links .child");

    svg.addEventListener("click",()=>{     
       svg.classList.toggle("rotate")

    //    links.style.width="80%";
       menu.classList.toggle("width")

       childs.forEach((child)=>{
       child.classList.toggle("forchild");
       })
      
})
}

function page2Animation(){
    let page2 = document.querySelector("#page2");
    let imgDiv = document.querySelectorAll("#page2 .texts");

    imgDiv.forEach((div)=>{
        div.addEventListener("mouseenter",(event)=>{
            // console.log(event.target.dataset.url)

            let url = event.target.dataset.url;
            page2.style.backgroundImage=`url(${url})`;

        })

        div.addEventListener("mouseleave",()=>{
            // console.log(event.target.dataset.url)

            page2.style.backgroundImage=`none`;

        })
    })
}

function mobileMenu(){
    let mobmenu= document.querySelector("#menuicon #mobile");
    let menupage = document.querySelector("#menu-page");

    mobmenu.addEventListener("click",()=>{
        mobmenu.classList.toggle("rotate");
        menupage.classList.toggle("pageanimation");
    })
}

loaderAnimation();
locomotive();
rotatesvg();
page2Animation();
mobileMenu();
