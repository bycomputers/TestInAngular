// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  ENVIROMENT_NAME: "LOCAL",
  SERVER_NAME: "localhost",
  SITE_PORT: 4200,
  WEBAPIFOLDER: ""
};

//ng g c TermsOfUse  --skip-tests=true