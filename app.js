import {AuthorizeStep} from 'aurelia-auth';
export class App {
  configureRouter(config, router) {
    this.router = router;
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      {
        route: ['', 'home'],
        moduleId: './modules/landing',
        name: 'Landing',
        auth: false
      },
      {
        route: 'users',
        moduleId: './modules/users',
        name: 'users',
        auth: true
      }]);
  }
}
