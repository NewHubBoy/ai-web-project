import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeshikiji from 'rehype-shikiji';
import { readMDXFile, extractMDXMenuPaths } from '~/app/lib/mdx/read';
import grayMatter from 'gray-matter';
import { Metadata } from 'next';

const options: MDXRemoteProps['options'] = {
  mdxOptions: {
    remarkPlugins: [[remarkToc, { maxDepth: 4 }], remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeshikiji,
        {
          themes: {
            light: 'catppuccin-latte',
            dark: 'vitesse-dark',
          },
        },
      ],
    ],
  },
};

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

type Params = Promise<{ MDXPath: string[]; lng: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const MDXPath = (await params).MDXPath;
  const lng = (await params).lng;
  const { source, error } = await readMDXFile(MDXPath, lng);
  if (error) return {};
  if (source === undefined) return {};
  const { data: metadata } = grayMatter(source!);
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { MDXPath, lng } = await params;
  console.log(lng);
  const { source, error } = await readMDXFile(MDXPath, lng);
  if (error) return <div>Load error</div>;
  if (source === undefined) return <div>file does not unexist or is corrupt</div>;
  return (
    <div>
      <MDXRemote source={source} options={{ parseFrontmatter: true, ...options }} />
      <div>上一页</div>
      <div>下一页</div>
    </div>
  );
}
