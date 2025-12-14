import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Download, HomeIcon, Save } from 'lucide-react'

const Header = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/">
                        {/* <Image
                            src="/logo.png"
                            alt="Logo"
                            width={50}
                            height={50}
                        /> */}
                        <HomeIcon className="w-6 h-6" />
                    </Link>
                    <h1 className="text-2xl font-bold ml-2">Modern Resume Builder</h1>
                </div>
                <div className="flex items-center gap-2 justify-end">
                    <div>
                        Theams
                    </div>
                    <div className="flex items-center gap-2 border border-white p-2 rounded-md">
                        <span><Download /></span>
                        Download Pdf
                    </div>
                    <div className="flex items-center gap-2 border border-white p-2 rounded-md">
                        Save
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header