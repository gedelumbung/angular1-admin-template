"use strict";

angular.module("ngAdmin").controller("CoaCtrl", function($scope, $position) {
    $scope.datas = [
        {
            kode_akun: "AKUN001",
            nama_akun: "Lancar Jaya Handicraft",
            induk: "Muncar",
            kode_umkm: "UMKM001"
        },
        {
            kode_akun: "AKUN002",
            nama_akun: "Asli Osing Berkah",
            induk: "Kemiren",
            kode_umkm: "UMKM002"
        }
    ];

    $scope.entity = {};

    $scope.edit = function(index) {
        $scope.entity = $scope.datas[index];
        $scope.entity.index = index;
        $scope.entity.editable = true;
    };

    $scope.delete = function(index) {
        $scope.datas.splice(index, 1);
    };

    $scope.save = function(index) {
        $scope.datas[index].editable = false;
    };

    $scope.add = function() {
        $scope.datas.push({
            kode_umkm: "",
            nama_akun: "",
            induk: "",
            kode_akun: "",
            editable: true
        });
    };
});
