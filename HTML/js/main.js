const poke_img = document.getElementById("poke");
const poke_imput=document.getElementById("poke-input")
const poke_btn = document.getElementById("poke-btn")
let pokemos = 'pikachu';
const buscar = (poke)=>{
    fetch("https://pro.openweathermap.org/data/2.5/forecast/climate?appid=c337c206016fef618b290d92288cd8a4")
    .then((res)=>{
        return res.json();
    }).then((rp)=>{
        console.log(rp);
        pokemon=rp;
        poke_img.src=rp.sprites.front_default;
        console.log(rp.sprites.front_default)
    })
}
