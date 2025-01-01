"use client";
import React from "react";
import { useIcons } from "../icons/use-icon";
import Image from "next/image";
import Button from "../Button/index";
import { BREAKPOINTS } from "@/utils/helpers";
import useBreakpoint from "use-breakpoint";
import { useRouter } from "next/navigation";

interface CardProps {
  searchKey: string;
  name: string;
  type: string;
  imageUrl: string;
  gas: string;
  capacity: number;
  steering: string;
  price: string;
}

const Card = (props: { item: CardProps }) => {
  const { item } = props;
  console.log("nameee:", name);
  const { HeartIcon, GasStationIcon, ManualCarIcon, TwoUserIcon } = useIcons();
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const router = useRouter();
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-between border-0 rounded-xl bg-white mobile:p-4 tablet:p-6 w-full h-full">
        <div>
          <div className="flex justify-between">
            <p className="font-bold text-lg">{item?.name}</p>
            <div className="cursor-pointer">
              <HeartIcon fill="#ED3F3F" />
            </div>
          </div>
          <p className="font-bold text-sm text-[#90A3BF]">{item?.type}</p>
        </div>
        <div>
          <div
            className="mobile:flex mobile:flex-row tablet:flex tablet:flex-col mt-[50px] cursor-pointer"
            onClick={() => router.push(`/car-detail/${item.searchKey}`)}
          >
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={breakpoint === "mobile" ? 160 : 248}
              height={breakpoint === "mobile" ? 64 : 100}
              priority
            />
            <div className="mobile:flex mobile:flex-col tablet:flex tablet:flex-row justify-between tablet:mt-9 mobile:ml-[50px] tablet:ml-0 text-[#90A3BF] text-sm">
              <div className="flex items-center gap-[6px]">
                <GasStationIcon />
                <p className="mobile:text-xs tablet:text-md">{item.gas}</p>
              </div>
              <div className="flex items-center gap-[6px]">
                <ManualCarIcon />
                <p className="mobile:text-xs tablet:text-md">{item.steering}</p>
              </div>
              <div className="flex items-center gap-[6px]">
                <TwoUserIcon />
                <p className="mobile:text-xs tablet:text-md">{item.capacity}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center">
              <p className="text-md font-bold">{item.price} /</p>
              <p className="text-sm text-[#90A3BF]">day</p>
            </div>
            <div>
              <Button
                text="Rent Now"
                variant="medium"
                type="primary"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
