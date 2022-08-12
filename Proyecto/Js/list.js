const list = document.getElementById("secList");

fetch("./JSON/data.json")
.then(response => response.json())
.then(draws => {
    draws.forEach(drawing => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h4>${drawing.name}</h4>
        <p>${drawing.id}</p>
        <p>${drawing.price}</p>
        <hr />
        `;
        list.append(li);
    });
})