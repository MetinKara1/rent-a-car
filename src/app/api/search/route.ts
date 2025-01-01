import { NextRequest, NextResponse } from "next/server";
import { cars, filters } from "../../../utils/database";


export const GET = (request: NextRequest, response: NextResponse) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const search = searchParams.get("search");

    const type = searchParams.get("type");
    const capacity = searchParams.get("capacity");
    const price = searchParams.get("price");

    let filterCars: any = cars.filter(x => x.searchKey.includes(search || ""));
    let selectedFilters: any = filters;

    if (type) {
        console.log("type: ", type);
        let result: any = [];
        if (type.includes("_")) {
            let typeArr = type.split("_");
        
            for (let i = 0; i < filterCars.length; i++) {
                for (let k = 0; k < typeArr.length; k++) {
                    if (filterCars[i].type.toLowerCase() === typeArr[k]) {
                        result.push(filterCars[i]);
                    }
                }
            }

            filterCars = result;
        } else {
            filterCars = filterCars.filter((x: any) => x.type.toLowerCase() === type);
        }

        selectedFilters = filters.map(item => {
            if (item.title.toLowerCase() === "type") {
                let updateItem: any = item.list.map(x => {
                    if (type.includes("_")) {
                        if (type.split("_").find(k => k === x.text.toLowerCase())) {
                            console.log("xxxx: ", x);
                            x.is_selected = true;
                            return x;
                        } else {
                            x.is_selected = false;
                            return x
                        }
                    } else if (x.text.toLowerCase() === type) {
                        console.log("2 x: ", x);
                        x.is_selected = true;
                        return x;
                    } else {
                        x.is_selected = false;
                        return x;
                    };
                });

                updateItem = {
                    ...item,
                    list: updateItem
                }
                return updateItem;
            }
            return item
        });

        console.log("selected filters: ", selectedFilters[0].list);
    }
    if (capacity) {
        let encodeText = encodeURI(capacity);

        let result: any = [];
        if (capacity.includes("_")) {
            let typeArr = capacity.split("_");
            console.log("filter cars length: ", filterCars);
        
            for (let i = 0; i < filterCars.length; i++) {
                for (let k = 0; k < typeArr.length; k++) {
                    if (encodeURI(filterCars[i].capacity).toLowerCase() === encodeURI(typeArr[k]).toLowerCase()) {
                        result.push(filterCars[i]);
                    }
                }
            }

            filterCars = result;
        } else {
            filterCars = filterCars.filter((x: any) => {
                if (encodeURI(x.capacity).toLowerCase() === encodeText) {
                    return x;
                }
            });
        }

        selectedFilters = filters.map(item => {
            if (item.title.toLowerCase() === "capacity") {
                let updateItem: any = item.list.map(x => {
                    if (capacity.includes("_")) {
                        if (capacity.split("_").find(k => encodeURI(k).toLowerCase() === encodeURI(x.text).toLowerCase())) {
                            console.log("xxxx: ", x);
                            x.is_selected = true;
                            return x;
                        } else {
                            x.is_selected = false;
                            return x
                        }
                    } else if (x.text.toLowerCase() === capacity) {
                        console.log("2 x: ", x);
                        x.is_selected = true;
                        return x;
                    } else {
                        x.is_selected = false;
                        return x;
                    };
                });

                updateItem = {
                    ...item,
                    list: updateItem
                }
                return updateItem;
            }
            return item
        });
    }
    if (price) {
        console.log("price: ", price);
        filterCars = filterCars.filter((x: any) => x.price === price);
    }

    const data = {
        cars: filterCars,
        filters: selectedFilters
    }

    return NextResponse.json(data, {
        status: 200
    })
}