const fetchPokemon = () => {
    const Pokename = document.getElementById("Pokename");
    let pokeInput = Pokename.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            pokeImage("./Imagenes/error.png")
            pokeImageback("./Imagenes/Pokeerror.jpg")
            pokeTipo("--")
            pokeTipo1("--")
            pokeNombre("Error :C")
            pokeHp("--")
            pokeataque("--")
            pokedefensa("--")
            pokeaespecial("--")
            pokedespecial("--")
            pokevelocidad("--")
            Movimiento1("--")
            Movimiento2("--")
            Movimiento3("--")
            Movimiento4("--")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg); 
        let pokeImg1 = data.sprites.back_default;
        console.log(pokeImg1);
        pokeImageback(pokeImg1); 
        let pokeName = data.species.name;
        console.log(pokeName);
        pokeNombre(pokeName)
        let Hp = data.stats[0].base_stat;
        console.log(Hp)
        pokeHp(Hp);
        let Attack = data.stats[1].base_stat;
        console.log(Attack)
        pokeataque(Attack);
        let Defense = data.stats[2].base_stat;
        console.log(Defense)
        pokedefensa(Defense);
        let Aspecial = data.stats[3].base_stat;
        console.log(Aspecial)
        pokeaespecial(Aspecial)
        let Dspecial = data.stats[4].base_stat;
        console.log(Dspecial)
        pokedespecial(Dspecial);
        let Speed =data.stats[5].base_stat;
        console.log(Speed)
        pokevelocidad(Speed);
        let Move1 = data.moves[0].move.name
        console.log(Move1)
        Movimiento1(Move1)
        let Move2= data.moves[1].move.name
        console.log(Move2)
        Movimiento2(Move2)
        let Move3 = data.moves[2].move.name
        console.log(Move3)
        Movimiento3(Move3)
        let Move4 = data.moves[3].move.name
        console.log(Move4)
        Movimiento4(Move4)
        if (data.types.length == 2){
            let poketype = data.types[0].type.name;
            console.log(poketype);
            pokeTipo(poketype);
            let poketype1 = data.types[1].type.name;
            console.log(poketype1);
            pokeTipo1(poketype1);
        }
        else {
            let poketype = data.types[0].type.name;
          console.log(poketype);
            pokeTipo(poketype);
            pokeTipo1("----")
        }
    })
}

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
const pokeImageback = (url) =>{
    const pokeImg1 = document.getElementById("pokeImg1");
    pokeImg1.src = url;
}
const pokeNombre = (url) => {
    const pokeName = document.getElementById("pokeName")
    pokeName.innerHTML = (url);
}
const pokeHp = (url) => {
    const Hp = document.getElementById("Hp")
    Hp.innerHTML = (url)
}
const pokeataque = (url) => {
    const Attack = document.getElementById("Attack")
    Attack.innerHTML = (url)
}
const pokedefensa = (url) => {
    const Defense = document.getElementById("Defense")
    Defense.innerHTML = (url)
}
const pokeaespecial = (url) => {
    const Aspecial = document.getElementById("Aspecial")
    Aspecial.innerHTML = (url)
}
const pokedespecial = (url) => {
    const Dspecial = document.getElementById("Dspecial")
    Dspecial.innerHTML = (url)
}
const pokevelocidad = (url) => {
    const Speed = document.getElementById("Speed")
    Speed.innerHTML = (url)
}
const pokeTipo = (url) => {
    const poketype = document.getElementById("poketype")
    poketype.innerHTML = (url)
}
const pokeTipo1 = (url) => {
    const poketype1 = document.getElementById("poketype1")
    poketype1.innerHTML = (url)
}
const Movimiento1 = (url) => {
    const Move1 = document.getElementById("Move1")
    Move1.innerHTML = (url)
}
const Movimiento2 = (url) => {
    const Move2 = document.getElementById("Move2")
    Move2.innerHTML = (url)
}
const Movimiento3 = (url) => {
    const Move3 = document.getElementById("Move3")
    Move3.innerHTML = (url)
}
const Movimiento4 = (url) => {
    const Move4 = document.getElementById("Move4")
    Move4.innerHTML = (url)
} 