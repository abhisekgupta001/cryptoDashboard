async function fetchApiData(){
    const api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    loadCards(data)
} 

function loadCards(coins)
{
    coins.forEach(coin=>{
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                        <img src=${coin.image} alt=${coin.id}>
                        <div>
                            <div class="topRow">
                                <span>${coin.name}</span>
                                <span>${coin.current_price}</span>
                            </div>
                            <div class="bottomRow">
                                <span>${coin.symbol}</span>
                                <span class=${coin.market_cap_change_percentage_24h>0 ? "plus": "minus"}>${coin.market_cap_change_percentage_24h}%</span>
                            </div>
                        </div>
        `;
        const container = document.querySelector(".container");
        container.appendChild(card);
    })

}

fetchApiData();