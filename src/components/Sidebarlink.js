import { useRouter } from "next/router";


export default function Sidebarlink({ Icon, text, active }) {
    const router = useRouter();
    return (
        <div
            className={`flex items-center justify-center xl:justify-start text-xl space-x-3 hover:first-letter: ${active && "font-bold"}`}
            onClick={() => {
                if (router.pathname.includes('/alerts')) {
                    router.push('/alerts')
                }
                if (router.pathname.includes('/ledger')) {
                    router.push('/ledger')
                }
                if (router.pathname.includes('/profile')) {
                    router.push('/profile')
                } else {
                    router.push('/')
                }
            }

            }>
            <Icon className="h-7 fill-white" />
            <span className="hidden xl:inline text-[#d9d9d9]">{text}</span>
        </div>
    )
}