(function () {
'use strict';

angular.module('data')
.controller("CategoriesController",CategoriesController);

CategoriesController.$inject=["list"];

function CategoriesController(list){
  var mainList=this;
  mainList.items=list;
}
})();
