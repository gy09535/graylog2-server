// @flow strict
import { WidgetActions } from 'views/stores/WidgetStore';
import type { FieldActionHandler, FieldActionHandlerCondition } from 'views/logic/fieldactions/FieldActionHandler';

const AddToTableActionHandler: FieldActionHandler = ({ field, contexts: { widget } }) => {
  const newFields = [].concat(widget.config.fields, [field]);
  const newConfig = widget.config.toBuilder()
    .fields(newFields)
    .build();
  return WidgetActions.updateConfig(widget.id, newConfig);
};

const isEnabled: FieldActionHandlerCondition = ({ contexts: { widget }, field }) => {
  if (widget.type === 'messages' && widget.config) {
    const fields = widget.config.fields || [];
    return !fields.includes(field);
  }
  return false;
};

/* Hide AddToTableHandler in the sidebar */
const isHidden: FieldActionHandlerCondition = ({ contexts: { widget } }) => !widget;

AddToTableActionHandler.isEnabled = isEnabled;
AddToTableActionHandler.isHidden = isHidden;

export default AddToTableActionHandler;
