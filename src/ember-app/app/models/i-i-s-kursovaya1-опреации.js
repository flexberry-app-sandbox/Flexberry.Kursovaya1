import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОпреацииMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya1-опреации';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОпреацииMixin, Validations, {
});

defineProjections(Model);

export default Model;
