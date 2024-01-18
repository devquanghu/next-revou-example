import { Navbar } from "@/components"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Layout = ({ children } : Props) => {

    return (
        <>
            <Navbar />
            <div className="lg:py-4 px-6">
                {children}
            </div>
        </>
    )
}

export default Layout