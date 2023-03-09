import { TrackedCTA } from 'components/CallToAction/index.tsx' // TEMP
import { Browser, Cloud, Lightning, Prohibited, ServerLocked, WebCode } from 'components/Icons/Icons'
import { Plan } from 'components/Pricing/PricingTable/Plan'
import { SEO } from 'components/seo'
import Intro from 'components/SignUp/Intro'
import Layout from 'components/SignUp/Layout'
import React from 'react'
import Link from 'components/Link'
import { CloudIcon, SelfHostIcon } from 'components/Pricing/Calculator'

export const Feature = ({ children }) => {
    return <li className="flex space-x-3 items-start font-semibold text-[15px] text-opacity-75">{children}</li>
}

export const Scales = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
                <path
                    d="M6.04275 16.7665L16.7665 6.04275C16.8487 5.96052 16.8487 5.82729 16.7665 5.74506C16.727 5.70558 16.6727 5.6842 16.6168 5.6842H12.6333C12.1678 5.6842 11.7912 5.30756 11.7912 4.8421C11.7912 4.37664 12.1678 4 12.6333 4H19.1579C19.6234 4 20 4.37664 20 4.8421V11.3667C20 11.8322 19.6234 12.2088 19.1579 12.2088C18.6924 12.2088 18.3158 11.8322 18.3158 11.3667V7.38318C18.3158 7.26641 18.222 7.17266 18.1053 7.17266C18.0494 7.17266 17.9967 7.19404 17.9572 7.23351L7.23351 17.9572C7.15128 18.0395 7.15128 18.1727 7.23351 18.2549C7.27298 18.2944 7.32726 18.3158 7.38318 18.3158H11.3667C11.8322 18.3158 12.2088 18.6924 12.2088 19.1579C12.2088 19.6234 11.8322 20 11.3667 20H4.8421C4.37663 20 4 19.6234 4 19.1579V12.6333C4 12.1678 4.37664 11.7912 4.8421 11.7912C5.30756 11.7912 5.6842 12.1678 5.6842 12.6333V16.6168C5.6842 16.7336 5.77795 16.8273 5.89473 16.8273C5.95065 16.8273 6.00328 16.806 6.04275 16.7665V16.7665Z"
                    fill="black"
                />
            </g>
        </svg>
    )
}

export const Tracking = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
                <path
                    d="M20.88 6.77995C23.1994 9.16776 24.1529 12.5671 23.4158 15.8138C22.679 19.0593 20.351 21.7135 17.2284 22.8657C14.1045 24.0188 10.6106 23.5145 7.94159 21.526C7.4541 21.1501 7.3641 20.4507 7.74002 19.9632C8.11595 19.4757 8.81534 19.3857 9.30283 19.7617C10.9191 21.0573 12.9938 21.6367 15.047 21.3676C17.1011 21.0985 18.9564 20.0035 20.1835 18.3357C21.4116 16.6669 21.9066 14.5706 21.5532 12.5298C21.1997 10.4889 20.0288 8.68047 18.3122 7.52176C17.3137 6.81114 16.1559 6.35737 14.94 6.20176C12.9328 5.93269 10.9012 6.47737 9.29707 7.71395C8.81333 8.08143 8.1252 7.99333 7.74926 7.51613C7.37333 7.03894 7.44926 6.34801 7.91989 5.96458C9.34115 4.85552 11.0418 4.16365 12.8324 3.9649V2.66458H11.6587C11.3465 2.66177 11.0484 2.52771 10.8393 2.29426C10.6303 2.06176 10.529 1.75145 10.5599 1.4402C10.6321 0.858943 11.1309 0.426751 11.7168 0.437071H16.212C16.5261 0.437071 16.8261 0.569258 17.037 0.801751C17.2479 1.03519 17.3511 1.34549 17.3211 1.65862C17.2479 2.23988 16.7492 2.67207 16.1642 2.66175H15.0476V3.96301C17.2564 4.21049 19.3132 5.20426 20.8799 6.78013L20.88 6.77995ZM18.1771 10.6199C18.4387 10.2984 18.4143 9.8315 18.1209 9.53901C17.8283 9.24556 17.3615 9.2212 17.0399 9.48276L14.2058 11.76C13.3489 11.6362 12.5098 12.075 12.1226 12.8484C11.7354 13.6218 11.8864 14.5565 12.4986 15.1687C13.1098 15.78 14.0445 15.9318 14.818 15.5447C15.5914 15.1565 16.0301 14.3175 15.9073 13.4615L18.1845 10.6199L18.1771 10.6199ZM8.52455 11.2799C9.05516 11.2799 9.48455 10.8506 9.48455 10.3199C9.48455 9.78933 9.05516 9.35995 8.52455 9.35995H1.19975C0.66913 9.35995 0.239746 9.78933 0.239746 10.3199C0.239746 10.8506 0.66913 11.2799 1.19975 11.2799H8.52455ZM8.52455 12.7799H3.00455C2.47487 12.7799 2.04455 13.2093 2.04455 13.7399C2.04455 14.2706 2.47487 14.6999 3.00455 14.6999H8.52455C9.05516 14.6999 9.48455 14.2706 9.48455 13.7399C9.48455 13.2093 9.05516 12.7799 8.52455 12.7799ZM9.48455 17.1506C9.48455 16.8956 9.38329 16.6518 9.20329 16.4718C9.02328 16.2918 8.77955 16.1906 8.52455 16.1906H4.49975C3.96913 16.1906 3.53975 16.62 3.53975 17.1506C3.53975 17.6803 3.96913 18.1106 4.49975 18.1106H8.52455C8.77955 18.1087 9.02329 18.0065 9.20235 17.8256C9.38142 17.6446 9.4808 17.4 9.47984 17.1459L9.48455 17.1506Z"
                    fill="black"
                />
                <path
                    d="M9.48456 17.1507C9.48456 16.8957 9.38331 16.6519 9.20331 16.4719C9.0233 16.2919 8.77956 16.1907 8.52456 16.1907H4.49976C3.96915 16.1907 3.53976 16.6201 3.53976 17.1507C3.53976 17.6804 3.96915 18.1107 4.49976 18.1107H8.52456C8.77956 18.1088 9.02331 18.0066 9.20237 17.8257C9.38143 17.6447 9.48082 17.4001 9.47986 17.146L9.48456 17.1507Z"
                    fill="black"
                />
                <path
                    opacity="0.6"
                    d="M8.52455 12.78H3.00456C2.47488 12.78 2.04456 13.2094 2.04456 13.74C2.04456 14.2706 2.47488 14.7 3.00456 14.7H8.52455C9.05517 14.7 9.48455 14.2706 9.48455 13.74C9.48455 13.2094 9.05517 12.78 8.52455 12.78Z"
                    fill="black"
                />
                <path
                    d="M8.52458 11.28C9.05519 11.28 9.48458 10.8506 9.48458 10.32C9.48458 9.78937 9.05519 9.35999 8.52458 9.35999H1.19978C0.669161 9.35999 0.239777 9.78937 0.239777 10.32C0.239777 10.8506 0.669161 11.28 1.19978 11.28H8.52458Z"
                    fill="black"
                />
            </g>
        </svg>
    )
}

export const Automatic = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
                <path
                    d="M17.4336 10.2622H13.6423L15.8745 2.29446C16.0189 1.81446 15.3945 1.50227 15.0823 1.88666L6.10583 12.5902C5.86583 12.878 6.05801 13.3346 6.44144 13.3346H10.2337L8.00149 21.3023C7.85712 21.7823 8.48149 22.0945 8.79368 21.7101L17.7937 11.0056C18.0337 10.7178 17.8181 10.2622 17.4337 10.2622L17.4336 10.2622Z"
                    fill="black"
                />
            </g>
        </svg>
    )
}

export const EasyDeploy = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
                <path
                    d="M7.52735 5.00012C7.23667 4.99594 6.95711 5.10443 6.74711 5.30331L3.15744 8.58702L1.88625 7.37283H1.88486C1.67068 7.16838 1.38419 7.05851 1.08792 7.06546C0.791678 7.07381 0.510733 7.19898 0.306291 7.41317C0.103234 7.62735 -0.00664256 7.91526 0.000311029 8.21149C0.0086557 8.50774 0.133829 8.78868 0.349404 8.99173L2.38556 10.9124C2.80837 11.313 3.46763 11.3185 3.89738 10.9277L8.25076 6.94428C8.59429 6.63969 8.71529 6.15428 8.55535 5.72453C8.3954 5.29339 7.98629 5.00571 7.52735 5.00012ZM11.576 6.99455C11.2755 6.98759 10.9863 7.10164 10.7721 7.31165C10.5579 7.52027 10.4383 7.80816 10.4383 8.1072C10.4383 8.40624 10.5579 8.69411 10.7721 8.90275C10.9863 9.11276 11.2756 9.22681 11.576 9.21985H22.8637H22.8623C23.1613 9.22681 23.452 9.11276 23.6648 8.90275C23.879 8.69413 24 8.40624 24 8.1072C24 7.80816 23.879 7.52029 23.6648 7.31165C23.452 7.10164 23.1613 6.98759 22.8623 6.99455H11.576ZM7.54412 13.3226C7.50239 13.3212 7.46206 13.3226 7.42033 13.3267C7.16721 13.349 6.93077 13.4561 6.74719 13.6313L3.1561 16.9081L1.88491 15.6995C1.67073 15.4964 1.38424 15.3851 1.08797 15.3935C0.791729 15.4004 0.510782 15.5256 0.30634 15.7398C0.103283 15.9554 -0.00659231 16.2419 0.000361283 16.5381C0.00870595 16.8344 0.133878 17.1153 0.349454 17.3184L2.38561 19.2391V19.2404C2.80981 19.6382 3.46907 19.641 3.89743 19.2488L8.25081 15.2739C8.59712 14.9721 8.72229 14.4881 8.56652 14.0569C8.40936 13.6244 8.0031 13.3323 7.54412 13.3226ZM11.4688 15.3239C10.8652 15.3671 10.4048 15.8844 10.4341 16.488C10.4633 17.093 10.9695 17.5645 11.5759 17.5492H22.8637H22.8623C23.1613 17.5562 23.452 17.4421 23.6648 17.2321C23.879 17.0235 24 16.7356 24 16.4366C24 16.1376 23.879 15.8511 23.6648 15.641C23.452 15.431 23.1613 15.317 22.8623 15.3239H11.5745H11.5759C11.5398 15.3225 11.505 15.3226 11.4688 15.3239Z"
                    fill="black"
                />
            </g>
        </svg>
    )
}

export const Access = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
                <path
                    d="M21.4286 0H2.57143C1.15178 0 0 1.15178 0 2.57143V21.4286C0 22.8482 1.15178 24 2.57143 24H21.4286C22.8482 24 24 22.8482 24 21.4286V2.57143C24 1.15178 22.8482 0 21.4286 0ZM2.57143 1.71429H21.4286C21.6557 1.71429 21.8743 1.80428 22.035 1.965C22.1957 2.12571 22.2857 2.34428 22.2857 2.57142V6.85713H1.71427V2.57142C1.71427 2.09784 2.09784 1.71427 2.57142 1.71427L2.57143 1.71429ZM21.4286 22.2857H2.57143C2.09785 22.2857 1.71429 21.9022 1.71429 21.4286V8.57143H22.2857V21.4286C22.2857 21.6557 22.1957 21.8743 22.035 22.035C21.8743 22.1957 21.6557 22.2857 21.4286 22.2857L21.4286 22.2857Z"
                    fill="black"
                />
                <path
                    d="M4.28572 5.14287H5.14286C5.61644 5.14287 6 4.75931 6 4.28573C6 3.81215 5.61644 3.42859 5.14286 3.42859H4.28572C3.81213 3.42859 3.42857 3.81215 3.42857 4.28573C3.42857 4.75931 3.81213 5.14287 4.28572 5.14287Z"
                    fill="black"
                />
                <path
                    d="M8.57142 5.14287H9.42856C9.90215 5.14287 10.2857 4.75931 10.2857 4.28573C10.2857 3.81215 9.90215 3.42859 9.42856 3.42859H8.57142C8.09784 3.42859 7.71428 3.81215 7.71428 4.28573C7.71428 4.75931 8.09784 5.14287 8.57142 5.14287Z"
                    fill="black"
                />
                <path
                    d="M8.32071 12.2507C7.98427 11.926 7.44963 11.9314 7.11857 12.2614C6.78858 12.5925 6.7832 13.1271 7.10786 13.4635L9.07394 15.4285L7.10893 17.3935H7.10785C6.94285 17.5532 6.84857 17.7728 6.84643 18.0032C6.84428 18.2325 6.93536 18.4543 7.09714 18.6171C7.26 18.7789 7.48177 18.87 7.71107 18.8679C7.94143 18.8657 8.16107 18.7714 8.32073 18.6064L10.8922 16.035C11.2265 15.6996 11.2265 15.1575 10.8922 14.8221L8.32071 12.2507Z"
                    fill="black"
                />
                <path
                    d="M16.2857 17.1428H12.8571C12.3836 17.1428 12 17.5264 12 18C12 18.4735 12.3836 18.8571 12.8571 18.8571H16.2857C16.7593 18.8571 17.1429 18.4735 17.1429 18C17.1429 17.5264 16.7593 17.1428 16.2857 17.1428Z"
                    fill="black"
                />
            </g>
        </svg>
    )
}

export const Bypass = () => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
                <path
                    d="M3.67671 21.2288C3.67671 22.5771 4.48835 23.7921 5.73502 24.3088C6.98003 24.8238 8.41332 24.5388 9.36666 23.5855C10.32 22.6321 10.605 21.1988 10.09 19.9538C9.57334 18.7072 8.35833 17.8955 7.00998 17.8955C5.16999 17.8972 3.67833 19.3888 3.67667 21.2288L3.67671 21.2288ZM9.01001 21.2288C9.01001 22.0371 8.52336 22.7671 7.77503 23.0771C7.02837 23.3854 6.16839 23.2154 5.59504 22.6438C5.02339 22.0704 4.85336 21.2104 5.16171 20.4638C5.47171 19.7154 6.20171 19.2288 7.01002 19.2288C8.11334 19.2305 9.00835 20.1255 9.01001 21.2288Z"
                    fill="black"
                />
                <path
                    d="M3.8717 2.03748C3.7467 2.16248 3.6767 2.33248 3.6767 2.50916C3.6767 2.68584 3.7467 2.85582 3.8717 2.98084L6.06667 5.17581L3.8717 7.37079C3.74336 7.49579 3.67003 7.66579 3.66836 7.84413C3.6667 8.02413 3.7367 8.19579 3.86336 8.32246C3.99003 8.44913 4.1617 8.51913 4.3417 8.51746C4.52003 8.5158 4.69003 8.44246 4.81504 8.31413L7.01001 6.11916L9.20499 8.31413C9.46665 8.56579 9.8833 8.56246 10.14 8.3058C10.3966 8.04913 10.4 7.63248 10.1483 7.3708L7.95334 5.17583L10.1483 2.98085C10.4 2.71919 10.3966 2.30254 10.14 2.04586C9.88332 1.7892 9.46666 1.78586 9.20499 2.03753L7.01001 4.2325L4.81504 2.03753C4.69004 1.91253 4.52004 1.84253 4.34336 1.84253C4.16668 1.84253 3.9967 1.91253 3.87168 2.03753L3.8717 2.03748Z"
                    fill="black"
                />
                <path
                    d="M14.5383 24.3669C14.6633 24.4919 14.8333 24.5619 15.01 24.5619C15.1867 24.5619 15.3566 24.4919 15.4817 24.3669L17.6766 22.1719L19.8716 24.3669C20.1333 24.6186 20.5499 24.6152 20.8066 24.3586C21.0633 24.1019 21.0666 23.6852 20.8149 23.4236L18.62 21.2286L20.8149 19.0336C21.0666 18.772 21.0633 18.3553 20.8066 18.0986C20.5499 17.842 20.1333 17.8386 19.8716 18.0903L17.6766 20.2853L15.4817 18.0903C15.22 17.8386 14.8034 17.842 14.5467 18.0986C14.29 18.3553 14.2867 18.7719 14.5383 19.0336L16.7333 21.2286L14.5383 23.4236C14.4133 23.5486 14.3433 23.7186 14.3433 23.8952C14.3433 24.0719 14.4133 24.2419 14.5383 24.3669L14.5383 24.3669Z"
                    fill="black"
                />
                <path
                    d="M13.6764 13.2288C16.2531 13.2255 18.3399 11.1388 18.3433 8.56195V2.83868L19.8716 4.36699C20.1333 4.61865 20.5499 4.61532 20.8066 4.35866C21.0633 4.10199 21.0666 3.68534 20.8149 3.42366L18.1483 0.757011C18.0233 0.632011 17.8533 0.562012 17.6766 0.562012C17.4999 0.562012 17.3299 0.632011 17.2049 0.757011L14.5383 3.42366C14.2866 3.68533 14.2899 4.10197 14.5466 4.35866C14.8033 4.61532 15.2199 4.61865 15.4816 4.36699L17.0099 2.83868V8.56195C17.0083 10.4019 15.5166 11.8936 13.6766 11.8953H11.0099C9.34331 11.8986 7.80497 12.7869 6.96828 14.2286C6.87162 14.3819 6.84161 14.5669 6.88662 14.7436C6.92995 14.9186 7.04328 15.0686 7.19995 15.1603C7.35494 15.2503 7.54328 15.2736 7.71659 15.2236C7.88993 15.1736 8.03659 15.0553 8.12159 14.8953C8.7199 13.8653 9.81826 13.2303 11.0099 13.2286L13.6764 13.2288Z"
                    fill="black"
                />
            </g>
        </svg>
    )
}

export default function SignUp() {
    return (
        <Layout
            crumbs={[
                {
                    title: 'Get started',
                },
            ]}
        >
            <SEO title="Get started - PostHog" />
            <section>
                <Intro title="How do you want to run PostHog?" />
                <div className="border-t border-b border-dashed border-gray-accent-light">
                    <div className="grid md:grid-cols-2 max-w-screen-lg mx-auto md:divide-x-1 divide-y-1 md:divide-y-0 divide-dashed divide-gray-accent-light">
                        <Plan
                            icon={<CloudIcon className="w-7 h-7" />}
                            title="PostHog Cloud"
                            subtitle="SaaS solution managed by the PostHog core team"
                            badge="Self-Serve"
                        >
                            <div className="flex flex-col h-full">
                                <div className="py-3 my-4 border-y border-gray-accent-light border-dashed">
                                    <span className="text-lg font-bold">Free</span>{' '}
                                    <span className="text-black/75 font-bold text-sm">for 1 million events/mo</span>
                                    <span className="text-black/50 text-sm font-medium block">then $0.00045/event</span>
                                </div>
                                <ul className="p-0 list-none grid gap-4 mt-0 mb-9">
                                    <Feature>
                                        <Scales />
                                        <span>Scales automatically</span>
                                    </Feature>
                                    <Feature>
                                        <Tracking className="w-7 h-7" />
                                        <span>Start tracking events immediately</span>
                                    </Feature>
                                    <Feature>
                                        <Automatic className="w-7 h-7" />
                                        <span>Automatic upgrades</span>
                                    </Feature>
                                </ul>
                                <TrackedCTA
                                    className="mt-auto"
                                    href="https://app.posthog.com/signup"
                                    size="md"
                                    event={{ name: `clicked Continue`, type: 'cloud' }}
                                >
                                    Sign up for PostHog Cloud
                                </TrackedCTA>
                                <p className="text-[13px] text-center mt-4 mb-0 min-h-[40px]">
                                    <span className="font-semibold">Enterprise plan available</span> with advanced
                                    permissioning, proactive support, training, SSO/SAML.{' '}
                                    <Link to="/signup/cloud/enterprise">Contact sales</Link>
                                </p>
                            </div>
                        </Plan>
                        <Plan
                            icon={<SelfHostIcon className="w-7 h-7" />}
                            title="Self-host"
                            subtitle="Customer data never leaves your infrastructure"
                        >
                            <div className="flex flex-col h-full">
                                <div className="py-3 my-4 border-y border-gray-accent-light border-dashed">
                                    <span className="text-lg font-bold">Free</span>{' '}
                                    <span className="text-black/75 font-bold text-sm">for 1 million events/mo</span>
                                    <span className="block text-black/50 text-sm font-medium">then $0.00045/event</span>
                                </div>
                                <ul className="p-0 list-none grid gap-4 mt-0 mb-9">
                                    <Feature>
                                        <EasyDeploy className="w-7 h-7" />
                                        <span>Easy deploy for most private cloud platforms</span>
                                    </Feature>
                                    <Feature>
                                        <Access className="w-7 h-7" />
                                        <span>Full access to production instance</span>
                                    </Feature>
                                    <Feature>
                                        <Bypass className="w-7 h-7" />
                                        <span>Capture up to 30% more events by bypassing ad blockers</span>
                                    </Feature>
                                </ul>
                                <TrackedCTA
                                    to="/docs/self-host"
                                    className="mt-auto"
                                    size="md"
                                    event={{ name: `clicked Continue`, type: 'self-hosted' }}
                                >
                                    Select your edition
                                </TrackedCTA>
                                <p className="text-[13px] text-center mt-4 mb-0 min-h-[40px] flex justify-center">
                                    3 editions available
                                </p>
                            </div>
                        </Plan>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
