const NUM_IMAGES = 7; // 画像の数を7枚に減らします
const IMAGE_PATHS = [
    'illustration1.png',
    'illustration2.png',
    'illustration3.png',
    'illustration4.png',
    'illustration5.png',
    'illustration6.png',
    'illustration7.png'
];

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

function moveImage(img) {
    const newX = Math.random() * (windowWidth - 150);
    const newY = Math.random() * (windowHeight - 150);
    const rotate = Math.random() * 360;
    const speed = Math.random() * 5 + 5; // ランダムな速度 (5秒から10秒の間)
    img.style.transition = `transform ${speed}s linear`; // ランダムな速度を適用
    img.style.transform = `translate(${newX}px, ${newY}px) rotate(${rotate}deg)`;
}

for (let i = 0; i < NUM_IMAGES; i++) {
    const img = document.createElement('img');
    const randomIndex = Math.floor(Math.random() * IMAGE_PATHS.length);
    img.src = IMAGE_PATHS[randomIndex];
    img.classList.add('illustration');

    const x = Math.random() * (windowWidth - 150);
    const y = Math.random() * (windowHeight - 150);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    document.querySelector('.background').appendChild(img);

    moveImage(img);

    // 画像をランダムに動かし続ける
    setInterval(() => {
        moveImage(img);
    }, Math.random() * 5000 + 5000); // ランダムな間隔 (5秒から10秒の間)
}
