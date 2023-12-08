import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya1-вендор-l');
  this.route('i-i-s-kursovaya1-вендор-e',
  { path: 'i-i-s-kursovaya1-вендор-e/:id' });
  this.route('i-i-s-kursovaya1-вендор-e.new',
  { path: 'i-i-s-kursovaya1-вендор-e/new' });
  this.route('i-i-s-kursovaya1-оборудование-l');
  this.route('i-i-s-kursovaya1-оборудование-e',
  { path: 'i-i-s-kursovaya1-оборудование-e/:id' });
  this.route('i-i-s-kursovaya1-оборудование-e.new',
  { path: 'i-i-s-kursovaya1-оборудование-e/new' });
  this.route('i-i-s-kursovaya1-опреации-l');
  this.route('i-i-s-kursovaya1-опреации-e',
  { path: 'i-i-s-kursovaya1-опреации-e/:id' });
  this.route('i-i-s-kursovaya1-опреации-e.new',
  { path: 'i-i-s-kursovaya1-опреации-e/new' });
  this.route('i-i-s-kursovaya1-пользователь-l');
  this.route('i-i-s-kursovaya1-пользователь-e',
  { path: 'i-i-s-kursovaya1-пользователь-e/:id' });
  this.route('i-i-s-kursovaya1-пользователь-e.new',
  { path: 'i-i-s-kursovaya1-пользователь-e/new' });
  this.route('i-i-s-kursovaya1-рабочее-место-l');
  this.route('i-i-s-kursovaya1-рабочее-место-e',
  { path: 'i-i-s-kursovaya1-рабочее-место-e/:id' });
  this.route('i-i-s-kursovaya1-рабочее-место-e.new',
  { path: 'i-i-s-kursovaya1-рабочее-место-e/new' });
  this.route('i-i-s-kursovaya1-тип-l');
  this.route('i-i-s-kursovaya1-тип-e',
  { path: 'i-i-s-kursovaya1-тип-e/:id' });
  this.route('i-i-s-kursovaya1-тип-e.new',
  { path: 'i-i-s-kursovaya1-тип-e/new' });
  this.route('i-i-s-kursovaya1-филиал-l');
  this.route('i-i-s-kursovaya1-филиал-e',
  { path: 'i-i-s-kursovaya1-филиал-e/:id' });
  this.route('i-i-s-kursovaya1-филиал-e.new',
  { path: 'i-i-s-kursovaya1-филиал-e/new' });
});

export default Router;
