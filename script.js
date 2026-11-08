
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

const content = document.querySelector('.content');

yesBtn.addEventListener('click', () => {
    content.innerHTML = `
        <p class="subtitle">INVITATION ACCEPTED</p>

        <h1>
            Отлично.<br>
            <span>Я так и знала.</span>
        </h1>

        <p class="description">
            Твоё присутствие официально забронировано
            на вечер 22 ноября.
        </p>

        <div class="success-info">
            <p>НЕОБХОДИМОЕ ОТ ТЕБЯ</p>
            <h2>Только твоё присутствие.</h2>
            <p>Дресс-код: быть собой.</p>
            <p>Остальное — сюрприз.</p>
        </div>

        <p class="final-message">
            P.S. Голодным ты точно не останешься.
        </p>

        <button id="secretBtn" class="secret-btn">
            А что, если это ещё не всё?
        </button>
    `;

    document.querySelector('.buttons')?.remove();

    document.getElementById('secretBtn')
        .addEventListener('click', showSecret);
});

function showSecret() {
    content.innerHTML = `
        <p class="subtitle">ONE LAST THING...</p>

        <h1>
            И ещё кое-что.<br>
            <span>Необязательное.</span>
        </h1>

        <p class="description">
            После вечера можешь никуда не торопиться.
            Я буду только рада, если ты останешься.
        </p>

        <div class="success-info">
            <h2>Без спешки (кроме того, что тебе утром на работу:))</h2>
            <p>Только мы и немного времени вдвоём.</p>
        </div>

        <p class="final-message">
            Теперь точно всё. Целую.
        </p>
    `;
}

noBtn.addEventListener('mouseenter', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;

    noBtn.style.position = 'fixed';
    noBtn.style.left = Math.max(15, Math.random() * maxX) + 'px';
    noBtn.style.top = Math.max(15, Math.random() * maxY) + 'px';
});
