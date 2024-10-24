import { MDXRemote } from 'next-mdx-remote/rsc';
import { readMDXFile, extractMDXMenuPaths } from '~/app/lib/mdx/read';
import grayMatter from 'gray-matter';
import { Metadata } from 'next';

export const dynamicParams = false;

export async function generateStaticParams() {
  const paths: string[] = await extractMDXMenuPaths();
  // console.log('paths', paths);
  // 由于MDXPath参数类型为string[],所以这里需要转化路径
  const staticPaths = paths.map((path) => ({
    MDXPath: path
      .replace(/^\/docs\//, '')
      .split('/')
      .toString(),
  }));
  return staticPaths;
}

type Params = Promise<{ MDXPath: string[] }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const MDXPath = (await params).MDXPath;
  const { source, error } = await readMDXFile(MDXPath);
  if (error) return {};
  if (source === undefined) return {};
  const { data: metadata } = grayMatter(source!);
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { MDXPath } = await params;
  const { source, error } = await readMDXFile(MDXPath);
  if (error) return <div>Load error</div>;
  if (source === undefined) return <div>file does not unexist or is corrupt</div>;
  return <MDXRemote source={source} options={{ parseFrontmatter: true }} />;
}
