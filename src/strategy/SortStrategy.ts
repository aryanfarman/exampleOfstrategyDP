import {SortInterface} from "../interfaces/sort-interface";

export class SortStrategy {
    private strategy : SortInterface
    constructor(strategy : SortInterface ) {
        this.strategy=strategy
    }

    setStrategy(strategy : SortInterface){
        this.strategy=strategy
    }
    sort(arr:number[]){
        return this.strategy.sort(arr)
    }

}