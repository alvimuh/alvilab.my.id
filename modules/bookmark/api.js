import { alvilabAPI } from "../../utils/axios";

const fetchBookmark = async () => {
  try {
    const res = await alvilabAPI.get("/bookmark");
    return res.data.data.sort(function (x, y) {
      // true values first
      return x.is_pinned ? 0 : x ? -1 : 1;
      // false values first
      // return (x === y)? 0 : x? 1 : -1;
    });
  } catch (error) {
    //error handler
    throw new Error("Failed to get bookmark");
  }
};

const postNewVisitor = async (data) => {
  try {
    const res = await alvilabAPI.post(`/bookmark/${data.slug}/new-visitor`);
    return true;
  } catch (error) {
    throw new Error("Failed to record new visitor");
  }
};

export { fetchBookmark, postNewVisitor };
