<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'smui-accordion': true,
    'smui-accordion--multiple': multiple,
  })}
  on:SMUIAccordionPanel:mount={handlePanelMount}
  on:SMUIAccordionPanel:unmount={handlePanelUnmount}
  on:SMUIAccordionPanel:activate={handlePanelActivate}
  on:SMUIAccordionPanel:opening={handlePanelOpening}
  {...$$restProps}
>
  <slot />
</div>

<script lang="ts">
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    ActionArray,
  } from '@smui/common/internal';

  import type { SMUIAccordionPanelAccessor } from './Panel.types.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let multiple = false;

  let element: HTMLDivElement;
  let panelAccessorSet = new Set<SMUIAccordionPanelAccessor>();

  function handlePanelMount(event: CustomEvent<SMUIAccordionPanelAccessor>) {
    const accessor = event.detail;

    event.stopPropagation();

    if (!multiple && accessor.open) {
      const currentOpen = Array.from(panelAccessorSet).find(
        (accessor) => accessor.open
      );

      if (currentOpen) {
        currentOpen.setOpen(false);
      }
    }

    panelAccessorSet.add(accessor);
  }

  function handlePanelUnmount(event: CustomEvent<SMUIAccordionPanelAccessor>) {
    const accessor = event.detail;

    event.stopPropagation();

    panelAccessorSet.delete(accessor);
  }

  function handlePanelActivate(
    event: CustomEvent<{ accessor: SMUIAccordionPanelAccessor }>
  ) {
    const { accessor } = event.detail;

    if (!multiple && !accessor.open) {
      const currentOpen = Array.from(panelAccessorSet).find(
        (accessor) => accessor.open
      );

      if (currentOpen) {
        currentOpen.setOpen(false);
      }
    }

    accessor.setOpen(!accessor.open);
  }

  function handlePanelOpening(
    event: CustomEvent<{ accessor: SMUIAccordionPanelAccessor }>
  ) {
    const { accessor } = event.detail;

    if (!multiple) {
      const otherOpen = Array.from(panelAccessorSet).filter(
        (checkAccessor) => checkAccessor !== accessor && checkAccessor.open
      );

      otherOpen.forEach((accessor) => accessor.setOpen(false));
    }
  }

  export function getElement() {
    return element;
  }
</script>