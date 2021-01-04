window.addEventListener("scroll",function(){
    const header = document.getElementById("header");
    
    
    if(window.pageYOffset > 20)
    {
        header.classList.add('bg-black');
        header.style.height="60px";
    
    }else{
        header.classList.remove('bg-black');
        header.style.height="105px";

    }
});