let str: string = "bruce"
let str1: string;
str1 = "bruce2"

let num: number = 1000
let boo: boolean = true
let n: null = null
let un: undefined = undefined

let test: any = true

let arr: string[] = ['a', 'b']
let arr2: string[][] = [['aa', 'bb']]

let tuple: [number, string, boolean] = [1, 'a', true]
let tuple2: [string, string][] = [['a', 'b']]

enum LiveStatus {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1
}

const staus = LiveStatus.SUCCESS
console.log(staus);

let aaa: number | string;
aaa = 1000
aaa = 'str'

type A = number | string
type B = boolean | string

let a1: A
a1 = 999
a1 = 'str'

let b1: B
b1  = true

interface User {
    name: string;
    age: number;
}

type Card = {
    name: string
    desc: string
}

interface Card2 {
    name: string
    desc: string
}

interface Card2 {
    age?: number
}

const obj: Card2 = {
    name: 'bruce',
    desc: '....',
}

function hello (a: string, b: string) {
    return a + b
}

function hello2 (a: string, b: string): number {
    console.log(a, b);
    return 999
}

function hello3 (a: number, b: boolean, c: string) {
    return 100
}

function test2 (a: number) {
    console.log(a);
}

function hello4 (name: string, age?: number) {
    if (age === undefined) return -1
    test2(age)
    return
}

const func = () => {}
const func2 = () => {
    return 1
}
