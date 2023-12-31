import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya1.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya1.title'),
          children: [{
            link: 'i-i-s-kursovaya1-тип-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-тип-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-тип-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kursovaya1-вендор-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-вендор-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-вендор-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kursovaya1-филиал-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-филиал-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-филиал-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-kursovaya1-пользователь-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-пользователь-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-kursovaya1-оборудование-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-оборудование-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-оборудование-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursovaya1-рабочее-место-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-рабочее-место-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-рабочее-место-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-kursovaya1-опреации-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-опреации-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-опреации-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})