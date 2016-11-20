System.config({
  transpiler: 'typescript',
  typescriptOptions: {emitDecoratorMetadata: true,
    target: "ES5",
    module: "commonjs"},
  map: {
    '@angular': 'node_modules/@angular',
    'rxjs'    : 'node_modules/rxjs'
  },
  paths: {
    'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
  },
  meta: {
    '@angular/*': {'format': 'cjs'}
  },
  packages: {
    'app'                              : {main: 'main-child', defaultExtension: 'ts'},
    'rxjs'                             : {main: 'Rx'},
    '@angular/core'                    : {main: 'core.umd.min.js'},
    '@angular/common'                  : {main: 'common.umd.min.js'},
    '@angular/compiler'                : {main: 'compiler.umd.min.js'},
    '@angular/router'                  : {main: 'router.umd.min.js'},
    '@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
    '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'}
  }
});




/*
System.config({
  transpiler: 'typescript',
  typescriptOptions: {emitDecoratorMetadata: true},
  map: {
    '@angular': 'node_modules/@angular'
  },
  paths: {
    'node_modules/@angular/!*': 'node_modules/@angular/!*!/bundles'
  },
  meta: {
    '@angular/!*': {'format': 'cjs'}
  },
  packages: {
    'app'                              : {main: 'main-luxury-lazy', defaultExtension: 'ts'},
    '@angular/core'                    : {main: 'core.umd.min.js'},
    '@angular/common'                  : {main: 'common.umd.min.js'},
    '@angular/compiler'                : {main: 'compiler.umd.min.js'},
    '@angular/router'                : {main: 'router.umd.min.js'},
    '@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
    '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'}
  }
});*/
