import { ReactElement } from "react"

export default function Tab({ label, children }: TabProp) {
    return (
        <>{children}</>
    )
}

export type TabProp = {
    label: string,
    children: ReactElement | ReactElement[]
}
