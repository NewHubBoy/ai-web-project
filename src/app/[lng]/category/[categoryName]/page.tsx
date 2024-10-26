import Link from 'next/link';
import { readMDXMenu } from '~/app/lib/mdx/read';
import CommonContainer from '../../components/CommonContainer';
import { Metadata } from 'next';

type Params = Promise<{ categoryName: string; lng: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { categoryName, lng } = await params;
  const MetaData: Metadata = {
    title: '',
    description: '',
  };
  const menu = await readMDXMenu();

  const menuWithLng = menu.children?.filter(({ label }) => {
    return label === lng;
  });
  if (menuWithLng?.length) {
    const currentcategory = menuWithLng![0].children?.filter(({ category, standard }) => {
      if (category) {
        return category === categoryName && standard;
      } else {
        return false;
      }
    });
    if (currentcategory?.length) {
      MetaData.title = currentcategory[0]?.categoryTitle;
      MetaData.description = currentcategory[0]?.categoryDescription;
    }
  }

  return {
    title: MetaData.title?.toString().toUpperCase(),
    description: MetaData.description,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { categoryName, lng } = await params;
  const menu = await readMDXMenu();

  const menuWithLng = menu.children?.filter(({ label }) => {
    return label === lng;
  });

  const currentcategory = menuWithLng![0].children?.filter(({ category, standard }) => {
    if (category) {
      return category === categoryName && !standard;
    } else {
      return false;
    }
  });

  const category = menuWithLng![0].children?.find(({ category, standard }) => {
    return category === categoryName && standard;
  });

  return (
    <CommonContainer className="m-auto min-h-[calc(100vh-64px)] overflow-y-auto">
      <div className="my-14 px-4">
        <h1 className="text-[#2b2b2b] text-[70px] font-medium text-left mb-6 uppercase">{category?.categoryTitle}</h1>
        <div className="grid grid-cols-2 gap-4">
          {currentcategory?.map((item) => {
            return (
              <div className="p-6 bg-[rgba(0,0,0,.75)] text-white flex justify-end flex-col h-[300px]" key={item.label}>
                <Link href={'/' + lng + '/' + item.href}>
                  <h2 className="text-xl mb-3">{item.title}</h2>
                </Link>
                <div className="mb-5">
                  <span className="font-light">by {'章三'}</span>
                </div>
                <div className="tracking-wider">
                  {item?.description + ' '}
                  <Link href={'/' + lng + '/' + item.href}>Read More »</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CommonContainer>
  );
}
