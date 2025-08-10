import 'dotenv/config'

import { test } from "@/test";

interface User {
    name: string;
    age: number;
}

const user: User = {
    name: 'John',
    age: 20,
};

console.log(process.env.A);
console.log('Hello World');
test();
