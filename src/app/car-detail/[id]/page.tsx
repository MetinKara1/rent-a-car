"use client";
import BannerCard from "@/components/Car/BannerCard";
import Details from "@/components/Car/Details";
import Filter from "@/components/Search/Filter";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BREAKPOINTS } from "@/utils/helpers";
import useBreakpoint from "use-breakpoint";
import CardVechile from "../../../components/Card/index";
import {
  ReviewCard,
  ReviewContent,
  ReviewHeader,
  ReviewTitle,
} from "@/components/Car/Reviews";
import { useIcons } from "@/components/icons/use-icon";
import Button from "@/components/Button/index";
import CarDetailSkeleton from "@/components/Car/CarDetailSkeleton";
import ReviewSkeleton from "@/components/Car/ReviewSkeleton";
import MenuSkeleton from "@/components/Profile/Menu/MenuSkeleton";
import FilterSkeleton from "@/components/Search/FilterSkeleton";

const CarDetail = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<any>([]);
  console.log("propsss: ", props);
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const { ArrowDownIcon, StarIcon, StarOutlineIcon } = useIcons();
  const [cars, setCars] = useState<any>([]);
  const [carDetail, setCarDetail] = useState<any>({});

  useEffect(() => {
    setLoading(true);
    fetch("/api/car").then(async (res) => {
      const response = await res.json();
      console.log("response: ", response);
      setTimeout(() => {
        setCars(response);
        setLoading(false);
      }, 3000);
    });

    fetch(`/api/car-detail?id=${props.params?.id}`).then(async (res) => {
      const response = await res.json();
      console.log("car detaillll: ", response);
      setCarDetail(response);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Filters`)
      .then(async (res) => {
        const data = await res.json();
        console.log("*** filters response: ", data);
        setFilters(data);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log("*** err: ", err);
      });
  }, []);

  return (
    <div>
      <div className="flex h-full w-full justify-center">
        <div className="mobile:hidden laptop:block">
          {loading ? <FilterSkeleton /> : <Filter filters={filters} />}
        </div>
        <div className="">
          <div className="w-full mobile:flex mobile:flex-col desktop:flex desktop:flex-row gap-8 mobile:px-6 laptop:px-8">
            <div className="flex-col items-center w-full">
              <BannerCard
                title="Sports car with the best design and acceleration"
                description="Safety and comfort while driving a futuristic and elegant sports car"
                bgImageUrl="/bg-2.png"
                carImageUrl="/nissan-gt-r.png"
                key="first"
                bgColor="#3563E9"
              />
              <div className="mobile:flex justify-between mobile:gap-[20px] tablet:gap-6 mt-6 w-full h-fit">
                {carDetail.images?.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="mobile:w-[96px] tablet:w-[148px] mobile:h-[80px] tablet:h-[124px] p-2 border rounded-xl flex justify-center items-center"
                  >
                    <img
                      src={item.url}
                      alt={item.name}
                      width={breakpoint === "mobile" ? 96 : 148}
                      height={breakpoint === "mobile" ? 80 : 124}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-col items-center w-full mt-6">
              {loading ? <CarDetailSkeleton /> : <Details detail={carDetail} />}
            </div>
          </div>
          <div className="w-full flex mobile:p-6 laptop:p-8">
            {loading ? (
              <ReviewSkeleton />
            ) : (
              <div className="mobile:p-4 laptop:p-6 bg-white border-0 rounded-xl w-full">
                <div className="flex pb-8">
                  <p className="text-xl font-semibold pr-3">Reviews</p>
                  <div className="py-[6px] px-3 bg-[#3563E9] text-white border-0 rounded">
                    13
                  </div>
                </div>
                {carDetail.reviews?.map((item: any, i: number) => (
                  <ReviewCard className="w-full mb-6" key={i}>
                    <ReviewHeader className="w-full">
                      <div className="flex">
                        <div className="border-0 rounded-full mobile:pr-2 latop:pr-4">
                          <Image
                            src="/avatar.png"
                            alt="avatar"
                            width={breakpoint === "mobile" ? 44 : 56}
                            height={breakpoint === "mobile" ? 44 : 56}
                            priority
                          />
                        </div>
                        <ReviewTitle className="w-full">
                          <div className="w-full flex justify-between">
                            <p className="mobile:text-md laptop:text-xl font-bold pb-2">
                              {item.reviewerName}
                            </p>
                            <p className="text-[#90A3BF] mobile:text-xs laptop:text-sm">
                              {item.date}
                            </p>
                          </div>
                          <div className="w-full flex justify-between">
                            <p className="text-[#90A3BF] mobile:text-xs laptop:text-sm">
                              {item.reviewerJob}
                            </p>
                            <div className="flex">
                              <StarIcon
                                width={breakpoint === "mobile" ? 12 : 20}
                                height={breakpoint === "mobile" ? 12 : 20}
                              />
                              <StarIcon
                                width={breakpoint === "mobile" ? 12 : 20}
                                height={breakpoint === "mobile" ? 12 : 20}
                              />
                              <StarIcon
                                width={breakpoint === "mobile" ? 12 : 20}
                                height={breakpoint === "mobile" ? 12 : 20}
                              />
                              <StarIcon
                                width={breakpoint === "mobile" ? 12 : 20}
                                height={breakpoint === "mobile" ? 12 : 20}
                              />
                              <StarOutlineIcon
                                width={breakpoint === "mobile" ? 12 : 20}
                                height={breakpoint === "mobile" ? 12 : 20}
                              />
                            </div>
                          </div>
                          <ReviewContent className="pt-3">
                            <div className="text-[#596780] mobile:text-xs laptop:text-sm">
                              {item.comment}
                            </div>
                          </ReviewContent>
                        </ReviewTitle>
                      </div>
                    </ReviewHeader>
                  </ReviewCard>
                ))}
                <div className="w-full flex justify-center">
                  <Button
                    type="primary"
                    text="Show All"
                    variant="large"
                    onClick={() => {}}
                    iconRight={<ArrowDownIcon />}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between mobile:px-6 laptop:px-8">
            <div className="text-[#90A3BF] px-5 py-2.5">Recent Car</div>
            <div className="text-[#3563E9] px-5 py-2.5">View All</div>
          </div>
          <div className="grid tablet:grid-cols-2 llaptop:grid-cols-2 desktop:grid-cols-3 gap-8 mt-5 w-full mobile:px-6 laptop:px-8 pb-8">
            {cars.map((item: any, i: number) => {
              return <CardVechile key={i} item={item} />;
            })}
          </div>
          <div className="flex justify-between mobile:px-6 laptop:px-8">
            <div className="text-[#90A3BF] px-5 py-2.5">Recommendation Car</div>
            <div className="text-[#3563E9] px-5 py-2.5">View All</div>
          </div>
          <div className="grid tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 gap-8 mt-5 w-full mobile:px-6 laptop:px-8 pb-8">
            {cars.map((item: any, i: number) => {
              return <CardVechile key={i} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
