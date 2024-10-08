"use client";
import Menu from "@/components/Profile/Menu/Menu";
import React, { useState } from "react";
import DetailRental from "@/components/Profile/DetailRental/DetailRental";
import Top5CarRentals from "@/components/Profile/Top5CarRental/Top5CarRental";
import RecentTransactions from "@/components/Profile/RecentTransaction/RecentTransaction";
import MenuSkeleton from "@/components/Profile/Menu/MenuSkeleton";
import DetailRentalSkeleton from "@/components/Profile/DetailRental/DetailRentalSkeleton";
import Top5CarRentalSkeleton from "@/components/Profile/Top5CarRental/Top5CarRentalSkeleton";
import RecentTransactionSkeleton from "@/components/Profile/RecentTransaction/RecentTransactionSkeleton";

const Page = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="h-full">
      <div className="mobile:flex mobile:flex-col laptop:flex laptop:flex-row w-full">
        <div className="mobile:hidden laptop:block max-w-[286px] w-full">
          {loading ? <MenuSkeleton /> : <Menu />}
        </div>
        <div className="mobile:flex mobile:flex-col desktop:flex desktop:flex-row w-full desktop:gap-8">
          <div className="mobile:m-6 laptop:mx-8 desktop:mr-0 bg-white border-0 rounded-xl">
            {loading ? <DetailRentalSkeleton /> : <DetailRental />}
          </div>
          <div>
            <div className="mobile:m-6 laptop:mx-8 desktop:ml-0 bg-white border-0 rounded-xl h-fit">
              {loading ? <Top5CarRentalSkeleton /> : <Top5CarRentals />}
            </div>
            <div className="mobile:m-6 laptop:mx-8 desktop:ml-0 bg-white border-0 rounded-xl h-fit">
              {loading ? <RecentTransactionSkeleton /> : <RecentTransactions />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
