document.addEventListener('DOMContentLoaded', function() {

    const itemsForSale = [
        "../img/img-sale/cabbage.jpg",
        "../img/img-sale/russian.jpg",
        "../img/img-sale/meat.jpg",
        "../img/img-sale/gluten-free.jpg",
        "../img/img-sale/strawberry.jpg",
        "../img/img-sale/sweet-cheese.jpg"
    ];

    function addImages() {
        const list = document.getElementById('list-pierogi'); 

        itemsForSale.forEach(item => {
            const listItem = document.createElement('li'); 
            const img = document.createElement('img'); 

            img.src = item; 
            listItem.appendChild(img); 
            list.appendChild(listItem); 
        });
    }

    addImages();

    const images = document.querySelectorAll('#list-pierogi img');


    images.forEach(image => {
        image.addEventListener('click', function() {
            if (!image.classList.contains('added'))
            image.classList.add('added');
        });

        image.addEventListener('dblclick', function() {
            
            if (image.classList.contains('added')) {
                image.classList.remove('added');
            }
        });
    });

});














