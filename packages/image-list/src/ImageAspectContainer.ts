import type { SmuiElementMap } from '@smui/common';
import { classAdderBuilder } from '@smui/common/classadder';

export default classAdderBuilder<keyof SmuiElementMap>({
  class: 'mdc-image-list__image-aspect-container',
  tag: 'div',
});
