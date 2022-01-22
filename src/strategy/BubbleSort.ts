import {SortInterface} from "../interfaces/sort-interface";

export class BubbleSort implements SortInterface{
    sort(arr: number[]): number[] {
        console.log("bubble sort :")
        arr.forEach((item,index) => {
            for(let j=0;j<arr.length-index-1;j++){
                if(arr[j] > arr[j+1]){
                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j+1] = temp
                }
            }
        })

        return arr
    }
}