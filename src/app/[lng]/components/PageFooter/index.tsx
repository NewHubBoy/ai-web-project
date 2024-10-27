import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { readMDXMenu } from '~/app/lib/mdx/read';

type PageFooterProps = {
  title?: string;
  lng?: string;
};

const PageFooter: React.FC<PropsWithChildren<PageFooterProps>> = async ({ title: currentTitle, lng }) => {
  const menu = await readMDXMenu();

  const menuWithLng = menu.children?.filter(({ label }) => {
    return label === lng;
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const currentPages = menuWithLng![0].children?.filter(({ standard }) => {
    return !standard;
  });

  const currentPage = menuWithLng![0].children?.filter(({ title }) => {
    if (title) {
      return title === currentTitle;
    } else {
      return false;
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const currentPageIndex = menuWithLng![0].children?.findIndex(({ label }) => {
    return label === currentPage![0].label;
  });

  return (
    <div className="w-full flex justify-between gap-5 mt-10">
      <div className="basis-1/2 flex flex-col">
        {currentPageIndex === 0 ? null : (
          <>
            <p className="text-sm uppercase font-light">Previous</p>
            <Link className="text-[#2f5aae] font-light mt-1 md:text-[17px] text-sm md:tracking-wider " href={`/${lng}/${currentPages![currentPageIndex! - 1]?.href}`}>
              {currentPages![currentPageIndex! - 1]?.title}
            </Link>
          </>
        )}
      </div>
      <div className="basis-1/2 flex flex-col items-end">
        {currentPageIndex === currentPages!.length - 1 ? null : (
          <>
            <p className="text-sm uppercase font-light">Next</p>
            <Link className="text-[#2f5aae] font-light mt-1 md:text-[17px] text-sm md:tracking-wider " href={`/${lng}/${currentPages![currentPageIndex! + 1]?.href}`}>
              {currentPages![currentPageIndex! + 1]?.title}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default PageFooter;
