import Link from 'next/link'
import Image from 'next/image'
import ventoux from '../../public/images/mont-ventoux.jpg'

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                    <img
                        className="h-11"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Discover the European col to ride
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Analyze and prepare your next ride to one of the col in Europe.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Link
                            href="https://google.com"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </Link>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Discover a col randomly <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <Image
                                src={ventoux}
                                width={1200}
                                height={1200}
                                alt="Mont-Ventoux"
                                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
