/*冒泡排序*/
var arr=[5,10,45,58,1,26,22,11];
function maopao(arr){
    for(let b = 0; b < arr.length; b++){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>arr[i+1]){
            var a=arr[i+1];
            arr[i+1]=arr[i];
            arr[i]=a;
        }
        }
    }
    return arr;
}
console.log(maopao(arr));