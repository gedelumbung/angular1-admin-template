"use strict";

angular
    .module("ngAdmin")
    .controller("LaporanJurnalCtrl", function($scope, $position) {
        $scope.datas = [
            {
                nomor_jurnal: "JRNL001",
                kode_umkm: "KU001",
                tanggal: "2017-03-10",
                uraian: "-",
                nama_akun: "Bejo",
                debet: 2000000,
                kredit: 200000
            },
            {
                nomor_jurnal: "JRNL002",
                kode_umkm: "KU002",
                tanggal: "2017-02-10",
                uraian: "-",
                nama_akun: "Siti",
                debet: 1800000,
                kredit: 206000
            },
            {
                nomor_jurnal: "JRNL004",
                kode_umkm: "KU003",
                tanggal: "2017-04-10",
                uraian: "-",
                nama_akun: "Septi",
                debet: 2800000,
                kredit: 216000
            },
            {
                nomor_jurnal: "JRNL003",
                kode_umkm: "KU001",
                tanggal: "2017-02-10",
                uraian: "-",
                nama_akun: "Bejo",
                debet: 2000000,
                kredit: 200000
            },
            {
                nomor_jurnal: "JRNL005",
                kode_umkm: "KU002",
                tanggal: "2017-05-10",
                uraian: "-",
                nama_akun: "Siti",
                debet: 1800000,
                kredit: 206000
            },
            {
                nomor_jurnal: "JRNL006",
                kode_umkm: "KU003",
                tanggal: "2017-07-10",
                uraian: "-",
                nama_akun: "Septi",
                debet: 2800000,
                kredit: 216000
            }
        ];
    });
