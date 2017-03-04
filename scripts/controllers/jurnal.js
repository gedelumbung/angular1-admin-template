"use strict";

angular.module("ngAdmin").controller("JurnalCtrl", function($scope, $position) {
    $scope.datas = [
        {
            kode_akun: "AK001",
            nama_akun: "Bejo",
            debet: 2000000,
            kredit: 200000
        },
        {
            kode_akun: "AK002",
            nama_akun: "Siti",
            debet: 1800000,
            kredit: 206000
        },
        {
            kode_akun: "AK003",
            nama_akun: "Septi",
            debet: 2800000,
            kredit: 216000
        },
        {
            kode_akun: "AK001",
            nama_akun: "Bejo",
            debet: 2000000,
            kredit: 200000
        },
        {
            kode_akun: "AK002",
            nama_akun: "Siti",
            debet: 1800000,
            kredit: 206000
        },
        {
            kode_akun: "AK003",
            nama_akun: "Septi",
            debet: 2800000,
            kredit: 216000
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
            kode_akun: "",
            nama_akun: "",
            debet: "",
            kredit: "",
            editable: true
        });
    };

    $scope.coa = [
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

    $scope.entityCoa = {};

    $scope.editCoa = function(index) {
        $scope.entity = $scope.coa[index];
        $scope.entity.index = index;
        $scope.entity.editable = true;
    };

    $scope.deleteCoa = function(index) {
        $scope.coa.splice(index, 1);
    };

    $scope.saveCoa = function(index) {
        $scope.coa[index].editable = false;
    };

    $scope.addCoa = function() {
        $scope.coa.push({
            kode_umkm: "",
            nama_akun: "",
            induk: "",
            kode_akun: "",
            editable: true
        });
    };
});
