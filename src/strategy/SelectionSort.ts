import {SortInterface} from "../interfaces/sort-interface";

export class SelectionSort implements SortInterface{
    sort(arr: number[]): number[] {
        console.log("selection sort :")
        let min;
        arr.forEach((item,index)=>{
            min = index

            for (let j = index + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            if (min !== index) {
                let temp = arr[index]
                arr[index] = arr[min]
                arr[min] = temp
            }
        })
        return arr;

    }
}