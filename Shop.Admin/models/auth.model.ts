import axios from "axios";
import {IAuthRequisites} from "@Shared/types";
import {API_HOST} from "./const";

export async function verifyRequisites(
    requisites: IAuthRequisites
): Promise<boolean> {
    try {
        console.log("check requisites " + `${API_HOST}/auth`);
        const {status} = await axios.post(
            `${API_HOST}/auth`,
            requisites
        );
        console.log("requisites checked with status: " + status);

        return status === 200;
    } catch (e) {
        return false;
    }
}