declare module 'zufall' {

    // I don't want to import the mongodb types just for this.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    type ObjectID = any;
    interface DbRef {
      collection: string;
      id: ObjectID;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    type VALUE_TYPE = 'string' | 'integer' | 'number' | 'NaN' | 'null' | 'undefined' | 'boolean';
    // eslint-disable-next-line @typescript-eslint/naming-convention
    type OBJECT_TYPE = 'Array' | 'Object';
    // eslint-disable-next-line @typescript-eslint/naming-convention
    type TYPE = VALUE_TYPE | OBJECT_TYPE;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const VALUE_TYPES: VALUE_TYPE[];
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const OBJECT_TYPES: OBJECT_TYPE[];
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const TYPES: TYPE[];

    function typeOf (x: any): TYPE;
    function choose (choices: any[]): any;
    function chooseN (choices: any[], n: number): any[];
    // eslint-disable-next-line @typescript-eslint/naming-convention
    function chooseNReplace (choices: any[], n: number): any[];
    function isPrefixOf (path: any[], maybePrefix: any[]): boolean;
    function randomType (): string;
    function randomValueType (): string;
    function randomTypeExcept (ts: string): string;
    function randInt (n?: number): number;
    function randNum (n?: number): number;
    function randomBoolean (): boolean;
    function randomWord (len?: number): string;
    function randomValue (): any;
    function randomArray (n?: number): any[];
    function randomArrayOf (type: TYPE, n?: number): any[];
    function randomArrayBy (generatorFn: (generatedValues: any[]) => any, n?: number): any[];
    function randomObject (n?: number): object;
    function randomObjects (n?: number): object[];
    function randomObjectOf (type: TYPE, n?: number): object;
    function randomObjectOfTypes (types: TYPE[], n?: number): object;
    function randomObjectBy (generatorFn: (generatedObject: object) => any, n?: number, noEmpty?: boolean): object;
    function randomObjectWithDepth (depth: number, n?: number): object;
    function randomThing (): any;
    function randomThingOf (type: TYPE): any;
    function randomThingOfTypes (types: TYPE[]): any;
    function randomDbRef (): DbRef;
    function randomDbRefs (n?: number): DbRef[];
    function randomDocument (depth: number, n?: number, m?: number): object;

    export type {
      ObjectID,
      DbRef,
      VALUE_TYPE,
      OBJECT_TYPE,
      TYPE
    };

    export {
      typeOf,
      choose,
      chooseN,
      chooseNReplace,
      isPrefixOf,
      randomType,
      randomValueType,
      randomTypeExcept,
      randInt,
      randNum,
      randomBoolean,
      randomWord,
      randomValue,
      randomArray,
      randomArrayOf,
      randomArrayBy,
      randomObject,
      randomObjects,
      randomObjectOf,
      randomObjectOfTypes,
      randomObjectBy,
      randomObjectWithDepth,
      randomThing,
      randomThingOf,
      randomThingOfTypes,
      randomDbRef,
      randomDbRefs,
      randomDocument
    };
}
