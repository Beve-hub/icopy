const container = document.getElementById('cardContainer');
cardData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'col-md-4';
    cardElement.innerHTML = `
        <div class="card m-3 position-relative" style="width: 22rem; background-color: var(--color-back); color: white;  cursor:pointer; ">
            <div class="card-body">
                <span class="badge position-absolute top-0 start-0 m-2 " style="background-color: #D4FF27; color: #121212; transform: rotate(90deg); transform-origin: top left;">${card.pack}</span>
                <h5 class="card-title mt-4">${card.title}</h5>
                <h2 class="card-subtitle mb-2 fs-2" style="color: #D4FF27;">${card.amount}</h2>
                <ul class="list-group list-group-flush" style="background-color: transparent;">
                   ${card.offers.map(offer => `<li class="list-group-item" style="background-color: transparent; color: white;"><i class="bi bi-check" style="color: green;"></i> ${offer}</li>`).join('')} 
                </ul>
                <button style="background-color: #D4FF27; color: #121212; width:18rem; margin:10px 0 ">Fund</button>
            </div>
        </div>
    `;
    container.appendChild(cardElement);
});