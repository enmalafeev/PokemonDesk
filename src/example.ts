
// simple type
export const concat = (string1: string, string2: string): string => string1 + string2;

// interface
type TsArr = (number | string | object);

interface MyHometaskInterface {
  [n: string]: string | Array<TsArr>
}

const MyHometask: MyHometaskInterface = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

//generic

interface MyArray<T> {
	[N: number]: T;

	reduce(fn: (prev: T, current: T, index: number, array: T[]) => T, initialValue?: T): T;
}

const arr1: MyArray<number> = [1, 2, 3, 4, 5];
const arr2: MyArray<string> = ['1', '2', '3', '4', '5'];

arr1.reduce((prev: number, cur: number) => prev + cur);
arr2.reduce((prev: string, cur: string) => prev + cur, '');

