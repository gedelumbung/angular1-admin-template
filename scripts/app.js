'use strict';
angular
    .module('ngAdmin', [
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
        });

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard/main.html',
                resolve: {
                    loadMyDirectives: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                                name: 'ngAdmin',
                                files: [
                                    'scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js'
                                ]
                            }),
                            $ocLazyLoad.load({
                                name: 'ngAnimate',
                                files: ['bower_components/angular-animate/angular-animate.js']
                            })
                    }
                }
            })
            .state('login', {
                templateUrl: 'views/pages/login.html',
                url: '/login'
            })
            .state('dashboard.home', {
                url: '/home',
                templateUrl: 'views/dashboard/home.html',
            })
            .state('dashboard.table', {
                templateUrl: 'views/table.html',
                url: '/table'
            })
            .state('dashboard.admin', {
                templateUrl: 'views/admin/login.html',
                url: '/admin/login'
            })
            .state('dashboard.umkm', {
                templateUrl: 'views/umkm/index.html',
                url: '/umkm',
                controller: 'UmkmCtrl',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'ngAdmin',
                            files: [
                                'scripts/controllers/umkm.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard.coa', {
                templateUrl: 'views/transaksi/coa.html',
                url: '/transaksi/coa',
                controller: 'CoaCtrl',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'ngAdmin',
                            files: [
                                'scripts/controllers/coa.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard.jurnal', {
                templateUrl: 'views/transaksi/jurnal.html',
                url: '/transaksi/jurnal',
                controller: 'JurnalCtrl',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'ngAdmin',
                            files: [
                                'scripts/controllers/jurnal.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard.tutup-buku', {
                templateUrl: 'views/transaksi/tutup_buku.html',
                url: '/transaksi/tutup-buku',
                controller: 'TutupBukuCtrl',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'ngAdmin',
                            files: [
                                'scripts/controllers/tutup_buku.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard.laporan-jurnal', {
                templateUrl: 'views/laporan/jurnal.html',
                url: '/laporan/jurnal',
                controller: 'LaporanJurnalCtrl',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'ngAdmin',
                            files: [
                                'scripts/controllers/laporan_jurnal.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard.buku-besar', {
                templateUrl: 'views/laporan/buku_besar.html',
                url: '/laporan/buku-besar',
                controller: 'LaporanBukuBesarCtrl',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'ngAdmin',
                            files: [
                                'scripts/controllers/laporan_buku_besar.js'
                            ]
                        })
                    }
                }
            })
    }]);