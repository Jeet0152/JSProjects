const result = document.getElementById("result_display")

const imageShow =(imagesrc)=>{

    result.innerHTML = `
        <img src="images/${imagesrc}.jpg" alt="">
    `
}