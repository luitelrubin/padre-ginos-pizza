const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NPR",
});

export default function Cart({ cart, checkout }) {
  let total = 0;
  for (let i = 0; i < cart.length; ++i) {
    const current = cart[i];
    total += current.pizza.sizes[current.size];
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="type">{item.pizza.name}</span>—
            <span className="size">{item.size}</span>—
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {intl.format(total)}</p>
      <button type="submit" onClick={checkout}>
        Check out
      </button>
    </div>
  );
}
