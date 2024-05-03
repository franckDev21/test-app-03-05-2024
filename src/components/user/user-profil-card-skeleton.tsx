import { Skeleton } from "@/components/ui/skeleton";

const UserProfilCardSkeleton = async () => {
  return (
    <div className="p-4 text-black w-[400px] space-y-4 flex flex-col items-center rounded-lg bg-white border">
      <Skeleton className="w-[140px] h-[140px] rounded-full" />
      <Skeleton className="h-6 w-[250px]" />
      <Skeleton className="h-6 w-[250px]" />
      <Skeleton className="h-6 w-[250px]" />
      <Skeleton className="h-6 w-[80px]" />
    </div>
  );
};

export default UserProfilCardSkeleton;
