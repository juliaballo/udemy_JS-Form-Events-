const form = document.getElementsByTagName("FORM")[0];
const onSubmit = (event) => {
    const product = document.getElementById("product");
    const quantity = document.getElementById("qty");
    const list = document.getElementById("list");
    event.preventDefault();
    const listItem = document.createElement("li");
    listItem.innerHTML = `${quantity.value} ${product.value}`;
    list.appendChild(listItem);
    product.value = "";
    quantity.value = "";
}
form.addEventListener('submit', onSubmit);