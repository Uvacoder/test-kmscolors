import { GetColorsQuery } from "#gql";
import { TypeFromQuery } from "~~/helper/typeFromArray";
7;
export type ColorType = {
	colors: string;
};
type Palette = { title: string | null | undefined; colors: ColorType[] };
export const useColors = () => {
	return new ColorService();
};

export class ColorService {
	constructor() {}
	public mapAll(e: GetColorsQuery) {
		return e.palettes.map((e) => {
			let colors: ColorType[] = e.colors;
			return {
				title: e.title,
				colors,
			};
		});
	}
}
