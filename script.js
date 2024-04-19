const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // เพิ่มรูปภาพเพิ่มเติมตรงนี้
];

function randomizeImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.getElementById('random-image').src = randomImage;
}
