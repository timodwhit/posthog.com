import cntl from 'cntl'
import Accordion from 'components/Accordion'
import Link from 'components/Link'
import Logo from 'components/Logo'
import React from 'react'
import { IProps, LinkListItem } from './LinkList'
import { GitHub, LinkedIn, YouTube, SlackMonochrome, Twitter } from 'components/Icons/Icons'

const linklist: IProps[] = [
    {
        title: 'Products',
        url: '/products/product-analytics',
        items: [
            {
                title: 'Product analytics',
                url: '/product-analytics',
            },
            {
                title: 'Session replay',
                url: '/session-replay',
            },
            {
                title: 'Feature flags',
                url: '/feature-flags',
            },
            {
                title: 'A/B testing',
                url: '/ab-testing',
            },
            {
                title: 'Product OS',
                url: '/product-os',
            },
            {
                title: 'Data connections',
                url: '/cdp',
            },
            {
                title: 'Apps',
                url: '/apps',
            },
            {
                title: 'Customer stories',
                url: '/customers',
            },
            {
                title: 'PostHog vs...',
                url: '/blog/tags/comparisons',
            },
            {
                title: 'Pricing',
                url: '/pricing',
            },
        ],
    },
    {
        title: 'Docs',
        url: '/docs',
        items: [
            {
                title: 'Start here',
                url: '/docs/getting-started/start-here',
            },
            {
                title: 'Install PostHog',
                url: '/docs/getting-started/install',
            },
            {
                title: 'Send events',
                url: '/docs/getting-started/send-events',
            },
            {
                title: 'Integrations',
                url: '/docs/integrations',
            },
            {
                title: 'Build an app',
                url: '/docs/apps/build',
            },
            {
                title: 'API',
                url: '/docs/api',
            },
            {
                title: 'Webhooks',
                url: '/docs/webhooks',
            },
        ],
    },
    {
        title: 'Using PostHog',
        url: '/using-posthog',
        items: [
            {
                title: 'Product analytics',
                url: '/docs/product-analytics/',
            },
            {
                title: 'Session recording',
                url: '/docs/session-replay',
            },
            {
                title: 'Feature flags',
                url: '/docs/feature-flags',
            },
            {
                title: 'A/B testing',
                url: '/docs/experiments',
            },
            {
                title: 'Data',
                url: '/docs/data',
            },
            {
                title: 'Apps',
                url: '/docs/apps',
            },
            {
                title: 'Tutorials',
                url: '/tutorials',
            },
            {
                title: 'Tracks',
                url: '/tracks',
            },
        ],
    },
    {
        title: 'Community',
        url: '/questions',
        items: [
            {
                title: 'Questions?',
                url: '/questions',
            },
            {
                title: 'Product roadmap',
                url: '/roadmap',
            },
            {
                title: 'Contributors',
                url: '/contributors',
            },
            {
                title: 'Newsletter',
                url: 'https://newsletter.posthog.com',
            },
            {
                title: 'Merch',
                url: 'https://merch.posthog.com',
            },
            {
                title: 'PostHog FM',
                url: 'https://open.spotify.com/playlist/7A2H2J3WhpJmMEwAhKahWH?si=47418915a8d0447b',
            },
            {
                title: 'PostHog on GitHub',
                url: 'https://github.com/PostHog/posthog',
            },
            {
                title: 'Startups',
                url: '/startups',
            },
        ],
    },
    {
        title: 'Handbook',
        url: '/handbook',
        items: [
            {
                title: 'Getting started',
                url: '/handbook/getting-started/start-here',
            },
            {
                title: 'Company',
                url: '/handbook/company/story',
            },
            {
                title: 'Strategy',
                url: '/handbook/strategy/overview',
            },
            {
                title: 'How we work',
                url: '/handbook/company/culture',
            },
            {
                title: 'Small teams',
                url: '/handbook/small-teams/team-structure',
            },
            {
                title: 'People & Ops',
                url: '/handbook/people/compensation',
            },
            {
                title: 'Engineering',
                url: '/handbook/engineering/developing-locally',
            },
            {
                title: 'Product',
                url: '/handbook/product/product-team',
            },
            {
                title: 'Design',
                url: '/handbook/design/philosophy',
            },
            {
                title: 'Marketing',
                url: '/handbook/growth/marketing',
            },
            {
                title: 'Customer success',
                url: '/handbook/growth/strategy',
            },
        ],
    },
    {
        title: 'Company',
        url: '/about',
        items: [
            {
                title: 'About',
                url: '/about',
            },
            {
                title: 'Team',
                url: '/handbook/company/team',
            },
            {
                title: 'Investors',
                url: '/handbook/strategy/investors',
            },
            {
                title: 'Press',
                url: '/media',
            },
            {
                title: 'Blog',
                url: '/blog',
            },
            {
                title: 'FAQ',
                url: '/faq',
            },
            {
                title: 'Support',
                url: '/questions',
            },
            {
                title: 'Careers',
                url: '/careers',
            },
        ],
    },
]

const linksHeadingSm = cntl`
    text-base
    text-gray
    dark:text-gray
    mb-1
    leading-tight
    pb-[0.2rem]
`
const linksHeadingMd = cntl`
    text-lg
    mb-5
    leading-tight
`

const linksHeadingLg = cntl`
    text-xl flex
    justify-between
    items-center
    leading-tight
    mb-5
`

const link = (marginBottom = '1') => cntl`
    leading-tight
    text-primary
    hover:text-primary
    dark:text-primary-dark
    dark:hover:text-white
    text-base
    font-bold
    mb-${marginBottom}
    inline-block
`

const FooterMenuItem = ({ title, url, className = '', marginBottom = '1' }) => {
    return (
        <li className={className}>
            <Link className={link(marginBottom)} to={url}>
                {title}
            </Link>
        </li>
    )
}

export function Footer(): JSX.Element {
    const social: Social[] = [
        {
            Icon: <SlackMonochrome className="w-8 h-8 box-border fill-current" />,
            url: '/slack',
        },
        {
            Icon: <Twitter className="w-8 h-8 box-border fill-current" />,
            url: 'https://twitter.com/posthog',
        },
        {
            Icon: (
                <span className="fill-current">
                    <LinkedIn className="w-8 h-8 box-border" />
                </span>
            ),
            url: 'https://www.linkedin.com/company/posthog',
        },
        {
            Icon: (
                <span className="fill-current">
                    <YouTube className="w-8 h-8 box-border" />
                </span>
            ),
            url: 'https://www.youtube.com/channel/UCn4mJ4kK5KVSvozJre645LA',
        },
        {
            Icon: (
                <span className="fill-current">
                    <GitHub className="w-8 h-8 box-border" />
                </span>
            ),
            url: 'https://github.com/PostHog',
        },
    ]

    return (
        <footer className="">
            <div className="relative -top-6">
                <Link
                    to="/"
                    className="left-[calc(50%-40px)] w-20 h-12 inline-flex justify-center items-center absolute z-10 rounded bg-light dark:bg-dark px-2 pt-1.5 pb-1 mb-1 border border-b-3 border-light dark:border-dark hover:bg-accent dark:hover:bg-accent-dark hover:translate-y-[-1px] active:translate-y-[1px] active:transition-all"
                >
                    <span className="inline-block">
                        <Logo noText={true} />
                    </span>
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full max-w-screen-2xl mx-auto border-t border-light dark:border-dark">
                {linklist.map((item) => (
                    <LinkListItem {...item} key={item.url} />
                ))}
            </div>

            <div className="flex lg:border-t border-gray-accent-light dark:border-gray-accent-dark border-dashed justify-center">
                <ul className="list-none px-0 py-2 flex space-x-4">
                    {social.map(({ Icon, url }: Social) => {
                        return (
                            <li key={url}>
                                <Link
                                    to={url}
                                    className="rounded p-2 inline-flex opacity-70 hover:opacity-90 relative hover:scale-[1.01] active:top-[1px] active:scale-[.99] transition-all"
                                >
                                    {Icon}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="py-5  border-l-0 border-r-0">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center text-lg px-5">
                    <small className="font-semibold dark:text-gray">
                        &copy; {new Date().getFullYear()} PostHog, Inc.
                    </small>
                    <ul className="m-0 p-0 list-none sm:ml-auto flex sm:space-x-8 space-x-4 mt-2 sm:mt-0">
                        <li>
                            <Link
                                to="https://status.posthog.com"
                                className="font-bold text-sm text-primary/70 hover:text-primary/90 dark:text-primary-dark dark:hover:text-primary-dark"
                            >
                                System status
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/handbook/company/security#soc-2"
                                className="font-bold text-sm text-primary/70 hover:text-primary/90 dark:text-primary-dark dark:hover:text-primary-dark"
                            >
                                SOC 2
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/privacy"
                                className="font-bold text-sm text-primary/70 hover:text-primary/90 dark:text-primary-dark dark:hover:text-primary-dark"
                            >
                                Privacy policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/terms"
                                className="font-bold text-sm text-primary/70 hover:text-primary/90 dark:text-primary-dark dark:hover:text-primary-dark"
                            >
                                Terms
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
