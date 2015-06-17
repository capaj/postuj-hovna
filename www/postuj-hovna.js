export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.globalizeResources(['./components/map-popup-content']);

  //window.aurelia = aurelia;
  aurelia.start().then(a => a.setRoot());
}