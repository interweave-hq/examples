import "dotenv/config";
import {
	type InterfaceConfiguration,
	buildInterface,
} from "@interweave/interweave";

const productsInterface: InterfaceConfiguration = {
	key: "products-interface",
	slug: "products",
	title: "Products",
	fields: {
		id: {
			schema: {
				type: "number",
			},
			interface: {
				form: {
					hidden: true,
					disabled: true,
				},
			},
		},
		title: {
			schema: {
				type: "string",
			},
		},
		description: {
			schema: {
				type: "string",
			},
		},
		price: {
			schema: {
				type: "number",
			},
		},
		discountPercentage: {
			schema: {
				type: "number",
			},
		},
		rating: {
			schema: {
				type: "number",
			},
		},
		stock: {
			schema: {
				type: "number",
			},
		},
		brand: {
			schema: {
				type: "string",
			},
		},
		category: {
			schema: {
				type: "string",
			},
		},
		thumbnail: {
			schema: {
				type: "string",
			},
		},
		images: {
			schema: {
				type: "string",
				is_array: true,
			},
		},
	},
	requests: {
		get: {
			uri: "https://dummyjson.com/products/category/<<parameters.category>>",
			http_method: "GET",
			data_path: "products",
			parameters: {
				category: {
					schema: {
						type: "string",
						dynamic_enum: {
							http_method: "GET",
							uri: "https://dummyjson.com/products/categories",
						},
					},
				},
			},
		},
		create: {
			uri: "https://dummyjson.com/products/add",
			http_method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data_path: "products",
		},
		update: {
			uri: "https://dummyjson.com/products/<<row.id>>",
			http_method: "PUT",
		},
		delete: {
			uri: "https://dummyjson.com/products/<<row.id>>",
			http_method: "DELETE",
		},
	},
	access: {
		privacy: "Public",
		default_permissions: ["All"],
	},
};

export const buildProductsInterface = () =>
	buildInterface(productsInterface, {
		projectId: process.env.INTERWEAVE_PROJECT_ID as string,
		token: process.env.INTERWEAVE_TOKEN as string,
	});
