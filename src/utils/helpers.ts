export const BREAKPOINTS = { mobile: 0, tablet: 768, laptop: 1024, desktop: 1280 };

export const urlParamsToArray = (params: {}) => {
    let urlParamList: any = [];
    Object.entries(params).map((item: any) => {
        let filterValue = null;
        if (item[1]?.includes("_")) filterValue = item[1].split("_");
        else filterValue = [item[1]];
        urlParamList.push({ field: item[0], values: filterValue });
      });

      return urlParamList;
}