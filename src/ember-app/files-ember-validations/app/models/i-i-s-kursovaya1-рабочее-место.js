import {
  defineNamespace,
  defineProjections,
  Model as РабочееМестоMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya1-рабочее-место';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РабочееМестоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
