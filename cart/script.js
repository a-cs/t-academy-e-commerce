renderCartProducts()
console.log(cart)
function renderCartProducts() {
	let text = ""
	const currencyFormat = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
	cart.map((product,index) => {
		text += `
		<tr>
			<td scope="row">${product.id}</td>
			<td>${product.name}</td>
			<td>${product.category}</td>
			<td>${parseFloat(product.price.toFixed(2)).toLocaleString('pt-BR', currencyFormat)}</td>
			<td>${product.quantity}</td>
			<td>${parseFloat((product.price * product.quantity).toFixed(2)).toLocaleString('pt-BR', currencyFormat)}</td>
			<td>
				<button class="btn btn-outline-danger" onclick="removeFromCart(${index})">
				<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
						class="bi bi-cart-x-fill" viewBox="0 0 16 16">
						<path
							d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z" />
					</svg>
				</button>
			</td>
		</tr>
		`
	})
	document.getElementById("tableBodyCartProducts").innerHTML = text
	document.getElementById("totalCartProducts").innerHTML = cart.length
}