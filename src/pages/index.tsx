import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Head from "next/head";
import { CodeCell } from "@betteridea/codecell";
import { useState, useEffect } from "react";
import { FaGreaterThan } from "react-icons/fa6";

import { FaDiscord, FaGithub, FaLessThan, FaLinkedin, FaTwitter, FaXTwitter } from "react-icons/fa6"
import { TbMailFilled } from "react-icons/tb"

import pattern from "@/assets/pattern.svg";
import ide from "@/assets/ide.png";
import apm from "@/assets/apm.png";
import apmcli from "@/assets/apmcli.png";
import codecell from "@/assets/codecell.png";
import logo from "@/assets/logo.png";
import mirror from "@/assets/mirror.png";
import arnode from "@/assets/arnode.png";
import aoxpress from "@/assets/aoxpress.png";
import luax from "@/assets/luax.png";


type TProduct = {
  heading: string,
  title: string,
  description: string | JSX.Element,
  image: string | StaticImageData,
  link: string
}

const products: TProduct[] = [
  {
    heading: "Web IDE",
    title: "Web IDE for seamless DevX on AO",
    description: "Build faster, smarter, and more efficiently with BetterIDEa, the ultimate native web IDE for AO development",
    image: ide,
    link: "https://ide.betteridea.dev"
  },
  {
    heading: "ArNode",
    title: "High performance arweave gateway",
    description: "with great gateways come great decentralisation",
    image: arnode,
    link: "https://arnode.asia"
  },
  {
    heading: "AO Package Manager",
    title: "Package Manager for AO",
    description: "Discover, install, and manage packages with ease",
    image: apm,
    link: "https://apm.betteridea.dev"
  },
  {
    heading: "LUA Code Cells",
    title: "Portable Code Cells for AO",
    description: <div>Run and share code snippets in any webapp<CodeCell cellId="x" appName="BetterIDEa-Landing" nowallet height="120px" className="mx-auto mt-3" code={`-- This is a live codecell,\n-- try clicking the run button\nprint("Hello AO!")`} /></div>,
    image: codecell,
    link: "https://www.npmjs.com/package/@betteridea/codecell"
  },
  {
    heading: "APM CLI Tool",
    title: "Command Line Interface for APM",
    description: "Manage your AO packages from the terminal",
    image: apmcli,
    link: "https://www.npmjs.com/package/apm-tool"
  },
  {
    heading: "aoxpress + aofetch",
    title: "Easy and familiar syntax for devs",
    description: "Express like syntax for defining handlers and calling them from frontend",
    image: aoxpress,
    link: "https://github.com/ankushKun/aoxpress"
  }, {
    heading: "LuaX",
    title: "JSX for Lua",
    description: "Write JSX like syntax in Lua and serve them using aoxpress",
    image: luax,
    link: "https://github.com/ankushKun/aoxpress/tree/main/luax"
  }
]

function Navbar() {
  const items = [
    { name: "Products", href: "#products" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
    { name: "Docs", href: "https://docs.betteridea.dev" },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const latestActiveUrl = typeof window !== 'undefined' ? window.location.href : '';
  const activeUrl = latestActiveUrl.split('#')[1];

  return <div className="z-20 flex flex-row max-w-[90vw] w-fit items-center justify-center gap-1.5 p-3 rounded-full border border-foreground/40 mx-auto fixed left-0 right-0 top-5 bg-background/70 backdrop-blur">
    <Link href="/#home"><Image src={logo} alt="BetterIDEa" width={30} height={30} className="ml-3" /></Link>
    <div className="flex gap-1">
      {
        items.map(item => (
          <Link href={item.href} key={item.name} onClick={(e) => handleClick(e, item.href)}>
            <Button data-active={("#" + activeUrl).endsWith(item.href)} className="rounded-full px-4 h-6 text-sm data-[active=true]:bg-primary" variant="ghost">{item.name}</Button>
          </Link>
        ))
      }
    </div>
  </div>
}

function Product({ heading, title, description, image, link }: {
  heading: string,
  title: string,
  description: string | JSX.Element,
  image: string | StaticImageData,
  link: string
}) {
  return <div className="mx-auto md:px-24">
    <div className="text-3xl font-serif-display text-center flex gap-3 items-center relative p-5 px-10 md:px-20 pt-20">{heading} <div className="h-[1px] bg-foreground/30 grow" /></div>
    <div className="mx-10 md:mx-20 p-4 bg-gradient-to-b from-foreground/5 to-white rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="aspect-square relative">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-xl font-bold">{title}</div>
          <div className="text-lg text-muted-foreground">{description}</div>
          <Link href={link} target="_blank">
            <Button className="mt-5 rounded-full text-foreground hover:scale-105 transition-transform">Try it yourself <FaGreaterThan className="scale-x-50 ml-2" /></Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 rounded-full bg-primary text-background transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <FaGreaterThan className="rotate-[-90deg]" />
    </button>
  );
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
            <div>Build the future on <i>AO</i></div>
            <div className="flex items-center gap-5">w/ <span className="text-primary text-5xl md:text-7xl">BetterIDEa</span></div>
            {/* <Link href="/bounties" className="text-xl mt-5 hover:bg-primary/50 rounded-full p-2 px-8 font-sans">Checkout Bounties</Link> */}
          </div>
        </div>
        <Image src={pattern} alt="bg-grid" className="w-full h-[220px] object-bottom object-cover absolute bottom-0 -z-10 rotate-180" draggable={false} />
      </div>
      <div id="products" className="relative bottom-24"></div>
      <div className="bg-primary text-center p-5 text-2xl">A suite of tools to accelerate your development on AO</div>

      {
        products.map(product => <Product key={product.title} {...product} />)
      }

      <div className="mb-20" />
      <div id="team" className="relative bottom-24"></div>
      <div className="bg-primary text-center p-5 text-2xl">Embrace the Permaweb - Start building with BetterIDEa</div>

      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center text-4xl font-serif-display">The Team</div>
        <div className="mx-auto w-fit flex flex-col items-center my-5">
          <Image src="/founder.png" alt="Ankush" className="rounded-full border" width={120} height={120} draggable={false} />
          <div className="text-3xl flex items-center gap-2">Ankush</div>
          <div className="-mt-1 mb-1 text-muted-foreground flex items-center gap-2">Founder</div>
          <div className="font-serif-display flex items-center gap-2 my-2">
            <Link href="https://x.com/ankushKun_" target="_blank"><FaXTwitter size={20} /></Link>
            <Link href="https://linkedin.com/in/ankushKun" target="_blank"><FaLinkedin size={20} /></Link>
            <Link href="https://github.com/ankushKun" target="_blank"><FaGithub size={20} /></Link>
          </div>
        </div>
      </div>

      <div id="contact" className="relative bottom-24"></div>
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <div className="text-center text-4xl font-serif-display">Follow us for latest updates!</div>
        <div className="flex gap-2 justify-between my-10 p-1">
          <Link href="https://x.com/betteridea_dev" target="_blank"><Button variant="ghost" className="h-16 rounded-full"><FaXTwitter size={30} /></Button></Link>
          <Link href="https://github.com/betteridea-dev" target="_blank"><Button variant="ghost" className="h-16 rounded-full"><FaGithub size={30} /></Button></Link>
          <Link href="https://discord.gg/nm6VKUQBrA" target="_blank"><Button variant="ghost" className="h-16 rounded-full"><FaDiscord size={30} /></Button></Link>
          <Link href="https://linkedin.com/company/betteridea-dev" target="_blank"><Button variant="ghost" className="h-16 rounded-full"><FaLinkedin size={30} /></Button></Link>
          <Link href="https://mirror.xyz/0xCf673b87aFBed6091617331cC895376209d3b923" target="_blank"><Button variant="ghost" className="h-16 w-16 rounded-full p-3"><Image src={mirror} width={100} height={100} alt="mirror-logo" /></Button></Link>
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
      <ScrollToTop />
    </main>
  );
}
