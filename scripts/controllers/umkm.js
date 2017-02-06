'use strict';

angular.module('ngAdmin').controller('UmkmCtrl', function($scope,$position) {
	$scope.datas = [
		{
			'kode_umkm' : 'UMKM001',
			'nama_umkm' : 'UMKM Satu',
			'pemilik' : 'Bejo',
			'alamat' : 'Singojuruh',
		},
		{
			'kode_umkm' : 'UMKM002',
			'nama_umkm' : 'UMKM Dua',
			'pemilik' : 'Siti',
			'alamat' : 'Wongsorejo',
		}
	];
	 
	$scope.entity = {}

	$scope.edit = function(index){
		$scope.entity = $scope.datas[index];
		$scope.entity.index = index;
		$scope.entity.editable = true;
	}

	$scope.delete = function(index){
		$scope.datas.splice(index,1);
	}

	$scope.save = function(index){
		$scope.datas[index].editable = false;
	}

	$scope.add = function(){
		$scope.datas.push({
			kode_umkm : "",
			nama_umkm : "",
			pemilik : "",
			alamat : "",
			editable : true
		});
	}
});
