import "dotenv/config";
import {
	type InterfaceConfiguration,
	buildInterface,
} from "@interweave/interweave";

const mostWantedInterface: InterfaceConfiguration = {
	key: "most-wanted-interface",
	slug: "fbi-most-wanted",
	title: "FBI Most Wanted",
	fields: {
		uid: {
			schema: {
				type: "string",
			},
		},
		title: {
			schema: {
				type: "string",
			},
		},
		aliases: {
			schema: {
				type: "string",
				is_optional: true,
				is_array: true,
			},
		},
		subjects: {
			schema: {
				type: "string",
				is_array: true,
			},
		},
		warning_message: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		publication: {
			schema: {
				type: "datetime",
			},
		},
		details: {
			schema: {
				type: "string",
			},
		},
		description: {
			schema: {
				type: "string",
			},
		},
		age_min: {
			schema: {
				type: "number",
			},
		},
		age_max: {
			schema: {
				type: "number",
			},
		},
		age_range: {
			schema: {
				type: "string",
			},
		},
		reward_min: {
			schema: {
				type: "number",
			},
		},
		reward_max: {
			schema: {
				type: "number",
			},
		},
		reward_text: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		languages: {
			schema: {
				type: "string",
				is_optional: true,
				is_array: true,
			},
		},
		place_of_birth: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		race: {
			schema: {
				type: "string",
			},
		},
		race_raw: {
			schema: {
				type: "string",
			},
		},
		sex: {
			schema: {
				type: "string",
				enum: ["male", "female"],
			},
		},
		weight: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		weight_min: {
			schema: {
				type: "number",
				is_optional: true,
			},
		},
		weight_max: {
			schema: {
				type: "number",
				is_optional: true,
			},
		},
		height_min: {
			schema: {
				type: "number",
			},
		},
		height_max: {
			schema: {
				type: "number",
			},
		},
		possible_states: {
			schema: {
				type: "string",
				is_optional: true,
				is_array: true,
			},
		},
		hair: {
			schema: {
				type: "string",
			},
		},
		hair_raw: {
			schema: {
				type: "string",
			},
		},
		build: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		complexion: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		eyes: {
			schema: {
				type: "string",
			},
		},
		eyes_raw: {
			schema: {
				type: "string",
			},
		},
		caution: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		suspects: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		legat_names: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		scars_and_marks: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		url: {
			schema: {
				type: "string",
			},
		},
		additional_information: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		person_classification: {
			schema: {
				type: "string",
			},
		},
		nationality: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		files: {
			schema: {
				type: "object",
				is_array: true,
				object_schema: {
					name: {
						schema: {
							type: "string",
						},
					},
					url: {
						schema: {
							type: "string",
						},
					},
				},
			},
		},
		path: {
			schema: {
				type: "string",
			},
		},
		images: {
			schema: {
				type: "object",
				is_array: true,
				object_schema: {
					thumb: {
						schema: {
							type: "string",
						},
					},
					original: {
						schema: {
							type: "string",
						},
					},
					caption: {
						schema: {
							type: "string",
							is_optional: true,
						},
					},
					large: {
						schema: {
							type: "string",
						},
					},
				},
			},
		},
		ncic: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		remarks: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		status: {
			schema: {
				type: "string",
			},
		},
		occupations: {
			schema: {
				type: "string",
				is_optional: true,
				is_array: true,
			},
		},
		locations: {
			schema: {
				type: "string",
				is_optional: true,
			},
		},
		coordinates: {
			schema: {
				type: "string",
				is_array: true,
			},
		},
		modified: {
			schema: {
				type: "string",
			},
		},
		poster_classification: {
			schema: {
				type: "string",
			},
		},
		dates_of_birth_used: {
			schema: {
				type: "string",
				is_optional: true,
				is_array: true,
			},
		},
		"@id": {
			schema: {
				type: "string",
			},
		},
	},
	requests: {
		get: {
			uri: "https://api.fbi.gov/@wanted",
			http_method: "GET",
			data_path: "items",
		},
	},
	access: {
		privacy: "Public",
		default_permissions: ["All"],
	},
};

export const buildMostWantedInterface = () =>
	buildInterface(mostWantedInterface, {
		projectId: process.env.INTERWEAVE_PROJECT_ID as string,
		token: process.env.INTERWEAVE_TOKEN as string,
	});
