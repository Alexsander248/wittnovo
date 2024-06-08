carrossel3 = document.querySelector(".carrossel2");

carrossel3.addEventListener("mouseover", ()=> {
    
    carrossel3.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
          carrossel3.scrollLeft -= 400;
        } else {
          carrossel3.scrollLeft += 400;
        }
      });
      
})