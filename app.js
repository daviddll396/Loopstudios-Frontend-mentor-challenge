window.addEventListener('scroll', function(){
    if (window.scrollY >150) {
        document.querySelector('.bg-none').style.opacity = 0.9;
        document.querySelector('.bg-none').style.backgroundColor = "black";
        
    }
    else{
        document.querySelector('.bg-none').style.backgroundColor = "transparent";

    }
});