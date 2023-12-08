import { Serializer as ОпреацииSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya1-опреации';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОпреацииSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
