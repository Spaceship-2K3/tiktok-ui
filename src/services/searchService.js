import * as httpRequest from "~/utils/httpRequest";

export const search = async (q, type = "less") => {
    try {
        const res = await httpRequest.get(`users/search`, {
            // khong phai noi chuoi
            params: {
                q,
                type: "less",
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
