import { GetColorsQuery } from "#gql";
import { TypeFromQuery } from "~~/helper/typeFromArray";
7;
export type ColorType = {
    colors: string
}

export const useColors = () => {
	return new ColorService();
};

export class ColorService{
    constructor() {
        
    }
    public async getAll(){
        let colors = await GqlGetColors();

        return colors.palettes.map(e => {
            let colors: ColorType[] = e.colors;
            return {
                title: e.title,
                colors
            }
        })
    }
}