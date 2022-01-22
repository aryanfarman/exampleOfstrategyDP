import {SortStrategy} from "./strategy/SortStrategy";
import {BubbleSort} from "./strategy/BubbleSort";
import {InsertionSort} from "./strategy/InsertionSort";
import {SelectionSort} from "./strategy/SelectionSort";

const context = new SortStrategy(new BubbleSort())

let result = context.sort([5,3,2,4,1,15,10,2,1,8])
console.log(result)
context.setStrategy(new InsertionSort())
result=context.sort([3,2,4,1,15,10,2,1,8])
console.log(result)
context.setStrategy(new SelectionSort())
result = context.sort([8,3,2,4,1,15,10,2,1,8])
console.log(result)
