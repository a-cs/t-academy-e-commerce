renderCartProducts()
function renderCartProducts() {
	let text = ""
	const currencyFormat = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
	cart.map((product,index) => {
		text += `
		<tr>
			<td class="col-2" scope="row">${product.id}</td>
			<td class="col-2">${product.name}</td>
			<td class="col-2">${product.category}</td>
			<td class="col-2">${parseFloat(product.price.toFixed(2)).toLocaleString('pt-BR', currencyFormat)}</td>
			<td class="col-2"> <input type="number" min="1" max="${product.stock}" step="1" id="item${index}" class="form-control" onChange="changeCartItem(${index})" value="${product.quantity}" /></td>
			<td class="col-2">${parseFloat((product.price * product.quantity).toFixed(2)).toLocaleString('pt-BR', currencyFormat)}</td>
			<td class="col-2">
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
	const totalPrice = cart.reduce((acc, product) => acc + (product.quantity * product.price), 0)
	document.getElementById("totalPrice").innerHTML = parseFloat(totalPrice.toFixed(2)).toLocaleString('pt-BR', currencyFormat)
}

function removeFromCart(index){
	cart.splice(index, 1);
	localStorage.setItem('eCommerce:cart', JSON.stringify(cart))
	renderCartProducts()
}

function changeCartItem(index){
	newQty = Number(document.getElementById(`item${index}`).value)
	if(newQty > cart[index].stock){
		alert(`Valor invalido.\nA quantidade ${newQty} é maior que o estoque disponivel de Estoque disponivel: ${cart[index].stock} unidades. `)
		document.getElementById(`item${index}`).focus()
		return
	}
	cart[index].quantity = newQty
	localStorage.setItem('eCommerce:cart', JSON.stringify(cart))
	renderCartProducts()
}