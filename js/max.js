function getMax(arr){
	var max;
	max=arr[0];
	for(i in arr){
		if(max<arr[i]){
			max=arr[i];
		}
	}
	return max;
}


// 删除数组中的指定元素
function delVal(arr,val){
	var newArr=[];
	var j=0;
    for(i in arr){
    	if(arr[i]!=val){
           newArr[j]=arr[i];
           j++;
    	}

    }
    return newArr;
}

// 删除重复元素
function delRepeat(arr){
	var newArr=[];
    for (var i = 0; i < arr.length; i++) {
            	var flag=true;
             	for (var j = 0; j < newArr.length; j++) {
             		if(arr[i]==newArr[j]){
             			flag=false;
             			break;
             		}
             	}
             	if(flag){
                     newArr[newArr.length]=arr[i];
             	}
    }
    return newArr;
}

//给数组末尾添加数并返回长度
function push(){
	var arrs=arguments[0];
   for(i=1;i<arguments.length;i++){
       arrs[arrs.length]=arguments[i];
   }
   document.write(arrs+"<br>");
   return arrs.length;
}

//前面加
function qian(){
	var newArr=[];
	var arrs=arguments[0];
   for(i=1;i<arguments.length;i++){
       newArr[newArr.length]=arguments[i];
   }
   for(j=0;j<arrs.length;j++){
   	  newArr[newArr.length]=arrs[j];
   }
   document.write(newArr+"<br>");
   return newArr.length;
}

function unshift(){
	var oldVal=[];
	var arrs=arguments[0];
	for(i in arrs){
		oldVal[oldVal.length]=arrs[i];
	}
	arrs.length=0;
	for(j=1;j<arguments.length;j++){
       arrs[arrs.length]=arguments[j];
   }
   for (var k = 0; k < oldVal.length; k++) {
   	arrs[arrs.length]=oldVal[k];
   }
   document.write(arrs+"<br>");
   return arrs.length;
}
// 删除末尾值并返回删除值

function del(arr){
	var newArr=[];
    for(i=0;i<arr.length;i++){
        newArr[newArr.length]=arr[i];
    }
    arr.length=0;
    for(j=0;j<newArr.length-1;j++){
    	arr[arr.length]=newArr[j];
    }
    document.write(arr+"<br>");
    return newArr[newArr.length-1];
}


function delEnd(arr){
    var a=arr[arr.length-1];
    arr.length=arr.length-1;
    return a;
}
//删除首个元素
function delqian(arr){
	var newArr=[];
    for(i=0;i<arr.length;i++){
        newArr[newArr.length]=arr[i];
    }
    arr.length=0;
    for(j=1;j<newArr.length;j++){
    	arr[arr.length]=newArr[j];
    }
    document.write(arr+"<br>");
    return newArr[0];
}

//排序
 function up(arr){
            if(arr instanceof Array){
              var temp;
              for(var i=0;i<=arr.length;i++){
                    for(var j=i+1;j<=arr.length;j++){
                          if(arr[i]>arr[j]){
                            temp=arr[i];
                            arr[i]=arr[j];
                            arr[j]=temp;
                          }

                       }                
              }
              return arr;
              }
         }


function down(arr){
            if(arr instanceof Array){
              var temp;
              for(var i=0;i<=arr.length;i++){
                    for(var j=i+1;j<=arr.length;j++){
                          if(arr[i]<arr[j]){
                            temp=arr[i];
                            arr[i]=arr[j];
                            arr[j]=temp;
                          }

                       }                
              }
              return arr;
              }
         }

function delIndex(arr,index){
  var newArr=[];
  for(i in arr){
    arr.index=i
    if(arr.index!=index){
       newArr.push(arr[i]);
    }
  }
  return newArr;
}