import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './LinearProgress.svelte';

export declare class LinearProgressComponentDev
  extends Component
  implements SmuiComponent
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    | 'use'
    | 'class'
    | 'style'
    | 'indeterminate'
    | 'closed'
    | 'progress'
    | 'buffer'
  > &
    ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
