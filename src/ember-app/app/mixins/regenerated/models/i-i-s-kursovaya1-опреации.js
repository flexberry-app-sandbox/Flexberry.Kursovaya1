import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  действие: DS.attr('i-i-s-kursovaya1-t-действие'),
  состояние: DS.attr('i-i-s-kursovaya1-t-состояние'),
  админ: DS.belongsTo('i-i-s-kursovaya1-пользователь', { inverse: null, async: false }),
  оборудование: DS.belongsTo('i-i-s-kursovaya1-оборудование', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya1-опреации.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  действие: {
    descriptionKey: 'models.i-i-s-kursovaya1-опреации.validations.действие.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-kursovaya1-опреации.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  админ: {
    descriptionKey: 'models.i-i-s-kursovaya1-опреации.validations.админ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оборудование: {
    descriptionKey: 'models.i-i-s-kursovaya1-опреации.validations.оборудование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОпреацииE', 'i-i-s-kursovaya1-опреации', {
    дата: attr('Дата', { index: 0 }),
    действие: attr('Действие', { index: 1 }),
    состояние: attr('Состояние', { index: 2 }),
    оборудование: belongsTo('i-i-s-kursovaya1-оборудование', 'Оборудование', {
      название: attr('Название', { index: 4 }),
      сотрудник: belongsTo('i-i-s-kursovaya1-пользователь', '', {
        админ: attr('Админ', { index: 5 }),
        фИО: attr('', { index: 6 })
      }, { index: -1, hidden: true })
    }, { index: 3 })
  });

  modelClass.defineProjection('ОпреацииL', 'i-i-s-kursovaya1-опреации', {
    дата: attr('Дата', { index: 0 }),
    действие: attr('Действие', { index: 1 }),
    состояние: attr('Состояние', { index: 2 })
  });
};
