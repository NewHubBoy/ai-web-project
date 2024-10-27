import Link from 'next/link';
import { readMDXMenu } from '~/app/lib/mdx/read';
import CommonContainer from '../../components/CommonContainer';
import { Metadata } from 'next';

type Params = Promise<{ authorName: string; lng: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { authorName, lng } = await params;
  const MetaData: Metadata = {
    title: '',
    description: '',
  };
  const menu = await readMDXMenu();

  const menuWithLng = menu.children?.filter(({ label }) => {
    return label === lng;
  });
  if (menuWithLng?.length) {
    const currentcategory = menuWithLng![0].children?.filter(({ author }) => {
      if (author) {
        return author === authorName;
      } else {
        return false;
      }
    });
    if (currentcategory?.length) {
      MetaData.title = currentcategory[0]?.author;
      MetaData.description = currentcategory[0]?.categoryDescription;
    }
  }

  return {
    title: MetaData.title?.toString().toUpperCase(),
    description: MetaData.description,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { authorName, lng } = await params;
  const menu = await readMDXMenu();

  const menuWithLng = menu.children?.filter(({ label }) => {
    return label === lng;
  });

  const currentcategory = menuWithLng![0].children?.filter(({ author }) => {
    if (author) {
      return author === authorName;
    } else {
      return false;
    }
  });

  const author = menuWithLng![0].children?.find(({ author }) => {
    return author === authorName;
  });

  return (
    <CommonContainer className="m-auto min-h-[calc(100vh-64px)] overflow-y-auto">
      <div className="my-14 px-4">
        <h1 className="text-[#2b2b2b] text-4xl md:text-[70px] md:leading-relaxed font-medium text-left mb-6 uppercase">{author?.author}</h1>
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          {currentcategory?.map((item) => {
            return (
              <div className="p-6 bg-[rgba(0,0,0,.75)] text-white flex justify-end flex-col h-[300px]" key={item.label}>
                <Link href={'/' + lng + '/' + item.href}>
                  <h2 className="text-lg md:text-xl font-semibold mb-3">{item.title}</h2>
                </Link>
                <div className="mb-5">
                  <span className="font-light">
                    by <Link href={'/' + lng + '/author/' + item.author}>{item.author}</Link>
                  </span>
                </div>
                <p className="md:text-[17px] text-sm md:tracking-wider tracking-wide leading-7 font-normal ">
                  {item?.description + ' '}
                  <Link href={'/' + lng + '/' + item.href}>Read More »</Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </CommonContainer>
  );
}
