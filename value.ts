import { Expr } from "./ast";
import { Environment } from "./environment";


export type ValueType = "null" | "number" | "string" | "boolean" | "object" | "native-function";


export interface RuntimeVal {
    type: ValueType,
    
}

export interface NullValue extends RuntimeVal {
    type: "null",
    value: null
}

export interface BooleanVal extends RuntimeVal {
    type: "boolean"
    value: true | false
}

export interface NumValue extends RuntimeVal {
    type: "number",
    value: number
}

export interface IdentValue extends RuntimeVal {
    type: "string",
    value: string
}

export interface ObjectValue extends RuntimeVal {
    type: "object",
    properties: Map<string, RuntimeVal>;
}


export type FunctionCall = (args: RuntimeVal[], env: Environment) => RuntimeVal 

export interface NativeFunction extends RuntimeVal {
    type: "native-function",
    call: FunctionCall
}

export function MK_NTV_FUNCTION(b: FunctionCall): NativeFunction {
    return {type: "native-function", call: b};
}
export function MK_BOOL(b: boolean): BooleanVal {
    return {type: "boolean", value: b};
}