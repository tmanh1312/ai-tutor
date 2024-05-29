import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import ProgressBar from '../../components/ProgressBar';

export default function Modules() {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <input type="text" className="rounded-md h-9 w-80 bg-gray-100 border-none" placeholder="Search" />
                <RxHamburgerMenu size={25} />
            </div>
            <div className="modules mt-5">
                <h2 className='module-header'>Joggers</h2>
                <div className="module mb-6">
                    <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
                        <div className="h-16 bg-lulu-100"></div>
                        <div className="px-5 py-3 h-24">
                            <div className="font-bold text-lg">City Sweat Jogger English</div>
                            <p className="text-gray-700 text-xs">
                                Built for comfort, the city sweat joggers is perfect for staying indoors, but also stylish enough to step out.
                            </p>
                        </div>
                        <div className="px-6 pb-2">
                            <ProgressBar progress={0} />
                        </div>
                    </div>
                </div>
                <div className="module mb-6">
                    <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
                        <div className="h-16 bg-lulu-100"></div>
                        <div className="px-5 py-3 h-24">
                            <div className="font-bold text-lg">Surge Jogger</div>
                            <p className="text-gray-700 text-xs">
                                The Surge Joggers is perfect for a daily run or lounging around the house. 
                            </p>
                        </div>
                        <div className="px-6 pb-2">
                            <ProgressBar progress={0} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modules mt-5">
                <h2 className='module-header'>Trousers</h2>
                <Link href="/modules/module3/abc">
                    <div className="module mb-6">
                        <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
                            <div className="h-16 bg-lulu-100"></div>
                            <div className="px-5 py-3 h-24">
                                <div className="font-bold text-lg">ABC Pants Warpstreme</div>
                                <p className="text-gray-700 text-xs">
                                    The ABC pants warpstreme has an ergonimc gusset that removes tension from the crotch of the pants.
                                </p>
                            </div>
                            <div className="px-6 pb-2">
                                <ProgressBar progress={5} />
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="module mb-6">
                    <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
                        <div className="h-16 bg-lulu-100"></div>
                        <div className="px-5 py-3 h-24">
                            <div className="font-bold text-lg">ABC Pant Utilitech</div>
                            <p className="text-gray-700 text-xs">
                                The ABC Pant Utilitech offers more texture and structure, but provides all-day comfort and unrestricted movement. 
                            </p>
                        </div>
                        <div className="px-6 pb-2">
                            <ProgressBar progress={0} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modules mt-5">
                <h2 className='module-header'>Short</h2>
                <div className="module mb-6">
                    <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
                        <div className="h-16 bg-lulu-100"></div>
                        <div className="px-5 py-3 h-24">
                            <div className="font-bold text-lg">Bowline Short</div>
                            <p className="text-gray-700 text-xs">
                                The Bowline Short is water-repellent and abrasion-resistant.
                            </p>
                        </div>
                        <div className="px-6 pb-2">
                            <ProgressBar progress={0} />
                        </div>
                    </div>
                </div>
                <div className="module mb-6">
                    <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
                        <div className="h-16 bg-lulu-100"></div>
                        <div className="px-5 py-3 h-24">
                            <div className="font-bold text-lg">Commission Short</div>
                            <p className="text-gray-700 text-xs">
                                The commission Short is has an erogonomix gusset that removes tension from the crotch of the pants and also inhibits growth of odour-causing bacteria. 
                            </p>
                        </div>
                        <div className="px-6 pb-2">
                            <ProgressBar progress={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 