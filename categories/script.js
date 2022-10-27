
populateCategoriesSelector()

function populateCategoriesSelector() {
	let selectContent = '<option value="none" selected disabled hidden>Selecione a Categoria dos Produtos</option>'
	categories.map((category) => {
		selectContent += `
		<option value="${category.name}">${category.name}</option>
		`
	})
	document.getElementById("categoriesSelector").innerHTML = selectContent
}

function renderSelectedCategory() {
	const selectedCategory = document.getElementById("categoriesSelector").value
	let filteredProducts = []
	if(selectedCategory != "none"){
		filteredProducts = products.filter(product => product.category == selectedCategory)
	}

	let text = ""
	const currencyFormat = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
	filteredProducts.map(product => {
		text += `
		<tr>
			<td scope="row">${product.id}</td>
			<td>${product.name}</td>
			<td>${product.category}</td>
			<td>${product.quantity}</td>
			<td>${parseFloat(product.price.toFixed(2)).toLocaleString('pt-BR', currencyFormat)}</td>
			<td>
				<button class="btn btn-outline-primary" onclick="addToCart(${product.id})">
				<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
						class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
						<path
							d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
					</svg>
				</button>
			</td>
		</tr>
		`
	})
	document.getElementById("tableBodyProductsByCategory").innerHTML = text
	document.getElementById("totalProductsByCategory").innerHTML = filteredProducts.length
}