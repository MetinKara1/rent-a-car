"use client";
import { BREAKPOINTS } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import useBreakpoint from "use-breakpoint";
import Button from "../Button/index";
import { useIcons } from "../icons/use-icon";
import BannerCard from "../Car/BannerCard";
import Delivery from "../Delivery";
import CardVechile from "../Card/index";
import MainContainer from "../MainContainer";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "../Card/CardSkeleton";
import DeliverySkeleton from "../DeliverySkeleton";

const Homepage = () => {
  const [cars, setCars] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/api/car").then(async (res) => {
  //     const data = await res.json();
  //     console.log("response: ", data);
  //     setTimeout(() => {
  //       setCars(data);
  //       setLoading(false);
  //     }, 3000);
  //   });
  // }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Cars`)
      .then(async (res) => {
        const data = await res.json();
        console.log("*** service response: ", data);
        setCars(data);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log("*** err: ", err);
      });
  }, []);

  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const { SwapIcon } = useIcons();
  return (
    <MainContainer>
      <div className="w-full flex-col justify-center">
        <div className="flex gap-8 w-full">
          <BannerCard
            title="The Best Platform for Rental Car"
            description="Ease of doing a car rental safely and reliably. Of course at a low price."
            buttonText="Rental Car"
            bgImageUrl="/bg-1.png"
            carImageUrl="/koenigsegg.png"
            key="first"
            bgColor="#54A6FF"
            buttonBgColor="#3563E9"
          />
          {(breakpoint === "laptop" || breakpoint == "desktop") && (
            <BannerCard
              title="Easy way to rent a car at a low price"
              description="Providing cheap car rental services and safe and comfortable facilities."
              buttonText="Rental Car"
              bgImageUrl="/bg-2.png"
              carImageUrl="/nissan-gt-r.png"
              key="second"
              bgColor="#3563E9"
              buttonBgColor="#54A6FF"
            />
          )}
        </div>
        <div className="mt-8 laptop:flex laptop:flex-row mobile:flex mobile:flex-col w-full items-center laptop:gap-8 desktop:gap-11">
          <div className="border-0 rounded-2xl mobile:px-4 laptop:px-7 desktop:px-12 bg-white w-full">
            {loading ? (
              <DeliverySkeleton />
            ) : (
              <Delivery title="Pick-Up" iconColor="#3563E9" />
            )}
          </div>
          <div className="mobile:-my-2 laptop:my-0 z-10">
            <Button
              type="primary"
              variant="large"
              onClick={() => {}}
              iconOnly={<SwapIcon fill="white" />}
            />
          </div>
          <div className="border-0 rounded-2xl mobile:px-4 laptop:px-7 desktop:px-12 bg-white w-full">
            {loading ? (
              <DeliverySkeleton />
            ) : (
              <Delivery title="Drop-Off" iconColor="#54A6FF" />
            )}
          </div>
        </div>
        <div className="flex justify-between mt-9">
          <div className="text-[#90A3BF] px-5 py-2.5">Popular Car</div>
          <div className="text-[#3563E9] px-5 py-2.5">View All</div>
        </div>
        <div className="grid tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-8 mt-5 w-full">
          {loading || cars?.length === 0
            ? [0, 1, 2, 3].map((item) => <CardSkeleton key={item} />)
            : cars.map((item: any, i: number) => {
                return <CardVechile key={i} item={item} />;
              })}
        </div>
        <div className="flex justify-between mt-9">
          <div className="text-[#90A3BF] px-5 py-2.5">Recommendation Car</div>
        </div>
        <div className="grid tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-8 mt-5 w-full">
          {cars?.length === 0
            ? [0, 1, 2, 3].map((item) => <CardSkeleton key={item} />)
            : cars.map((item: any, i: number) => {
                return <CardVechile key={i} item={item} />;
              })}
        </div>
        <div className="w-full flex justify-center mobile:my-12 tablet:my-16">
          <div className="relative flex justify-between items-center">
            <Button
              text="Show more car"
              type="primary"
              variant={breakpoint === "mobile" ? "medium" : "large"}
              onClick={() => {}}
            />
          </div>
          <div className="flex items-center">
            <p className="absolute mobile:right-6 tablet:right-8 laptop:right-12 desktop:right-16 text-md text-[#90A3BF]">
              120 Car
            </p>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Homepage;
