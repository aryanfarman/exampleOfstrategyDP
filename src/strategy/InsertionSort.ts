import {SortInterface} from "../interfaces/sort-interface";

export class InsertionSort implements SortInterface{
    sort(arr: number[]): number[] {
        console.log("Insertion sort :")
        arr.forEach((item,index)=>{
            for(let j = index - 1; j > -1; j--){
                 if(arr[j + 1] < arr[j]){
                     let temp = arr[j+1]
                     arr[j+1]=arr[j]
                     arr[j]=temp
                 }
            }
        })
        return arr;
    }
}