'use strict';

angular.module('ngAdmin').controller('JurnalCtrl', function($scope,$position) {
	$scope.datas = [
		{
			'kode_akun' : 'AK001',
			'nama_akun' : 'Bejo',
			'debet' : 2000000,
			'kredit' : 200000,
		},
		{
			'kode_akun' : 'AK002',
			'nama_akun' : 'Siti',
			'debet' : 1800000,
			'kredit' : 206000,
		},
		{
			'kode_akun' : 'AK003',
			'nama_akun' : 'Septi',
			'debet' : 2800000,
			'kredit' : 216000,
		},
		{
			'kode_akun' : 'AK001',
			'nama_akun' : 'Bejo',
			'debet' : 2000000,
			'kredit' : 200000,
		},
		{
			'kode_akun' : 'AK002',
			'nama_akun' : 'Siti',
			'debet' : 1800000,
			'kredit' : 206000,
		},
		{
			'kode_akun' : 'AK003',
			'nama_akun' : 'Septi',
			'debet' : 2800000,
			'kredit' : 216000,
		},
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
			kode_akun : "",
			nama_akun : "",
			debet : "",
			kredit : "",
			editable : true
		});
	}
});
