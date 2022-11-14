import { ColorFragment, GetColorsQuery } from "#gql";
import { TypeFromQuery } from "~~/helper/typeFromArray";
7;
export type ColorType = ColorFragment;

export const useColors = async () => {
	return new ColorService();
};

export class ColorService{
    constructor() {
        
    }
    public getAll(){

    }
}