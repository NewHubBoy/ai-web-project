declare module '*.mdx' {
  //eslint-disable-next-line
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
