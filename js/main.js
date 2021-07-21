window.onload = () => {
  let card_items = document.querySelectorAll(".card-item");
  let total_Element = document.getElementById("total");
  const total = () => parseFloat(total_Element.innerText.replace("$", " "));

  const numberOperation = (number, price, operation) => {
    let value = 0;
    switch (operation) {
      case "+":
        value = parseInt(number.innerText) + 1;
        total_Element.innerText = (total() + price).toFixed(2)
        break;

      case "-":
        value = parseInt(number.innerText) - 1;
        total_Element.innerText = (total() - price).toFixed(2);
        break;

      default:
        throw new Exception("invalid Operation");
    }

    return value >= 0 ? value : 0;
  };

  card_items.forEach((item) => {
    let quantity = item.querySelector(".quantity");
    let plus = quantity.children[2];
    let number = quantity.children[1];
    let minus = quantity.children[0];
    let unit_price = parseFloat(
      item.querySelector(".unit-price").innerText.replace("$", "")
    );

    plus.onclick = () => {
      number.innerText = numberOperation(number, unit_price, "+");
      
    };

    minus.onclick = () => {
      number.innerText = numberOperation(number, unit_price, "-");
    };
  });
};
