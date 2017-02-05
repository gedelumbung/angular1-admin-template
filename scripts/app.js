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
                controller: 'MainCtrl',
                templateUrl: 'views/dashboard/home.html',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'ngAdmin',
                            files: [
                                'scripts/controllers/main.js'
                            ]
                        })
                    }
                }
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
                url: '/umkm'
            })
            .state('dashboard.coa', {
                templateUrl: 'views/umkm/index.html',
                url: '/transaksi/coa'
            })
            .state('dashboard.jurnal', {
                templateUrl: 'views/umkm/index.html',
                url: '/transaksi/jurnal'
            })
            .state('dashboard.tutup-buku', {
                templateUrl: 'views/umkm/index.html',
                url: '/transaksi/tutup-buku'
            })
            .state('dashboard.laporan-jurnal', {
                templateUrl: 'views/umkm/index.html',
                url: '/transaksi/laporan-jurnal'
            })
            .state('dashboard.buku-besar', {
                templateUrl: 'views/umkm/index.html',
                url: '/transaksi/buku-besar'
            })
    }]);