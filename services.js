//  Loading JSON data for services page


fetch("services.json")
.then(response => response.json())
.then(services => {
    console.log(services)

    // Access service from json for prodcut name
    const productname1 = services.product1;
    const productname2 = services.product2;
    const productname3 = services.product3;

    // Access service from json for product description
    const service1 = services.product1;
    const service2 = services.product2;
    const service3 = services.product3;

    // Insert into html product name
    document.getElementById('product1name').textContent=productname1.name;
    document.getElementById('product2name').textContent=productname2.name;
    document.getElementById('product3name').textContent=productname3.name;

    // Insert into html product description

    document.getElementById('s1').textContent=service1.description;
    document.getElementById('s2').textContent=service2.description;
    document.getElementById('s3').textContent=service3.description;
})

.catch(error => console.error("Error fetching data from json"));