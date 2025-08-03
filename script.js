const colors = document.querySelectorAll('.square'); 
const bod = document.querySelector('body');

colors.forEach(function(color) {
    color.addEventListener('click', function(e) {
        if (e.target.className === "square red") {
            bod.style.backgroundColor = "red";
        }
        if (e.target.className === "square blue") {
            bod.style.backgroundColor = "blue";
        }
        if (e.target.className === "square green") {
            bod.style.backgroundColor = "green";
        }
        if (e.target.className === "square yellow") {
            bod.style.backgroundColor = "yellow";
        }
        // Add more colors as needed
        // You can also use a switch statement or an object map for better scalability
    });
});

