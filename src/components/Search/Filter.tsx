"use client";
import React, { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Checkbox from "../Checkbox/index";
import Skeleton from "../Skeleton/index";

const Filter = ({ filters }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  console.log("filters: ", filters);
  const [loading, setLoading] = useState(false);
  const skeletonArr = [
    {
      id: 1,
      list: [
        {
          item: 1,
        },
        {
          item: 2,
        },
        {
          item: 3,
        },
        {
          item: 4,
        },
        {
          item: 5,
        },
      ],
    },
    {
      id: 2,
      list: [
        {
          item: 1,
        },
        {
          item: 2,
        },
        {
          item: 3,
        },
        {
          item: 4,
        },
        {
          item: 5,
        },
      ],
    },
    {
      id: 3,
      list: [
        {
          item: 1,
        },
        {
          item: 2,
        },
        {
          item: 3,
        },
        {
          item: 4,
        },
        {
          item: 5,
        },
      ],
    },
  ];
  const [filterList, setFilterList] = useState([
    {
      id: 1,
      filterName: "TYPE",
      list: [
        {
          id: 1,
          name: "Sport",
          selected: true,
        },
        {
          id: 2,
          name: "SUV",
          selected: false,
        },
        {
          id: 3,
          name: "MPV",
          selected: false,
        },
        {
          id: 4,
          name: "Sedan",
          selected: true,
        },
        {
          id: 5,
          name: "Coupe",
          selected: true,
        },
        {
          id: 7,
          name: "Hatchback",
          selected: true,
        },
      ],
    },
    {
      id: 2,
      filterName: "CAPACITY",
      list: [
        {
          id: 1,
          name: "2 Person",
          selected: true,
        },
        {
          id: 2,
          name: "4 Person",
          selected: false,
        },
        {
          id: 3,
          name: "6 Person",
          selected: true,
        },
        {
          id: 4,
          name: "8 Person",
          selected: false,
        },
      ],
    },
  ]);

  const onFilterClick = (title: string, text: string, id: number) => {
    const searchParams = new URLSearchParams(params.toString());
    if (params.toString().includes(title.toLowerCase())) {
      let newTitle = params.get(title.toLowerCase());
      let newTitleValue: string = "";
      if (newTitle?.includes(text.toLowerCase())) {
        if (newTitle.includes("_")) {
          let titleValuesArr = newTitle.split("_");
          titleValuesArr = titleValuesArr.filter(
            (x: any) => x !== text.toLowerCase()
          );
          newTitleValue = titleValuesArr.join("_");
        }
      } else {
        newTitleValue = newTitle + "_" + text.toLowerCase();
      }

      searchParams.set(title.toLowerCase(), newTitleValue);

      router.push(pathname + "?" + searchParams);
    } else {
      searchParams.set(title.toLowerCase(), text.toLowerCase());
      router.push(pathname + "?" + searchParams);
    }
  };

  return (
    <div className="border-0 min-w-[360px] h-full bg-white">
      <div className="pl-8 pt-8">
        {loading
          ? skeletonArr.map((item, id) => (
              <div
                className="flex flex-col gap-4 h-full items-between mb-6"
                key={id}
              >
                <Skeleton
                  baseColor="#85A8F8"
                  highlightColor="#EFF3FD"
                  borderRadius={50}
                  count={1}
                  wrapClassName="w-1/4"
                />
                {item.list.map((item, id) => (
                  <div key={id} className="flex gap-4">
                    <Skeleton
                      baseColor="#85A8F8"
                      highlightColor="#EFF3FD"
                      borderRadius={50}
                      count={1}
                      wrapClassName="w-4"
                    />
                    <Skeleton
                      baseColor="#85A8F8"
                      highlightColor="#EFF3FD"
                      borderRadius={50}
                      count={1}
                      wrapClassName="w-1/3"
                    />
                  </div>
                ))}
              </div>
            ))
          : filters.map((item: any, i: number) => {
              return (
                <div key={i}>
                  <p className="text-xs text-[#90A3BF] mb-7">{item.title}</p>
                  {item.filterTypes.map((filterItem: any) => {
                    return (
                      <div
                        className="mb-8"
                        key={filterItem.id}
                        onClick={() =>
                          onFilterClick(
                            item.title,
                            filterItem.text,
                            filterItem.id
                          )
                        }
                      >
                        <Checkbox
                          label={filterItem.text}
                          count={10}
                          value={filterItem.is_selected}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Filter;
