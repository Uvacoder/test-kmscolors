export type TypeFromQuery<ArrType> =
	ArrType extends readonly (infer ElementType)[] ? ElementType : never;
