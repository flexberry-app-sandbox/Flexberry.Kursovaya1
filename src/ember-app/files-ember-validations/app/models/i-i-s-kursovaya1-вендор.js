import {
  defineNamespace,
  defineProjections,
  Model as ВендорMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya1-вендор';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВендорMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
