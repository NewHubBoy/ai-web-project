import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeshikiji from 'rehype-shikiji';
import { readMDXFile, extractMDXMenuPaths } from '~/app/lib/mdx/read';
import grayMatter from 'gray-matter';
import { Metadata } from 'next';
import CommonContainer from '../../components/CommonContainer';

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
    category: metadata.category,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { MDXPath, lng } = await params;
  const { source, error } = await readMDXFile(MDXPath, lng);
  if (error) return <div>Load error</div>;
  if (source === undefined) return <div>file does not unexist or is corrupt</div>;
  const { data: metadata } = grayMatter(source!);
  return (
    <CommonContainer className="min-h-[calc(100vh-64px)] overflow-y-auto m-auto">
      <div className="max-w-[819px] px-4 m-auto text-[#272626]">
        <div className="my-16">
          <h1 className="text-4xl md:text-7xl font-semibold mb-3 leading-tight my-16">{metadata.title.replace('：', ': ')}</h1>
          <p className='md:text-[17px] text-sm tracking-wide leading-7 font-normal text-[#2b2b2b]'>by yutaichi</p>
        </div>
        <MDXRemote
          source={source}
          options={{ parseFrontmatter: true, ...options }}
          components={{
            h1: ({ children }) => <h1 className="text-7xl font-bold mb-3 leading-tight">{children}</h1>,
            h2: ({ children }) => <h2 style={{ fontSize: '1.65em', fontWeight: 600, lineHeight: 1.25 }} className='mb-8'>{children}</h2>,
            h4: ({ children }) => <h4 style={{ fontSize: '1em', fontWeight: 600, lineHeight: 1.25 }}>{children}</h4>,
            h5: ({ children }) => <h5 style={{ fontSize: '0.83em', fontWeight: 600, lineHeight: 1.25 }}>{children}</h5>,
            h6: ({ children }) => <h6 style={{ fontSize: '0.67em', fontWeight: 600, lineHeight: 1.25 }}>{children}</h6>,
            p: ({ children }) => <p className="md:text-[17px] text-sm tracking-wide leading-relaxed text-md mb-8">{children}</p>,
            img: ({ alt, src }) => <img className="w-full mb-6" alt={alt} src={src} />,
            h3: ({ children }) => <h3 className="mb-8 text-lg md:font-semibold font-normal">{children}</h3>,
            ol: ({ children }) => <ol className="pl-[1rem] mb-6 list-decimal list-outside">{children}</ol>,
            li: ({ children }) => <li className="mb-6 tracking-wide font-normal leading-relaxed md:text-[17px] text-sm">{children}</li>,
          }}
        />
        <div className="flex justify-between">
          <div>上一页</div>
          <div>下一页</div>
        </div>
      </div>
    </CommonContainer>
  );
}
