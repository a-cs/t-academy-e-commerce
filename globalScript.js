var categories = []
var products = []
var cart = []

populateCategories()
populateProducts()
populateCart()

function populateCategories() {
	if (localStorage.getItem('eCommerce:categories')) {
		categories = JSON.parse(localStorage.getItem('eCommerce:categories'))
	} else {
		categories = [{ name: "Celular" }, { name: "Televisor" }, { name: "Notebook" }]
		localStorage.setItem('eCommerce:categories', JSON.stringify(categories))
	}
}

function populateProducts() {
	if (localStorage.getItem('eCommerce:products')) {
		products = JSON.parse(localStorage.getItem('eCommerce:products'))
	} else {
		id = 0;
		let categoryPrice = 0
		categories.map(c => {
			categoryPrice += 500
			for (let i = 1; i <= 10; i++) {
				let name = `${c.name} ${i}`
				let category = c.name
				let quantity = 100
				let price = categoryPrice + i*10
				product = { id, name, category, quantity, price }
				products.push(product)
				id++
			}
		})
		localStorage.setItem('eCommerce:products', JSON.stringify(products))
	}
}

function populateCart() {
	if (localStorage.getItem('eCommerce:cart')) {
		cart = JSON.parse(localStorage.getItem('eCommerce:cart'))
	}
}

function addToCart(id){
	const index = products.findIndex(product => product.id === id)
	const cartIndex = cart.findIndex(product => product.id === id)
	if(cartIndex >= 0){
		if(cart[cartIndex].stock < (cart[cartIndex].quantity + 1)){
			alert(`Não foi possível realizer a compra.\nA quantidade ${cart[cartIndex].quantity + 1} é maior que o estoque disponivel de ${cart[cartIndex].stock} unidades.`)
			return
		}
		cart[cartIndex].quantity += 1
	} else {
		const {name, category, price, quantity: stock} = products[index]
		let quantity = 1
		product = {id, name, category, price, quantity, stock}
		cart.push(product)
	}
	localStorage.setItem('eCommerce:cart', JSON.stringify(cart))
}