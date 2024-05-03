import { inter } from "@/components/ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-purple-50'>
      <div
      className={`xl:px-10 mx-auto ${inter.className}`}
    >
      {children}
    </div>
    </div>
  );
}
