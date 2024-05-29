// import './modulestyle.css'
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import ProgressBar from '../components/ProgressBar';

export default function Modules() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <input type="text" className="rounded-md h-9 w-80 bg-gray-100 border-none" placeholder="Search" />
        <RxHamburgerMenu size={25} />
      </div>
      <div className='my-6'>
        <h2 className="module-header">Modules Overview</h2>
        <div className='columns-3 mt-5'>
          <div className="max-w-sm rounded-md overflow-hidden bg-gray-200 divide-y divide-black">
            <div className="px-2.5 pt-3 h-20">
              <div className="font-bold text-lg">3</div>
              <p className="text-black text-xs">Total Modules</p>
            </div>
            <div className="px-2.5 py-2 flex justify-between items-center h-9">
              <p className='text-xs text-left'>See details</p>
              <img className='align-middle r-arrow' src="img/icons/barrow.png" />
            </div>
          </div>
          <div className="max-w-sm rounded-md overflow-hidden bg-black divide-y divide-white">
            <div className="px-2.5 pt-3 h-20">
              <div className="font-bold text-lg text-white">2</div>
              <p className="text-white text-xs">Completed Modules</p>
            </div>
            <div className="px-2.5 py-2 flex justify-between items-center h-9">
              <p className='text-xs text-left text-white'>See details</p>
              <img className='align-middle r-arrow' src="img/icons/warrow.png" />
            </div>
          </div>
          <div className="max-w-sm rounded-md overflow-hidden bg-lulu-100 divide-y divide-white">
            <div className="px-2.5 pt-3 h-20">
              <div className="font-bold text-lg text-white">1</div>
              <p className="text-white text-xs">Incomplete Modules</p>
            </div>
            <div className="px-2.5 py-2 flex justify-between items-center h-9">
              <p className='text-xs text-left text-white'>See details</p>
              <img className='align-middle r-arrow' src="img/icons/warrow.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="modules">
        <h2 className='module-header'>Continue Modules (3)</h2>
        <div className="module mb-6">
          <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
            {/* <img className="w-full" src="/img/banners/module1.png" alt="" /> */}
            <div className="h-16 bg-lulu-100"></div>
            <div className="px-5 py-3 h-24">
              <div className="font-bold text-lg">Module 1: Guest Experience</div>
              <p className="text-gray-700 text-xs">
                This module trains Lululemon Educators in delivering exceptional service, enhancing the overall shopping experience.
              </p>
            </div>
            <div className="px-6 pb-2">
              <ProgressBar progress={100} />
            </div>
          </div>
        </div>
        <div className="module mb-6">
          <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
            {/* <img className="w-full" src="/img/banners/module1.png" alt="" /> */}
            <div className="h-16 bg-lulu-100"></div>
            <div className="px-5 py-3 h-24">
              <div className="font-bold text-lg">Module 2: Store Operations</div>
              <p className="text-gray-700 text-xs">
                This module covers essential daily store management tasks and operational skills for enhancing store performance.
              </p>
            </div>
            <div className="px-6 pb-2">
              <ProgressBar progress={100} />
            </div>
          </div>
        </div>
        <Link href="/modules/module3">
          <div className="module mb-6">
            <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
              {/* <img className="w-full" src="/img/banners/module1.png" alt="" /> */}
              <div className="h-16 bg-lulu-100"></div>
              <div className="px-5 py-3 h-24">
                <div className="font-bold text-lg">Module 3: Men's Pants</div>
                <p className="text-gray-700 text-xs">
                  This module covers the features and benefits of Lululemon's pant options.
                </p>
              </div>
              <div className="px-6 pb-2">
                <ProgressBar progress={5} />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
} 