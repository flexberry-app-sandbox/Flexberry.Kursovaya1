import { Serializer as ФилиалSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya1-филиал';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФилиалSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
