import callsite from "callsites";
import * as path from "path";
import {readFileSync} from "fs";

export const inputFile = () => {
    const stack = callsite();
    const requester: any = stack[1].getFileName();
    const file = path.dirname(requester) + '/input.txt';
    return readFileSync(file, 'utf8');
}


