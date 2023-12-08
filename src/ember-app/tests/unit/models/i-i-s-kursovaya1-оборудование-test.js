import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya1-оборудование', 'Unit | Model | i-i-s-kursovaya1-оборудование', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya1-вендор',
    'model:i-i-s-kursovaya1-оборудование',
    'model:i-i-s-kursovaya1-опреации',
    'model:i-i-s-kursovaya1-п-о',
    'model:i-i-s-kursovaya1-пользователь',
    'model:i-i-s-kursovaya1-рабочее-место',
    'model:i-i-s-kursovaya1-тип',
    'model:i-i-s-kursovaya1-филиал',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
