angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {})


.controller('ChatsCtrl', function($scope, Chats, $ionicSideMenuDelegate) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.votedIcon=Chats.getStatus;
  
  $scope.posts = Chats.all();

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
//ratings module


})
.controller('testCtrl', function($scope) {
  
 
})
.controller('MyModal', function($scope, $ionicModal) {
  
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicModal, $ionicTabsDelegate, $ionicPlatform,Chats) {


  console.log($stateParams);
  $scope.post  = Chats.get($stateParams.cId);
  $scope.chairmen  = Chats.getCandidates($stateParams.cId);
  console.log( $scope.chairmen);
  $scope.shout=function(candidate){
    $ionicPlatform.registerBackButtonAction(function (event) {
      
      
   
    }, 100);  
   
    swal({
      title: candidate.name,
      text: "Selected the above candidate ?",
      imageUrl: candidate.face,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      animation: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'proceed',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then(function () {
      swal(
        'Success',
        ' chairman selected .',
        'success'
      )
    
      window.history.back();
     
    }, function (dismiss) {
      // dismiss can be 'cancel', 'overlay',
      // 'close', and 'timer'
      if (dismiss === 'cancel') {
        swal(
          'Cancelled',
          'select another person',
          'error'
        )
      }
    })
    
  }

 // console.log(chairmen);
 // star rating code



 //swiping code
 $scope.goForward = function () {
  var selected = $ionicTabsDelegate.selectedIndex();
  if (selected != -1) {
      $ionicTabsDelegate.select(selected + 1);
  }
}

$scope.goBack = function () {
  var selected = $ionicTabsDelegate.selectedIndex();
  if (selected != -1 && selected != 0) {
      $ionicTabsDelegate.select(selected - 1);
  }}

})
