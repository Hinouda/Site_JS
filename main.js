function CreateAnime(nome, descricao, img, link){

    return `

    <a href="${link}" class="cards1" target="_blank">
    <ul>
        <li>
        <h2><strong> ${nome} </strong></h2>
        <p>Descrição</p>
        <h4> ${descricao}</h4>
        <main id = "BorderImg">
        
            <img src = "${img}">
            
        </main>
        </li>
    </ul>
    </a>
                
    `
}




document.querySelector('#app').innerHTML = 
`
<style type="text/css">
.cards1,.cards2,.cards3{
    color: #ff0000;
}
</style>
    
        <main id = "cards">
        
        ${CreateAnime(
            'Rakudai kishi' ,
            'Anime Prota fraco/op',
            'https://cdn.myanimelist.net/images/anime/9/76493.jpg',
            'https://myanimelist.net/anime/30296/Rakudai_Kishi_no_Cavalry?q=hakudai&cat=anime'
        )}
        ${CreateAnime( 
            'SAO', 
            'Roubado',
            'https://cdn.myanimelist.net/images/anime/1993/93837.jpg',
            'https://myanimelist.net/anime/36474/Sword_Art_Online__Alicization?q=swor&cat=anime'
        )}
        ${CreateAnime(
            'BangDream',
            'musica',
            'https://cdn.myanimelist.net/images/anime/1246/115689.jpg',
            'https://myanimelist.net/anime/41781/BanG_Dream_Movie__Episode_of_Roselia_-_II__Song_I_Am?q=roselia&cat=anime'
        )}
         ${CreateAnime(
            'Chainsaw Man',
            'PRota Prota',
            'https://cdn.myanimelist.net/r/160x220/images/anime/1806/126216.webp?s=df8704391a49a3de82e6e0d59a755f20',
            'https://myanimelist.net/anime/44511/Chainsaw_Man'
        )}

        ${CreateAnime(
            'Chainsaw Man',
            'PRota Prota',
            'https://cdn.myanimelist.net/r/160x220/images/anime/1806/126216.webp?s=df8704391a49a3de82e6e0d59a755f20',

        )}
       
        </main>
`
/*function musica(arq)
{
    var musicPath = new Audio("arq"); 
}*/
var musicPath = './song/lisa-crossing-field.mp3'
var music = new Audio(musicPath);

function mouse()
{
    music.play();
    music.loop =true;
    music.playbackRate = 1;
    music.volume =0.1;
}
function mouse1()
{
    music.pause();
}

const items = document.querySelectorAll(".cards1")
for (const item of items) {
    
    item.addEventListener("mouseover", function() {
        mouse()
    });
    item.addEventListener("mouseout", function() {
        mouse1()
    });
}


