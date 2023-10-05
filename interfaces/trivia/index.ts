import "dotenv/config";
import {
	type InterfaceConfiguration,
	buildInterface,
} from "@interweave/interweave";

const triviaInterface: InterfaceConfiguration = {
	key: "trivia-interface",
	slug: "trivia",
	title: "Trivia",
	fields: {
		category: {
			schema: {
				type: "string",
			},
		},
		type: {
			schema: {
				type: "string",
			},
		},
		difficulty: {
			schema: {
				type: "string",
			},
		},
		question: {
			schema: {
				type: "string",
			},
		},
		correct_answer: {
			schema: {
				type: "number",
			},
		},
		incorrect_answers: {
			schema: {
				type: "string",
				is_array: true,
			},
		},
	},
	requests: {
		get: {
			uri: "https://opentdb.com/api.php?amount=<<parameters.amount>>",
			http_method: "GET",
			data_path: "results",
			parameters: {
				amount: {
					schema: {
						type: "number",
						default_value: 10,
					},
				},
				difficulty: {
					schema: {
						type: "string",
						is_optional: true,
						enum: [
							{ label: "Easy", value: "easy" },
							{ label: "Medium", value: "medium" },
							{ label: "Hard", value: "hard" },
						],
					},
				},
				type: {
					schema: {
						type: "string",
						is_optional: true,
						enum: [
							{ label: "Multiple Choice", value: "multiple" },
							{ label: "True / False", value: "boolean" },
						],
					},
				},
				category: {
					schema: {
						type: "number",
						is_optional: true,
						dynamic_enum: {
							http_method: "GET",
							uri: "https://opentdb.com/api_category.php",
							data_path: "trivia_categories",
							label_path: "name",
							value_path: "id",
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

export const buildTriviaInterface = () =>
	buildInterface(triviaInterface, {
		projectId: process.env.INTERWEAVE_PROJECT_ID as string,
		token: process.env.INTERWEAVE_TOKEN as string,
	});
