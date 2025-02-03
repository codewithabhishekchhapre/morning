var arr=[45,10,25,45,15];

var newarr=arr.map((value)=>{
     return value+5;
});
console.log(newarr);
// for(var i=0;i<arr.length;i++){
//      newarr[i]=arr[i]+5;

//      }

//      console.log(newarr);


arr.forEach((value)=>{
     console.log(value)
})