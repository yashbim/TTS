//Loading JSON data

fetch("services.json")
    .then(response => response.json())
    .then(services => {
        console.log(services)

        // const service1=services.product1
        // document.getElementById('product1name').textContent = service1.name;
        // document.getElementById('d1').textContent = service1.description;
})

.catch(error => console.error("Error loading data from json"));