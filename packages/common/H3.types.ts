import type { SMUIComponent } from './smui.d';
import type Component from './H3.svelte';

export declare class H3ComponentDev extends SMUIComponent {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLHeadingElement>>,
    keyof Component['$$prop_def']
  > &
    Component['$$prop_def'];
}
