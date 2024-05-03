import { poppins } from "@/components/ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`bg-black flex min-h-screen flex-col items-center justify-center ${poppins.className}`}
    >
      {children}
    </div>
  );
}
