import Link from 'next/link';

export default function Navbar() {

    return (
      <nav className="navigation sticky bottom-0 text-black z-10 py-1 bg-white/90">
        <div className="h-14 max-w-7xl md:px-6 lg:px-8 mx-auto flex justify-center">
          <ul className="flex justify-between items-center space-x-4 p-5 md:space-x-6 text-sm font-medium w-full">
            <li className="nav-item flex p-2">
              <Link className="flex flex-col items-center" href="/progress">
                <img className="nav-icon" src="../../img/icons/progress.png" alt="Progress" />
                <span className="nav-text">Progress</span>
              </Link>
            </li>
            <li className="nav-item flex p-2">
              <Link className="flex flex-col items-center" href="/kudos">
                <img className="nav-icon" src="../../img/icons/kudos.png" alt="Kudos" />
                <span className="nav-text">Kudos</span>
              </Link>
            </li>
            <li className="nav-item flex p-2">
              <Link className="flex flex-col items-center" href="/">
                <img className="home-icon" src="../../img/icons/lulu.png" alt="home" />
              </Link>
            </li>
            <li className="nav-item flex p-2">
              <Link className="flex flex-col items-center" href="/modules">
                <img className="nav-icon" src="../../img/icons/modules.png" alt="Modules" />
                <span className="nav-text">Modules</span>
              </Link>
            </li>
            <li className="nav-item flex p-2">
              <Link className="flex flex-col items-center" href="/account">
                <img className="nav-icon" src="../../img/icons/account.png" alt="Account" />
                <span className="nav-text">Account</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  