import { IconInfo } from '@posthog/icons'
import Tooltip from 'components/Tooltip'
import React from 'react'

type Tab = {
    title: React.ReactNode
    subtitle: React.ReactNode
    icon: React.ReactNode
    tooltip?: strong
}

export default function Tabs({
    tabs,
    onClick,
    activeTab,
    vertical,
    size = 'lg',
}: {
    tabs: []
    onClick: (tab: Tab[], index: number) => void
    activeTab?: number
    vertical?: boolean
    size?: 'sm' | 'lg'
}): JSX.Element {
    return (
        <ul
            className={`m-0 p-0 list-none flex ${
                vertical ? 'space-y-2 flex-col' : 'space-x-2 justify-between items-center'
            }`}
        >
            {tabs.map((tab, index) => {
                const active = activeTab === index
                return (
                    <button
                        onClick={() => onClick?.(tab, index)}
                        key={`${tab.title}-${index}`}
                        className={`click ${
                            size === 'sm' ? 'py-1 px-2' : 'py-3 px-4'
                        } rounded-md hover:bg-accent dark:hover:bg-accent-dark border ${vertical ? '' : 'flex-1'} ${
                            active ? 'bg-accent border-border dark:border-dark' : 'border-white/0'
                        }`}
                    >
                        <div className="flex items-start space-x-2">
                            {tab.icon && <div>{tab.icon}</div>}
                            <div className="text-left">
                                <h3
                                    className={`m-0 ${
                                        size === 'sm' ? 'text-base' : 'text-lg'
                                    } leading-tight flex space-x-1 items-center`}
                                >
                                    <span>{tab.title}</span>
                                    {tab.tooltip && (
                                        <Tooltip
                                            content={tab.tooltip}
                                            tooltipClassName="max-w-[300px]"
                                            placement="right"
                                        >
                                            <span className="relative">
                                                <IconInfo className="w-4 h-4" />
                                            </span>
                                        </Tooltip>
                                    )}
                                </h3>
                                <p className="m-0 mt-0.5 text-sm">{tab.subtitle}</p>
                            </div>
                        </div>
                    </button>
                )
            })}
        </ul>
    )
}
