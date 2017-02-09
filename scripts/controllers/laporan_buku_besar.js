'use strict';

angular.module('ngAdmin').controller('LaporanBukuBesarCtrl', function($scope,$position) {
	$scope.datas = [
		{
			'nomor_jurnal' : 'JRNL001',
			'kode_umkm' : 'KU001',
			'kode_akun' : 'AK001',
			'tanggal' : '2017-03-10',
			'uraian' : '-',
			'debet' : 2000000,
			'kredit' : 200000,
		},
		{
			'nomor_jurnal' : 'JRNL002',
			'kode_umkm' : 'KU002',
			'kode_akun' : 'AK003',
			'tanggal' : '2017-02-10',
			'uraian' : '-',
			'debet' : 1800000,
			'kredit' : 206000,
		},
		{
			'nomor_jurnal' : 'JRNL004',
			'kode_umkm' : 'KU003',
			'kode_akun' : 'AK002',
			'tanggal' : '2017-04-10',
			'uraian' : '-',
			'debet' : 2800000,
			'kredit' : 216000,
		},
		{
			'nomor_jurnal' : 'JRNL003',
			'kode_umkm' : 'KU001',
			'kode_akun' : 'AK001',
			'tanggal' : '2017-02-10',
			'uraian' : '-',
			'debet' : 2000000,
			'kredit' : 200000,
		},
		{
			'nomor_jurnal' : 'JRNL005',
			'kode_umkm' : 'KU002',
			'kode_akun' : 'AK003',
			'tanggal' : '2017-05-10',
			'uraian' : '-',
			'debet' : 1800000,
			'kredit' : 206000,
		},
		{
			'nomor_jurnal' : 'JRNL006',
			'kode_umkm' : 'KU003',
			'kode_akun' : 'AK002',
			'tanggal' : '2017-07-10',
			'uraian' : '-',
			'debet' : 2800000,
			'kredit' : 216000,
		},
	];
});
