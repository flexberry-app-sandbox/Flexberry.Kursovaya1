import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya1ВендорLForm from './forms/i-i-s-kursovaya1-вендор-l';
import IISKursovaya1ОборудованиеLForm from './forms/i-i-s-kursovaya1-оборудование-l';
import IISKursovaya1ОпреацииLForm from './forms/i-i-s-kursovaya1-опреации-l';
import IISKursovaya1ПользовательLForm from './forms/i-i-s-kursovaya1-пользователь-l';
import IISKursovaya1РабочееМестоLForm from './forms/i-i-s-kursovaya1-рабочее-место-l';
import IISKursovaya1ТипLForm from './forms/i-i-s-kursovaya1-тип-l';
import IISKursovaya1ФилиалLForm from './forms/i-i-s-kursovaya1-филиал-l';
import IISKursovaya1ВендорEForm from './forms/i-i-s-kursovaya1-вендор-e';
import IISKursovaya1ОборудованиеEForm from './forms/i-i-s-kursovaya1-оборудование-e';
import IISKursovaya1ОпреацииEForm from './forms/i-i-s-kursovaya1-опреации-e';
import IISKursovaya1ПользовательEForm from './forms/i-i-s-kursovaya1-пользователь-e';
import IISKursovaya1РабочееМестоEForm from './forms/i-i-s-kursovaya1-рабочее-место-e';
import IISKursovaya1ТипEForm from './forms/i-i-s-kursovaya1-тип-e';
import IISKursovaya1ФилиалEForm from './forms/i-i-s-kursovaya1-филиал-e';
import IISKursovaya1ВендорModel from './models/i-i-s-kursovaya1-вендор';
import IISKursovaya1ОборудованиеModel from './models/i-i-s-kursovaya1-оборудование';
import IISKursovaya1ОпреацииModel from './models/i-i-s-kursovaya1-опреации';
import IISKursovaya1ПОModel from './models/i-i-s-kursovaya1-п-о';
import IISKursovaya1ПользовательModel from './models/i-i-s-kursovaya1-пользователь';
import IISKursovaya1РабочееМестоModel from './models/i-i-s-kursovaya1-рабочее-место';
import IISKursovaya1ТипModel from './models/i-i-s-kursovaya1-тип';
import IISKursovaya1ФилиалModel from './models/i-i-s-kursovaya1-филиал';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya1-вендор': IISKursovaya1ВендорModel,
    'i-i-s-kursovaya1-оборудование': IISKursovaya1ОборудованиеModel,
    'i-i-s-kursovaya1-опреации': IISKursovaya1ОпреацииModel,
    'i-i-s-kursovaya1-п-о': IISKursovaya1ПОModel,
    'i-i-s-kursovaya1-пользователь': IISKursovaya1ПользовательModel,
    'i-i-s-kursovaya1-рабочее-место': IISKursovaya1РабочееМестоModel,
    'i-i-s-kursovaya1-тип': IISKursovaya1ТипModel,
    'i-i-s-kursovaya1-филиал': IISKursovaya1ФилиалModel
  },

  'application-name': 'Kursovaya1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya1',
          title: 'Kursovaya1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovaya1: {
          caption: 'Kursovaya1',
          title: 'Kursovaya1',
          'i-i-s-kursovaya1-тип-l': {
            caption: 'Тип',
            title: ''
          },
          'i-i-s-kursovaya1-вендор-l': {
            caption: 'Вендор',
            title: ''
          },
          'i-i-s-kursovaya1-филиал-l': {
            caption: 'Филиал',
            title: ''
          },
          'i-i-s-kursovaya1-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-kursovaya1-оборудование-l': {
            caption: 'Оборудование',
            title: ''
          },
          'i-i-s-kursovaya1-рабочее-место-l': {
            caption: 'Рабочее место',
            title: ''
          },
          'i-i-s-kursovaya1-опреации-l': {
            caption: 'Опреации',
            title: ''
          }
        },
        'new-folder1': {
          caption: 'NewFolder1',
          title: 'NewFolder1',
          'i-i-s-kursovaya1-тип-l': {
            caption: 'ТипL',
            title: 'Тип'
          },
          'i-i-s-kursovaya1-вендор-l': {
            caption: 'ВендорL',
            title: 'Вендор'
          },
          'i-i-s-kursovaya1-филиал-l': {
            caption: 'ФилиалL',
            title: 'Филиал'
          },
          'i-i-s-kursovaya1-пользователь-l': {
            caption: 'ПользовательL',
            title: 'Пользователь'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya1-вендор-l': IISKursovaya1ВендорLForm,
    'i-i-s-kursovaya1-оборудование-l': IISKursovaya1ОборудованиеLForm,
    'i-i-s-kursovaya1-опреации-l': IISKursovaya1ОпреацииLForm,
    'i-i-s-kursovaya1-пользователь-l': IISKursovaya1ПользовательLForm,
    'i-i-s-kursovaya1-рабочее-место-l': IISKursovaya1РабочееМестоLForm,
    'i-i-s-kursovaya1-тип-l': IISKursovaya1ТипLForm,
    'i-i-s-kursovaya1-филиал-l': IISKursovaya1ФилиалLForm,
    'i-i-s-kursovaya1-вендор-e': IISKursovaya1ВендорEForm,
    'i-i-s-kursovaya1-оборудование-e': IISKursovaya1ОборудованиеEForm,
    'i-i-s-kursovaya1-опреации-e': IISKursovaya1ОпреацииEForm,
    'i-i-s-kursovaya1-пользователь-e': IISKursovaya1ПользовательEForm,
    'i-i-s-kursovaya1-рабочее-место-e': IISKursovaya1РабочееМестоEForm,
    'i-i-s-kursovaya1-тип-e': IISKursovaya1ТипEForm,
    'i-i-s-kursovaya1-филиал-e': IISKursovaya1ФилиалEForm
  },

});

export default translations;
