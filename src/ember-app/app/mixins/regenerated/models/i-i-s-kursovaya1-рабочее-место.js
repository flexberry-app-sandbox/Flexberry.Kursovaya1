import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  инвНомер: DS.attr('string'),
  кабинет: DS.attr('string'),
  место: DS.attr('string'),
  филиал: DS.belongsTo('i-i-s-kursovaya1-филиал', { inverse: null, async: false }),
  пО: DS.hasMany('i-i-s-kursovaya1-п-о', { inverse: 'рабочееМесто', async: false })
});

export let ValidationRules = {
  инвНомер: {
    descriptionKey: 'models.i-i-s-kursovaya1-рабочее-место.validations.инвНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кабинет: {
    descriptionKey: 'models.i-i-s-kursovaya1-рабочее-место.validations.кабинет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-kursovaya1-рабочее-место.validations.место.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  филиал: {
    descriptionKey: 'models.i-i-s-kursovaya1-рабочее-место.validations.филиал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пО: {
    descriptionKey: 'models.i-i-s-kursovaya1-рабочее-место.validations.пО.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РабочееМестоE', 'i-i-s-kursovaya1-рабочее-место', {
    инвНомер: attr('Инв номер', { index: 0 }),
    кабинет: attr('Кабинет', { index: 1 }),
    место: attr('Место', { index: 2 }),
    пО: hasMany('i-i-s-kursovaya1-п-о', 'ПО', {
      название: attr('Название', { index: 0 }),
      версия: attr('Версия', { index: 1 }),
      freeware: attr('Freeware', { index: 2 }),
      вендор: belongsTo('i-i-s-kursovaya1-вендор', 'Название', {
        название: attr('Название', { index: 3 })
      }, { index: -1, hidden: true })
    })
  });

  modelClass.defineProjection('РабочееМестоL', 'i-i-s-kursovaya1-рабочее-место', {
    инвНомер: attr('Инв номер', { index: 0 }),
    кабинет: attr('Кабинет', { index: 1 }),
    место: attr('Место', { index: 2 })
  });
};
