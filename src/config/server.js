//USER ACCESS
export async function getProducts() {
	try {
		const products = await JSON.parse(
			window.localStorage.getItem('dataAllProducts')
		);
		return products;
	} catch (err) {
		console.log('ERR_CONFIG GET PRODUCTS:', err);
	}
}

export async function getProduct(id) {
	try {
		const products = await JSON.parse(
			window.localStorage.getItem('dataAllProducts')
		);
		let product = null;
		products.forEach((prod) => {
			if (prod.id === id) {
				product = prod;
			}
		});
		return product;
	} catch (err) {
		console.log('ERR_CONFIG GET PRODUCT:', err);
	}
}

export async function registerUser(inputData) {
	try {
		const dataAllUser = await JSON.parse(
			window.localStorage.getItem('dataAllUsers')
		);
		dataAllUser.push(inputData);
		window.localStorage.setItem('dataAllUser', dataAllUser);
		return console.log('Register user success', inputData);
	} catch (err) {
		console.log('ERR_CONFIG REGISTER USER:', err);
	}
}

export async function loginUser(inputData) {
	try {
		const dataAllUser = await JSON.parse(
			window.localStorage.getItem('dataAllUsers')
		);
		const currentUser = await dataAllUser.forEach((user) =>
			user.email === inputData.email && user.password === inputData.password
				? user
				: function () {
						throw new Error(`No user email and password match`);
				  }
		);
		window.localStorage.setItem('currentUser', currentUser);
		return console.log('Login success', currentUser);
	} catch (err) {
		console.log('ERR_CONFIG LOGIN:', err);
	}
}
