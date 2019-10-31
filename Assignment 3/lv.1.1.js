/*单词首字母变大写*/
var str="helle world";
function change(str){
    var arr=str.split("");
    arr[0]=arr[0].toUpperCase();

    for (let index = 0; index < arr.length; index++) {
        if(arr[index]==' '){
            arr[index+1]=arr[index+1].toUpperCase();
        } 
    }
    var b=arr.join('');
    return b;
}
console.log(change(str));