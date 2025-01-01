import { BREAKPOINTS } from "@/utils/helpers";
import React from "react";
import useBreakpoint from "use-breakpoint";
import Button from "../Button/index";
import { useIcons } from "../icons/use-icon";
import Skeleton from "../Skeleton/index";

const CarDetailSkeleton = () => {
  const { HeartIcon, StarIcon, StarOutlineIcon } = useIcons();
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <div className="bg-white px-6 mobile:pt-4 tablet:pt-6 w-full h-fit rounded-2xl">
      <div className="flex justify-between w-full">
        <Skeleton
          baseColor="#85A8F8"
          highlightColor="#EFF3FD"
          borderRadius={30}
          count={1}
          wrapClassName="w-1/4"
        />
        <HeartIcon fill="#ED3F3F" />
      </div>
      <div className="flex items-center gap-2 mt-1">
        <Skeleton
          baseColor="#EFF3FD"
          highlightColor="#FFF"
          borderRadius={30}
          count={1}
          wrapClassName="w-1/4"
        />
      </div>
      <div className="mobile:mt-4 tablet:mt-8">
        <Skeleton
          baseColor="#EFF3FD"
          highlightColor="#FFF"
          borderRadius={30}
          count={3}
          wrapClassName="w-full"
        />
        <div className="mobile:mt-4 tablet:mt-8 mobile:text-xs tablet:text-xl">
          <div className="flex w-full gap-11">
            <div className="w-full flex justify-between mb-4">
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/3"
              />
              <Skeleton
                baseColor="#85A8F8"
                highlightColor="#EFF3FD"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/3"
              />
            </div>
            <div className="w-full flex justify-between">
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/3"
              />
              <Skeleton
                baseColor="#85A8F8"
                highlightColor="#EFF3FD"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/3"
              />
            </div>
          </div>
          <div className="flex w-full gap-11">
            <div className="w-full flex justify-between mb-4">
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/3"
              />
              <Skeleton
                baseColor="#85A8F8"
                highlightColor="#EFF3FD"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/3"
              />
            </div>
            <div className="w-full flex justify-between">
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/3"
              />
              <Skeleton
                baseColor="#85A8F8"
                highlightColor="#EFF3FD"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/3"
              />
            </div>
          </div>
        </div>
        <div className="flex mobile:mt-8 tablet:mt-[68px] justify-between w-3/4">
          <div className="flex flex-col w-full">
            <Skeleton
              baseColor="#85A8F8"
              highlightColor="#EFF3FD"
              borderRadius={30}
              count={1}
              wrapClassName="w-1/3"
            />
            <Skeleton
              baseColor="#EFF3FD"
              highlightColor="#FFF"
              borderRadius={30}
              count={1}
              wrapClassName="w-1/3"
            />
          </div>

          <div className="mobile:pb-4 tablet:pb-8 w-1/4">
            <Skeleton
              baseColor="#3563E9"
              highlightColor="#EFF3FD"
              borderRadius={12}
              count={1}
              className="w-full h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailSkeleton;
