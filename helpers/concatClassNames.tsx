type Props = Array<string | boolean | null | undefined>;

export function concatClassNames(...args: Props): string {
  return args.filter((item) => !!item).join(" ");
}
