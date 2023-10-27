//Loading JSON data

fetch("services.json")
    .then(response => response.json())
    .then(services => {
        console.log(services)

        // Item 1
        const service1=services.product1
        document.getElementById('product1name').textContent = service1.name;
        // Item 2
        const service2=services.product2
        document.getElementById('product2name').textContent = service2.name;
        // Item 3
        const service3=services.product3
        document.getElementById('product3name').textContent = service3.name;
        // Item 4
        const service4=services.product4
        document.getElementById('product4name').textContent = service4.name;
        // Item 5
        const service5=services.product5
        document.getElementById('product5name').textContent = service5.name;
        // Item 6
        const service6=services.product6
        document.getElementById('product6name').textContent = service6.name;
        // Item 7
        const service7=services.product7
        document.getElementById('product7name').textContent = service7.name;

        })

.catch(error => console.error("Error loading data from json"));