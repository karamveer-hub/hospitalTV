let backbtn=document.querySelector(".backBtn")
backbtn?.addEventListener("click",()=>{
    history.back()
})

let heading=document.querySelector('#heading')
let banner=document.querySelector('.banner')
let allOptions=document.querySelectorAll('a')
let headingText=document.querySelectorAll('a p')

allOptions.forEach((item,index)=>{
    item.children[0].addEventListener("mouseover",()=>{
        console.log("over",item.children[2])
        heading.innerText=item.children[1].innerText
        banner.style.backgroundImage = `url(${item.children[3].src})`;
    })
})