import "dotenv/config";
import {
	type InterfaceConfiguration,
	buildInterface,
} from "@interweave/interweave";
import { statesArray } from "../helpers";

const breweryTypes = [
	{ value: "micro", label: "micro - Most craft breweries" },
	{
		value: "nano",
		label: "nano - A regional location of an expanded brewery",
	},
	{
		value: "regional",
		label: "regional - A regional location of an expanded brewery",
	},
	{
		value: "brewpub",
		label: "brewpub - A beer-focused restaurant or restaurant/bar with a brewery on-premise",
	},
	{
		value: "large",
		label: "large - A very large brewery. Likely not for visitors",
	},
	{
		value: "planning",
		label: "planning - A brewery in planning or not yet opened to the public",
	},
	{
		value: "bar",
		label: "bar - A bar. No brewery equipment on premise. (deprecated)",
	},
	{
		value: "contract",
		label: "contract - A brewery that uses another brewery’s equipment.",
	},
	{
		value: "proprietor",
		label: "proprietor - Similar to contract brewing but refers more to a brewery incubator",
	},
	{
		value: "closed",
		label: "closed - A location which has been closed.",
	},
];

const breweriesInterface: InterfaceConfiguration = {
	key: "breweries-interface",
	slug: "breweries",
	title: "Breweries",
	fields: {
		id: {
			schema: {
				type: "string",
			},
			interface: {
				form: {
					hidden: true,
					disabled: true,
				},
			},
		},
		name: {
			schema: {
				type: "string",
			},
		},
		brewery_type: {
			schema: {
				type: "string",
				enum: breweryTypes,
			},
		},
		address_1: {
			schema: {
				type: "string",
			},
		},
		address_2: {
			schema: {
				type: "string",
				is_optional: true,
			},
			interface: {
				table: {
					hidden: true,
				},
			},
		},
		address_3: {
			schema: {
				type: "string",
				is_optional: true,
			},
			interface: {
				table: {
					hidden: true,
				},
			},
		},
		city: {
			schema: {
				type: "string",
			},
		},
		state_province: {
			schema: {
				type: "string",
				enum: statesArray,
			},
		},
		postal_code: {
			schema: {
				type: "string",
			},
		},
		country: {
			schema: {
				type: "string",
			},
		},
		longitude: {
			schema: {
				type: "string",
			},
		},
		latitude: {
			schema: {
				type: "string",
			},
		},
		phone: {
			schema: {
				type: "string",
			},
			validation: {
				is_phone: true,
			},
		},
		website_url: {
			schema: {
				type: "string",
			},
		},
		state: {
			schema: {
				type: "string",
			},
		},
		street: {
			schema: {
				type: "string",
			},
		},
	},
	requests: {
		get: {
			uri: "https://api.openbrewerydb.org/v1/breweries?per_page=<<parameters.per_page>>",
			http_method: "GET",
			parameters: {
				per_page: {
					schema: {
						type: "number",
						default_value: 10,
					},
					interface: {
						form: {
							label: "Number of results",
						},
					},
				},
				by_city: {
					schema: {
						type: "string",
						is_optional: true,
					},
					interface: {
						form: {
							label: "City",
							placeholder: "Austin",
						},
					},
				},
				by_state: {
					schema: {
						type: "string",
						is_optional: true,
						enum: statesArray,
					},
					interface: {
						form: {
							label: "State",
						},
					},
				},
				by_name: {
					schema: {
						type: "string",
						is_optional: true,
					},
					interface: {
						form: {
							label: "Brewery Name",
							placeholder: "Samuel Adams",
						},
					},
				},
				by_type: {
					schema: {
						type: "string",
						is_optional: true,
						enum: breweryTypes,
					},
					interface: {
						form: {
							label: "Brewery Type",
						},
					},
				},
			},
		},
	},
	access: {
		privacy: "Public",
		default_permissions: ["Read"],
	},
};

export const buildBreweriesInterface = () =>
	buildInterface(breweriesInterface, {
		projectId: process.env.INTERWEAVE_PROJECT_ID as string,
		token: process.env.INTERWEAVE_TOKEN as string,
	});
