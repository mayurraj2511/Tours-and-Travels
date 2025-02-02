function loadDestintions() {
    document.getElementById("destinations").innerHTML = '';

    let products = [
        { "name" : "Manali Trip" , "image" : "assets/images/image-6.png"  },
        { "name" : "Shimla Kulumanali" , "image" : "assets/images/image-7.png" },
        { "name" : "Manali Kasol" , "image" : "assets/images/image-8.png" },
        { "name" : "Manali Trip" , "image" : "assets/images/image-6.png"  },
        { "name" : "Shimla Kulumanali" , "image" : "assets/images/image-7.png" },
        { "name" : "Manali Kasol" , "image" : "assets/images/image-8.png" },
    ];


    products.map( item => {
        document.getElementById("destinations").innerHTML += `
         <div class="img_cont_box">
                    <img src="${item.image}" class="destination_pics" alt="destination pics">
                    <h6 class="header_of_destination">${item.name}</h6>
                </div>
        `
    });

}

function loadServices() {
    document.getElementById("services").innerHTML = '';

    let products = [
        {"name" : "Bus Arrange" , "img" : "assets/images/bus.png" , "para" : "Travel together in comfort and style with our reliable bus rental services! Perfect for group tours, events, and family trips—book now for a seamless journey!"},
        {"name" : "Bike Rent" , "img" : "assets/images/scooter.png" , "para" : "Discover the freedom of the open road with our easy and affordable bike rentals! Choose from a range of well-maintained bikes for every adventure. Book now and ride your way to unforgettable moments!"},
        {"name" : "Hotel Book" , "img" : "assets/images/hotel.png" , "para" : "Find your perfect stay with unbeatable rates and exceptional comfort! Book your dream hotel now for a memorable and hassle-free getaway!"},
        {"name" : "Private Taxi" , "img" : "assets/images/taxi.png" , "para" : "Experience convenience and comfort with our private taxi bookings! Your ride, your schedule—book now for a smooth and stress-free journey!"},
        {"name" : "Tour Guide" , "img" : "assets/images/guide_baba.png" , "para" : "Unlock the secrets of each destination with our knowledgeable and friendly tour guides! Join us for unforgettable stories, insider tips, and a truly immersive experience!"},
        {"name" : "River Rafting" , "img" : "assets/images/rafting.png" , "para" : "Feel the thrill of the rapids and the beauty of nature with our unforgettable river rafting adventures! Book now for an adrenaline-pumping experience on the water!"}
    ];

    products.map( item => {
        document.getElementById("services").innerHTML += `
             <div class="service_box">
                    <div class="inner">
                        <img src="${item.img}" alt="services pics" class="services_small_pics">
                        <span class="services_span">${item.name}</span>
                    </div>
                    <p class="services_para">${item.para}</p>
                </div>
        `
    });
}