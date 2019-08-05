import axios from "axios";

// 获取时间的接口
export const getTime = () => {
	return axios.get("/api/getTime", {});
};
