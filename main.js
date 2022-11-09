function CreateAnime(nome, descricao, img){
    return `

        <main id = "card">
        <ul>
            <li>
         <h2><strong> ${nome}<strong></h2>
         <p>Descrição</p>
         <h4> ${descricao}</h4>
             <div class = "BorderImg">
             <img src = "${img}">
             </div>
         </main>
          </li>
        </ul>
    `
}

document.querySelector('#app').innerHTML = 
`
<header>
    
        <main id = "cards">
       
        ${CreateAnime(
        'rakudai kishi' ,
        'Anime Prota fraco/op',
        'https://cdn.myanimelist.net/images/anime/9/76493.jpg')}
        ${CreateAnime( 'SAO', 'Roubado','https://cdn.myanimelist.net/images/anime/1993/93837.jpg')}
        ${CreateAnime(' BangDream', 'musica','https://cdn.myanimelist.net/images/anime/1246/115689.jpg')}
       
        </main>
`