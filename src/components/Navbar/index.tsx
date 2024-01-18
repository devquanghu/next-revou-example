import Link from "next/link"

const Navbar = () => {

    return (
        <nav className="lg:px-16 px-6 bg-white shadow-md flex flex-wrap items-center lg:py-4 py-2">
            <div className="flex-1 flex justify-between items-center">
                {/* <a href="/" className="flex text-lg font-semibold">
                    <img
                    src="https://dev.rz-codes.com/static/logo-275e932fd817cc84d99d91f7519a9a22.svg"
                    width="50"
                    height="50"
                    className="p-2"
                    alt="Rz Codes Logo"
                    />
                    <div className="mt-3 text-red-600">Rz Codes</div>
                </a> */}
            </div>
            <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
            <svg
                className="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
            >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />
            <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
                <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
                    <li className="py-2 lg:py-0 ">
                        <Link passHref href={'/post'} className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400">
                            {'POST'}
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        </nav>
    )
}

export default Navbar