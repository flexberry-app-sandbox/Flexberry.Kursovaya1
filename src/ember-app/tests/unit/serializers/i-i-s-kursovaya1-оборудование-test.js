import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya1-оборудование', 'Unit | Serializer | i-i-s-kursovaya1-оборудование', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya1-оборудование',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya1-t-действие',
    'transform:i-i-s-kursovaya1-t-состояние',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
