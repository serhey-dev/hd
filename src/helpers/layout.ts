export const MD_BREAKPOINT = 768;

export function mergeClasses(...classes: (string | undefined)[]) {
  return classes.reduce((acc, c) => (!!c ? acc + ` ${c}` : acc), '');
}
