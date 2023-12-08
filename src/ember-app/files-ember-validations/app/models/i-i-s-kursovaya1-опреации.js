import {
  defineNamespace,
  defineProjections,
  Model as ОпреацииMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya1-опреации';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОпреацииMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
