import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="divide-y">
      <div className="justify-center items-center">
        <h1 className="text-center py-4 header-text">Home</h1>
      </div>
      <main className="p-5">
        <div className="text-lulu-100 text-2xl font-bold">Welcome, <br />Michael!</div>
        <h3 className="general-header mt-4">Upcoming Modules</h3>

        <div className="grid grid-cols-2">
          <Link href="/modules/module3">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-black m-3 h-28">
              <div className="h-1/2"></div>
              <div className="h-1/2 font-bold text-xl mb-2 text-center bg-gray-400/50 items-center rounded-lg">
                <p className="card-header text-white">Module 3</p>
              </div>
            </div>
          </Link>
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-lulu-100 m-3 h-28">
            <div className="h-1/2"></div>
            <div className="h-1/2 font-bold text-xl mb-2 text-center bg-red-300/50 items-center rounded-lg">
              <p className="card-header text-white">Module 4</p>
            </div>
          </div>
        </div>
        <div className="w-auto block mt-4">
          <h3 className="general-header">Kudos Overview</h3>
          {/* <span class="float-right inline"><p>View All</p></span> */}
        </div>
        <div className="my-4 mb-4 py-4 bg-gray-100 rounded-lg h-40 shadow-inner">
          <div className='kudo-home flex h-14 m-auto p-2 w-[22rem] mb-3'>
            <img src='img/icons/avatar.png' className='w-10 h-10 mr-3' alt='avatar' />
            <div className=''>
              <p className="font-bold">Marie M. just completed module 2</p>
              <small className="text-xs text-gray-300 align-top">1 min ago.</small>
            </div>
          </div>
          <div className='kudo-home flex h-14 m-auto p-2 w-[22rem]'>
            <img src='img/icons/avatar.png' className='w-10 h-10 mr-3' alt='avatar' />
            <div className=''>
              <p className="font-bold">Sidney J. just completed module 1</p>
              <small className="text-xs text-gray-300 align-top">3 min ago.</small>
            </div>
          </div>
        </div>
        <div className=""><img src="img/lp.png" alt="Learning Progress" className="w-full" /></div>
      </main>
    </div>
  )
}
