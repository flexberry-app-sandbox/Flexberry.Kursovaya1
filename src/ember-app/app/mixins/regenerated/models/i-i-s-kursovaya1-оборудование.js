import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаДобавления: DS.attr('string'),
  инвНомер: DS.attr('string'),
  название: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-kursovaya1-пользователь', { inverse: null, async: false }),
  тип: DS.belongsTo('i-i-s-kursovaya1-тип', { inverse: null, async: false })
});

export let ValidationRules = {
  датаДобавления: {
    descriptionKey: 'models.i-i-s-kursovaya1-оборудование.validations.датаДобавления.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  инвНомер: {
    descriptionKey: 'models.i-i-s-kursovaya1-оборудование.validations.инвНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-kursovaya1-оборудование.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-kursovaya1-оборудование.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-kursovaya1-оборудование.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОборудованиеE', 'i-i-s-kursovaya1-оборудование', {
    название: attr('Название', { index: 0 }),
    инвНомер: attr('Инв номер', { index: 1 }),
    датаДобавления: attr('Дата добавления', { index: 2 })
  });

  modelClass.defineProjection('ОборудованиеL', 'i-i-s-kursovaya1-оборудование', {
    название: attr('Название', { index: 0 }),
    инвНомер: attr('Инв номер', { index: 1 }),
    датаДобавления: attr('Дата добавления', { index: 2 }),
    тип: belongsTo('i-i-s-kursovaya1-тип', 'Название', {
      название: attr('Название', { index: 3 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-kursovaya1-пользователь', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
