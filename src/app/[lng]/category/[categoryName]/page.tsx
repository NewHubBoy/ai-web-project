import { readMDXMenu } from '~/app/lib/mdx/read';

type Params = Promise<{ categoryName: string[]; lng: string }>;

export default async function Page({ params }: { params: Params }) {
  const menu = await readMDXMenu();

  console.log(menu);

  const { categoryName } = await params;
  return <div>{categoryName}</div>;
}
