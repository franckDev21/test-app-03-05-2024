// import Pagination from '@/app/ui/invoices/pagination';
import { Suspense } from 'react';
import { lusitana } from '@/components/ui/fonts';
import { Button } from '@/components/ui/button';
import ProjectTableSkeleton from '@/components/project/project-table-skeleton';
import ProjectTable from '@/components/project/table';
import Search from '@/components/ui/search';
import Pagination from '@/components/project/pagination';
// import { fetchInvoicesPages } from '@/app/lib/data';
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages =  5 // await fetchInvoicesPages(query);
 
  return (
    <div className="container pt-10">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Projects</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search projects..." />
        <Button>Create new Project</Button>
      </div>
      <Suspense key={query + currentPage} fallback={<ProjectTableSkeleton />}>
        <ProjectTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}