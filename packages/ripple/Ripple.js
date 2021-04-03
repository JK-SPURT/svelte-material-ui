import { MDCRippleFoundation } from '@material/ripple';
import * as util from '@material/ripple/util';
import { applyPassive } from '@material/dom/events';
import { matches } from '@material/dom/ponyfill';
import { getContext } from 'svelte';

export default function Ripple(
  node,
  {
    ripple = true,
    unbounded = false,
    disabled = false,
    color = null,
    addClass = (className) => node.classList.add(className),
    removeClass = (className) => node.classList.remove(className),
    active = null,
  } = {}
) {
  let instance;
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;
  let oldActive = active;

  function handleProps() {
    addClass('mdc-ripple-surface');
    if (color === 'primary') {
      addClass('smui-ripple-surface--primary');
      removeClass('smui-ripple-surface--secondary');
    } else if (color === 'secondary') {
      removeClass('smui-ripple-surface--primary');
      addClass('smui-ripple-surface--secondary');
    } else {
      removeClass('smui-ripple-surface--primary');
      removeClass('smui-ripple-surface--secondary');
    }

    if (instance && oldActive !== active) {
      if (active) {
        instance.activate();
      } else {
        instance.deactivate();
      }
      oldActive = active;
    }

    if (ripple && !instance) {
      instance = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => util.supportsCssVariables(window),
        computeBoundingRect: () => node.getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) =>
          document.documentElement.removeEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        deregisterInteractionHandler: (evtType, handler) =>
          node.removeEventListener(evtType, handler, applyPassive()),
        deregisterResizeHandler: (handler) =>
          window.removeEventListener('resize', handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset,
        }),
        isSurfaceActive: () =>
          active == null ? matches(node, ':active') : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) =>
          document.documentElement.addEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        registerInteractionHandler: (evtType, handler) =>
          node.addEventListener(evtType, handler, applyPassive()),
        registerResizeHandler: (handler) =>
          window.addEventListener('resize', handler),
        removeClass,
        updateCssVariable: (varName, value) =>
          node.style.setProperty(varName, value),
      });
      instance.init();
      instance.setUnbounded(unbounded);
    } else if (instance && !ripple) {
      instance.destroy();
      instance = null;
    }

    if (!ripple && unbounded) {
      addClass('mdc-ripple-upgraded--unbounded');
    }
  }

  handleProps();

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  function layout() {
    if (instance) {
      instance.layout();
    }
  }

  return {
    update(props) {
      if ('ripple' in props) {
        ripple = props.ripple;
      }
      if ('unbounded' in props) {
        unbounded = props.unbounded;
      }
      if ('disabled' in props) {
        disabled = props.disabled;
      }
      if ('color' in props) {
        color = props.color;
      }
      if ('addClass' in props) {
        addClass = props.addClass;
      }
      if ('removeClass' in props) {
        removeClass = props.removeClass;
      }
      if ('active' in props) {
        active = props.active;
      }
      handleProps();
    },

    destroy() {
      if (instance) {
        instance.destroy();
        instance = null;
        removeClass('mdc-ripple-surface');
        removeClass('smui-ripple-surface--primary');
        removeClass('smui-ripple-surface--secondary');
      }

      if (removeLayoutListener) {
        removeLayoutListener();
      }
    },
  };
}
