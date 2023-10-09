import "dotenv/config";

import { buildProductsInterface } from "./products";
import { buildTriviaInterface } from "./trivia";
import { buildBreweriesInterface } from "./breweries";
import { buildMostWantedInterface } from "./most-wanted";

buildProductsInterface();
buildTriviaInterface();
buildBreweriesInterface();
buildMostWantedInterface();
