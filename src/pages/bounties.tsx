import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Head from "next/head";
import { CodeCell } from "@betteridea/codecell";

import { FaDiscord, FaGithub, FaGreaterThan, FaLessThan, FaLinkedin, FaTwitter, FaXTwitter } from "react-icons/fa6"
import { TbMailFilled } from "react-icons/tb"

import pattern from "@/assets/pattern.svg";
import ide from "@/assets/ide.png";
import apm from "@/assets/apm.png";
import apmcli from "@/assets/apmcli.png";
import codecell from "@/assets/codecell.png";
import logo from "@/assets/logo.png";
import mirror from "@/assets/mirror.png";
import logoFull from "@/assets/logo-full.png";


type TBounty = {
    title: string,
    description: string | JSX.Element,
    image: string | StaticImageData,
    issueLink: string,
    reward: string,
    completed?: boolean,
    solverProfile?: string
}

const bounties: TBounty[] = [
    {
        title: "Placeholder Bounty 1",
        description: "This is a sample bounty meant to check how things are looking, will soon be replaced with a real bounty :)",
        image: "https://via.placeholder.com/500",
        issueLink: "https://github.com/betteridea-dev/ide/issues/1",
        reward: "https://x.com/betteridea_dev"
    },
    {
        title: "Placeholder Bounty 2",
        description: "This is a sample bounty meant to check how things are looking, will soon be replaced with a real bounty :)",
        image: "https://via.placeholder.com/500",
        issueLink: "https://github.com/betteridea-dev/ide/issues/1",
        reward: "https://x.com/betteridea_dev"
    },
    {
        title: "Placeholder Bounty 3",
        description: "This is a sample bounty meant to check how things are looking, will soon be replaced with a real bounty :)",
        image: "https://via.placeholder.com/500",
        issueLink: "https://github.com/betteridea-dev/ide/issues/1",
        reward: "https://x.com/betteridea_dev"
    },
    {
        title: "Placeholder Bounty 4 ",
        description: "This is a sample bounty meant to check how things are looking, will soon be replaced with a real bounty :)",
        image: "https://via.placeholder.com/500",
        issueLink: "https://github.com/betteridea-dev/ide/issues/1",
        reward: "https://x.com/betteridea_dev",
        solverProfile: "7YLh_idJnODc4asRXtYt78btqCwwDw-6-DR7mb5G3wo",
        completed: true
    },
    {
        title: "Placeholder Bounty 5",
        description: "This is a sample bounty meant to check how things are looking, will soon be replaced with a real bounty :)",
        image: "https://via.placeholder.com/500",
        issueLink: "https://github.com/betteridea-dev/ide/issues/1",
        reward: "https://x.com/betteridea_dev",
        solverProfile: "7YLh_idJnODc4asRXtYt78btqCwwDw-6-DR7mb5G3wo",
        completed: true

    }
]

function Navbar() {
    const items = [
        // { name: "Home", href: "#home" },
        { name: "Products", href: "/#products" },
        { name: "Team", href: "/#team" },
        { name: "Contact", href: "/#contact" },
        { name: "Docs", href: "https://docs.betteridea.dev" },
    ]

    const latestActiveUrl = typeof window !== 'undefined' ? window.location.href : '';
    const activeUrl = latestActiveUrl.split('#')[1];

    return <div className="z-20 flex flex-row max-w-[90vw] w-fit items-center justify-center gap-1.5 p-3 rounded-full border border-foreground/40 mx-auto fixed left-0 right-0 top-5 bg-background/70 backdrop-blur">
        <Link href="/#home"><Image src={logo} alt="BetterIDEa" width={30} height={30} className="ml-3" /></Link>
        <div className="flex gap-1">
            {
                items.map(item => (
                    <Link href={item.href} key={item.name}>
                        <Button data-active={("#" + activeUrl).endsWith(item.href)} className="rounded-full px-4 h-6 text-sm data-[active=true]:bg-primary" variant="ghost">{item.name}</Button>
                    </Link>
                ))
            }
        </div>
    </div>
}

function Bounty(props: TBounty) {
    return <div className="mx-auto md:px-24 my-10">
        <div className="mx-10 md:mx-20 p-4 bg-gradient-to-b from-foreground/5 to-white rounded-xl">
            <div className="flex flex-col md:flex-row gap-5 items-start">
                <div className="aspect-square max-h-[269px]">
                    <Image src={props.image} alt={props.title} width={500} height={500} className="rounded-lg" />
                </div>
                <div className="md:w-1/2">
                    <div className="text-xl font-bold">{props.title}</div>
                    <div className="text-lg text-muted-foreground">{props.description}</div>
                    <div className="flex gap-2">
                        <Link href={props.issueLink} target="_blank" className="">
                            <Button className="mt-5 rounded-full text-foreground shadow-none">Issue <FaGreaterThan className="scale-x-50 ml-2" /></Button>
                        </Link>
                        <Link href={props.reward} target="_blank" className="">
                            <Button className="mt-5 rounded-full text-foreground shadow-none">Reward <FaGreaterThan className="scale-x-50 ml-2" /></Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function Solver(bounty: TBounty) {
    const profileId = bounty.solverProfile as string;
    const profileIdShort = profileId.slice(0, 6) + "..." + profileId.slice(-4);
    // fetch data fron bazar

    return <div className="aspect-square max-w-[269px] overflow-clip bg-primary/50 truncate rounded-xl p-10 flex flex-col gap-5 items-center justify-center">
        {/* profile pic placeholder */}
        <Image src={
            "https://via.placeholder.com/500"
        } alt="profile-pic" width={100} height={100} className="rounded-full aspect-square object-cover bg-white block" />
        <Link target="_blank" href={`https://bazar.ar.io/#/profile/${profileId}`}>{profileIdShort}</Link>
    </div>
}

export default function Home() {
    return (
        <main>
            <title>BetterIDEa</title>
            <Navbar />
            <div className="min-h-screen flex items-center" id="home">
                <Image src={pattern} alt="bg-grid" className="w-full h-[220px] object-bottom object-cover absolute top-0 -z-10" draggable={false} />
                <div className="mx-auto w-full z-10">
                    <div className="flex flex-col gap-4 items-center font-serif-display text-4xl md:text-6xl">
                        <div>Contribute & Collect Rewards</div>
                        <div className="flex items-center gap-5">w/ <span className="text-primary text-5xl md:text-7xl">BetterIDEa</span></div>
                    </div>
                </div>
                <Image src={pattern} alt="bg-grid" className="w-full h-[220px] object-bottom object-cover absolute bottom-0 -z-10 rotate-180" draggable={false} />
            </div>
            <div id="products" className="relative bottom-24"></div>
            <div className="bg-primary text-center p-5 text-2xl mb-20">Fix bugs or Add features and earn yourself a limited edition <strong>Atomic Asset</strong></div>

            {
                bounties.filter(bounty => !bounty.completed)
                    .map(bounty => (
                        <Bounty key={bounty.title} {...bounty} />
                    ))
            }

            <div className="mb-20" />
            <div id="team" className="relative bottom-24"></div>
            <div className="bg-primary text-center p-5 text-2xl">Previous Bounty Solvers</div>

            <div className="grid grid-flow-col gap-10 m-10 items-center justify-center">
                {
                    bounties.filter(bounty => bounty.completed)
                        .map(bounty => (
                            <Solver key={bounty.title} {...bounty} />
                        ))
                }
            </div>

            <div id="contact" className="relative bottom-24"></div>
            <div className="min-h-[80vh] flex flex-col items-center justify-center">
                <div className="text-center text-4xl font-serif-display">Follow us for latest updates!</div>
                <div className="flex gap-2 justify-between my-10 p-1">
                    <Link href="https://x.com/betteridea_dev" target="_blank"><Button variant="ghost" className="h-16 rounded-full"><FaXTwitter size={30} /></Button></Link>
                    <Link href="https://github.com/betteridea-dev" target="_blank"><Button variant="ghost" className="h-16 rounded-full"><FaGithub size={30} /></Button></Link>
                    <Link href="https://discord.gg/nm6VKUQBrA" target="_blank"><Button variant="ghost" className="h-16 rounded-full"><FaDiscord size={30} /></Button></Link>
                    <Link href="https://linkedin.com/company/betteridea-dev" target="_blank"><Button variant="ghost" className="h-16 rounded-full"><FaLinkedin size={30} /></Button></Link>
                    <Link href="https://mirror.xyz/7YLh_idJnODc4asRXtYt78btqCwwDw-6-DR7mb5G3wo" target="_blank"><Button variant="ghost" className="h-16 w-16 rounded-full p-3"><Image src={mirror} width={100} height={100} alt="mirror-logo" /></Button></Link>
                </div>
            </div>

            <footer className=" bg-foreground justify-between items-center text-background p-3 px-6 flex rounded-t">
                <div>
                    <div className="mx-auto w-fit flex items-center gap-2">
                        <Image src={logo} alt="BetterIDEa" width={30} height={30} />
                        <div className="text-xl font-serif-display">BetterIDEa</div>
                    </div>
                </div>
                <Link href="mailto:hello@betteridea.dev" target="_blank">
                    <div className="flex gap-2 items-center hover:underline underline-offset-4">
                        <TbMailFilled size={20} /> hello@betteridea.dev
                    </div>
                </Link>
            </footer>
        </main>
    );
}
