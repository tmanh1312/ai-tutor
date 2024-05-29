import Link from 'next/link';

export default function ABC() {
    return (
        <div className="container">
            <h2 className="main-header">Module 3: ABC Pant Utilitech</h2>
            <div className="completion-bar mb-3">
                <div className='flex justify-between items-center'>
                    <h3>100%</h3>
                    <h3>50 mins / 1 hour</h3>
                </div>
                <div className="w-full bg-lulu-100 rounded-lg h-2"></div>
                <p className="font-bold font-xs">Complete</p>
            </div>
            <div className="py-5">
                <h3 className="module-header">Section 1</h3>
                <p className="text-xl">The Lululemon ABC Pant Utilitech seamlessly blends functionality with style, incorporating Anti-Ball Crushing technology for unmatched comfort. Crafted from durable, moisture-wicking fabric, it supports a wide range of motion and is ideal for both active pursuits and daily wear. The design prioritizes versatility and performance, making it a staple in any wardrobe. Its utilitarian features offer practicality.</p>
            </div>
            <div className="py-5">
                <h3 className="module-header">Section 2</h3>
                <div className="flex flex-wrap">
                    <img className="py-1" src="/img/module/pants/abcvid.png" alt="ABC Pant Utilitech" />
                    <img className="w-1/2 pt-1 pr-1" src="/img/module/pants/abc1.png" alt="ABC Pant Utilitech" />
                    <img className="w-1/2 pt-1 pl-1" src="/img/module/pants/abc2.png" alt="ABC Pant Utilitech" />
                </div>
            </div>
            <div className="py-5 flex">
                <Link className="justify-center m-auto" href="/quiz/test">
                    <input type="submit" className="p-4 bg-lulu-100 text-white font-bold rounded-md" value="Scenario Questions" />
                </Link>
            </div>

        </div>
    );
}