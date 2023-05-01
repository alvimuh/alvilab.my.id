import { alvilabAPI } from "../../utils/axios";

const fetchBookmark = async () => {
  try {
    const res = await alvilabAPI.get("/bookmark");
    console.log("🚀 ~ file: api.js:6 ~ fetchBookmark ~ res:", res);
    return res.data.data;
  } catch (error) {
    //error handler
    console.log(error);
    throw new Error("Failed to get bookmark");
  }
};

export { fetchBookmark };
