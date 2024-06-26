import { ReactElement, useState } from "react"
import TabButton from "./TabButton"
import { TabProp } from "./Tab"
import './Tabs.css'

export default function Tabs({ children }: TabsProp) {
    const [activeTab, setActiveTab] = useState<number>(0)

    return (
        <div className='tabs'>
            <ul>
                {children.map((elem, index) => (
                    <TabButton 
                        key={elem.props.label}
                        index={index}
                        label={elem.props.label}
                        isActive={activeTab === index}
                        setActiveTab={setActiveTab}
                    />
                ))}
            </ul>

            {children[activeTab]}
        </div>
    )
}

type TabsProp = {
    children: ReactElement<TabProp>[]
}
