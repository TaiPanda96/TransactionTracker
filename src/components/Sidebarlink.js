import { useRouter } from "next/router";
export default function Sidebarlink({ Icon, text, active }) {
    const router = useRouter();
    return (
        <div
            className={`flex items-center justify-center xl:justify-start text-xl space-x-3 hover:first-letter: ${active && "font-bold"
                }`}
            onClick={() => active && router.push("/")}
        >
            <Icon className="h-7 fill-white"/>
            <span className="hidden xl:inline text-white">{text}</span>
        </div>
    )
}