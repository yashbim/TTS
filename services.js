//  Loading JSON data for services page

fetch('services.json')

    .then(response => response.json())
    .then(services => {
        console.log(services)

        // Access service from json for prodcut name
        const productname1 = services.product1;
        const productname2 = services.product2;
        const productname3 = services.product3;
        const productname4 = services.product4;
        const productname5 = services.product5;
        const productname6 = services.product6;
        const productname7 = services.product7;

        // Access service from json for product description
        const service1 = services.product1;
        const service2 = services.product2;
        const service3 = services.product3;
        const service4 = services.product4;
        const service5 = services.product5;
        const service6 = services.product6;
        const service7 = services.product7;

        // Insert into html product name
        document.getElementById('h1').textContent=productname1.name;
        document.getElementById('h2').textContent=productname2.name;
        document.getElementById('h3').textContent=productname3.name;
        document.getElementById('h4').textContent=productname4.name;
        document.getElementById('h5').textContent=productname5.name;
        document.getElementById('h6').textContent=productname6.name;
        document.getElementById('h7').textContent=productname7.name;

        // Insert into html product description

        document.getElementById('d1').textContent=service1.description;
        document.getElementById('d2').textContent=service2.description;
        document.getElementById('d3').textContent=service3.description;
        document.getElementById('d4').textContent=service4.description;
        document.getElementById('d5').textContent=service5.description;
        document.getElementById('d6').textContent=service6.description;
        document.getElementById('d7').textContent=service7.description;



    })

.catch(error => console.error("Error fetching data from json"));