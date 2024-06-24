import { Dispatch, SetStateAction } from "react";

export interface LoginProp {
    setToken: Dispatch<SetStateAction<string | undefined>>
}
