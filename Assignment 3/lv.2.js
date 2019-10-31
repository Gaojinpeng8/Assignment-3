var arr=[[1,2],3,[4,[5,[6]],7]];
function even(arr){
    var b=[arr[0][0],arr[0][1],arr[1],arr[2][0],arr[2][1][0],arr[2][1][1][0],arr[2][2]];
    return b;
}
console.log(even(arr));