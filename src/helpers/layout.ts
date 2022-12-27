export function mergeClasses(...classes: (string | undefined)[]) {
  return classes.reduce((acc, c) => (!!c ? acc + ` ${c}` : acc), '');
}
