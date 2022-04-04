fetch ("./dog/data.json")
.then(response => response.json())
.then(data => {
    for (const beer of data.cards) {
    document.getElementById('beersPage').insertAdjacentHTML("beforeend", `
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="./dog/imagesAndVideos/${beer.labelImg}" alt="" style="width:100%;height:100%;object-fit:cover">
            </div>
            <div class="flip-card-back">
                <img src="./dog/imagesAndVideos/${beer.img}.jpg" alt="" style="width:100%;height:100%;object-fit:contain">
                <h1>${beer.title}</h1> 
                <p>${beer.sub}</p> 
                <p>${beer.text}</p>
            </div>
        </div>
    </div>
`
    )}
})