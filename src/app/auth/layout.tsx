import { poppins } from "@/components/ui/fonts";
import IdeaFusionLogo from "@/components/ui/logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`bg-black flex min-h-screen flex-col items-center justify-center ${poppins.className}`}
    >
      <div className="bg-white p-4 rounded-lg h-[94vh] w-[90vw] flex space-x-4">
        <div className=" bg-[#000] text-white w-[34%] flex flex-col justify-between rounded-lg p-8">
          <IdeaFusionLogo />

          <div className=" space-y-3">
            <h1 className="text-5xl font-bold">Start your journey with us.</h1>
            <p className=" opacity-80 font-light leading-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae, pariatur.
            </p>
          </div>

          <div className=" space-y-4">
            <div className="bg-[#262626] shadow p-4 rounded-lg space-y-3">
              <p className="text-xs opacity-80 leading-6 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis impedit, doloribus voluptas nulla blanditiis nisi
                magnam delectus.
              </p>
              <div className="flex space-x-2">
                <div className=" rounded-md w-10 h-10 bg-gray-50"></div>
                <div className="flex flex-col justify-center space-y-1">
                  <h3 className=" text-xs">Franck Tio </h3>
                  <span className=" text-[0.60rem] opacity-80">
                    FullStack Web Developer
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center space-x-4">
              <span className=" inline-block w-2 h-2 rounded-full bg-white"></span>
              <span className=" inline-block w-2 h-2 rounded-full bg-white bg-opacity-60"></span>
              <span className=" inline-block w-2 h-2 rounded-full bg-white bg-opacity-60"></span>
            </div>
          </div>
        </div>
        <div className=" flex-grow overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
}
