"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useBreakpoint from "use-breakpoint";
import Button from "@/components/Button/index";
import Delivery from "@/components/Delivery";
import { useIcons } from "@/components/icons/use-icon";
import { BREAKPOINTS, urlParamsToArray } from "@/utils/helpers";
import CardVechile from "../../components/Card/index";
import Filter from "@/components/Search/Filter";
import DeliverySkeleton from "@/components/DeliverySkeleton";
import CardSkeleton from "@/components/Card/CardSkeleton";
import FilterSkeleton from "@/components/Search/FilterSkeleton";

const Search = (props: any) => {
  const [cars, setCars] = useState<any>([]);
  const [filters, setFilters] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const params = useSearchParams();
  const searchTerms = params.get("search");
  // const allParams: { [anyProp: string]: string } = {};
  const [allParams, setAllParams] = useState<{ [anyProp: string]: string }>({});

  params.forEach((value: any, key: any) => {
    // allParams[key] = value;

    setAllParams((prev) => ({ ...prev, [key]: value }));
  });

  console.log("*** all params: ", allParams);

  let allSearchTerms: any = Object.entries(allParams).map(function (value) {
    return value[0] + "=" + value[1];
  });

  if (allSearchTerms?.length > 1) allSearchTerms = allSearchTerms.join("&");
  else allSearchTerms = allSearchTerms.toString();

  console.log("*** allSearchTerms: ", allSearchTerms);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/search?search=${searchTerms}&${allSearchTerms || ""}`).then(
      async (res) => {
        const response = await res.json();
        console.log("search response: ", response);
        setTimeout(() => {
          setLoading(false);
          setCars(response.cars);
          // setFilters(response.filters);
        }, 3000);
      }
    );
  }, [searchTerms, allSearchTerms]);

  useEffect(() => {
    setLoading(true);
    let serviceFilterParamList: any = [];
    let allServiceParams = { ...allParams };

    if (allServiceParams) {
      // if (allParams?.search) delete allParams.search;
      serviceFilterParamList = urlParamsToArray(allServiceParams);
    }

    console.log("*** all: ", allServiceParams);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Filters`, {
      method: "POST",
      body: "",
    }).then(async (res) => {
      const response = await res.json();
      console.log("search response: ", response);
      setTimeout(() => {
        setLoading(false);
        // setCars(response.cars);
        // setFilters(response.filters);
      }, 3000);
    });
  }, [allParams]);

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

  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const { SwapIcon } = useIcons();
  return (
    <div className="flex h-full w-full justify-center">
      <div className="mobile:hidden laptop:block">
        {loading ? <FilterSkeleton /> : <Filter filters={filters} />}
      </div>
      <div className="mobile:px-6 laptop:px-8 flex-col items-center w-full">
        <div className="mt-8 laptop:flex desktop:flex-row mobile:flex mobile:flex-col w-full items-center laptop:gap-8 desktop:gap-8">
          <div className="border-0 rounded-2xl mobile:px-4 laptop:px-7 desktop:px-12 bg-white w-full">
            {loading ? (
              <DeliverySkeleton />
            ) : (
              <Delivery title="Pick-Up" iconColor="#3563E9" />
            )}
          </div>
          <div className="mobile:-my-2 desktop:my-0 z-10">
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
        <div className="grid tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 gap-8 mt-5 w-full">
          {loading
            ? [0, 1, 2].map((item) => <CardSkeleton key={item} />)
            : cars?.map((item: any, i: number) => {
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
    </div>
  );
};

export default Search;
