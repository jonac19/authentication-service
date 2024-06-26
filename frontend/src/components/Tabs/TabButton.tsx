import './Tabs.css'

export default function TabButton({ index, label, isActive, setActiveTab }: TabButtonProp) {
    const handleTabTitleClick = () => {
        setActiveTab(index)
    }

    return (
        <li className={`tab-button-container ${isActive ? 'active' : ''}`}>
            <button onClick={handleTabTitleClick}>{label}</button>
        </li>
    )
}

export type TabButtonProp = {
    index: number,
    label: string,
    isActive: boolean,
    setActiveTab: (index: number) => void
}
