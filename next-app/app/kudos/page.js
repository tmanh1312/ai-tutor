import './modulestyle.css'
export default function Kudos() {
    return (
        <div className='kudoContainer'>
            <div className='kudoBox flex h-auto'>
                <img src='img/icons/avatar.png' className='w-10 h-10 mr-3' alt='avatar' />
                <div className='kudoInfo'>
                    <p>Marie M. just completed module 2</p>
                    <small>3 min ago.</small>
                </div>
            </div>
            <div className='kudoBox flex'>
                <img src='img/icons/avatar.png' className='w-10 h-10 mr-3' alt='avatar' />
                <div className='kudoInfo'>
                    <p>Marie M. just completed module 2</p>
                    <small>3 min ago.</small>
                </div>
            </div>
            <div className='kudoBox flex'>
                <img src='img/icons/avatar.png' className='w-10 h-10 mr-3' alt='avatar' />
                <div className='kudoInfo'>
                    <p>Marie M. just completed module 2</p>
                    <small>3 min ago.</small>
                </div>
            </div>
            <div className='kudoBox flex'>
                <img src='img/icons/avatar.png' className='w-10 h-10 mr-3' alt='avatar' />
                <div className='kudoInfo'>
                    <p>Marie M. just completed module 2</p>
                    <small>3 min ago.</small>
                </div>
            </div>
        </div>
    );
}