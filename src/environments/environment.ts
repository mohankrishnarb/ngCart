// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL:'http://localhost:3000',
  CATEGORY_BASE_URL:'http://localhost:3000/categories/',
  CATEGORIES:{
    GET_ALL_CATEGORIES: 'list',
    GET_CATEGORY_DETAILS: 'list',
    ADD_CATEGORY_DETAILS: 'add',
    UPDATE_CATEGORY_DETAILS: 'update',
    DELETE_CATEGORY_DETAILS: 'delete'    
  },
  AUTH_BASE_URL:'http://localhost:3000/api/auth/',
  API_BASE_URL:'http://localhost:3000/api/test/',
  SUB_CATEGORY_BASE_URL:'http://localhost:3000/subcategories/',
  SUB_CATEGORIES:{
    GET_ALL_SUBCATEGORIES:'list',
    GET_SUBCATEGORY_DETAILS: 'list',
    ADD_SUBCATEGORY_DETAILS: 'add',
    UPDATE_SUBCATEGORY_DETAILS: 'update',
    DELETE_SUBCATEGORY_DETAILS: 'delete'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
