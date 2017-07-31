angular.module('controllermodule',[])
.directive('datadisplay',function()
{
	console.log("Enterd here");
	return {

		scope:{
			res:'=',
			res1:'='
		},

		templateUrl : 'autocomplete.html'
	};

})
.controller('searchcontroller',function($scope,Itemslist)
{

  //console.log("search controller called");

 //alert($(window).width());

 $scope.items=[]



  $scope.getsearchparameters=function()
  {
  	

  	 console.log($scope.input);

  	 var x=$scope.input;

     var required_data=Itemslist.getdata(x);

     required_data.then(function(data, status, headers, config) {
			


			$scope.items=data.data.suggestion;

			$scope.items1=data.data.popular_products;
		
			console.log($scope.items);
			//console.log(typeof($scope.items));
			console.log($scope.items1);
			
		});
	required_data.catch(function(data, status, headers, config) {
            
			console.log("Failure function called");
		});	



  };



  //console.log($scope.input.searchterm)
 
});