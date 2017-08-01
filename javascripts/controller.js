angular.module('controllermodule',[])
.directive('datadisplay',function()              
{
	
  //directive is used to render the collected data from expertec website by using the template autocomplete.html

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

  // this the only controller present in the page. This controller is responsible for collecting data 

  // using the factory Items and passing it on to the template.

 $scope.items=[]

 $scope.display=0;  //this variable is used to find out whether we have received a non empty list for the query parameter or not.

 //if the value of display is zero,then we will not be displaying the drop down bar.



  $scope.getsearchparameters=function()   
  {
  	
     //this function is being called by using keyup event in the html page.

  	 //console.log($scope.input);

  	 var x=$scope.input;

     var required_data=Itemslist.getdata(x);    //accessing service to get the required data.

     required_data.then(function(data, status, headers, config) {
			


			$scope.items=data.data.suggestion;

			$scope.items1=data.data.popular_products;
		
			//console.log(typeof($scope.items));
			//console.log(typeof($scope.items));
			//console.log($scope.items1);

			if(($scope.items).length!=0 || ($scope.items1).length !=0)     //checking for the case whether we have received some data or not
			{
				$scope.display=1;
			}
			else
			{
				$scope.display=0;
			}

			
			
		});
	required_data.catch(function(data, status, headers, config) {
            
			console.log("Failure function called");
		});	



  };



  //console.log($scope.input.searchterm)
 
});