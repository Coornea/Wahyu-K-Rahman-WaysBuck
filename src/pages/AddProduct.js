import React from 'react';
import AddDataProduct from '../components/Product/AddDataProduct';

function AddProduct() {
	function handleSubmit(e, formData) {
		e.preventDefault();
		console.log(formData);
	}
	return (
		<div>
			<AddDataProduct suffix='Product' handleSubmit={handleSubmit} />
		</div>
	);
}

export default AddProduct;
