angular.module('servicemodule',[])
.factory('Itemslist',['$http',function($http){

  var res={};

  res.getdata=function(obj)
  {
     //console.log("Entered here");  	
     var url="https://searchv5.expertrec.com/v4/suggestion/db778b01c2ef6f906dc3027f566e8482/?user=f5b7e9f9-378e-404d-893bv2-t15d50e71086-c2822b0adb0b&q="+obj+"&ssize=5&psize=4";
     console.log(url);
     return ($http.get(url));
  }

  return res;

}]);