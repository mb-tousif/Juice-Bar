import { BsFacebook, BsInstagram, BsTwitter, BsGithub,BsDribbble as BsDribble } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='bg-[#045f04de]'>
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
              <div className="px-5 py-2">
                <Link to='/about' className="text-base leading-6 text-gray-50 hover:text-[#4c1571f1]">About</Link>
              </div>
              <div className="px-5 py-2">
                <Link to='/' className="text-base leading-6 text-gray-50 hover:text-[#4c1571f1]">Blog</Link>
              </div>
              <div className="px-5 py-2">
                <Link to='/' className="text-base leading-6 text-gray-50 hover:text-[#4c1571f1]">Team</Link>
              </div>
              <div className="px-5 py-2">
                <Link to='/contact' className="text-base leading-6 text-gray-50 hover:text-[#4c1571f1]">Contact</Link>
              </div>
            </nav>
            <div className="flex justify-center mt-4 space-x-6">
              <Link to="/" className="text-[#4c1571f1] hover:text-gray-50">
                <BsFacebook className="w-8 h-8" />
              </Link>
              <Link to="/" className="text-[#4c1571f1] hover:text-gray-50">
                <BsInstagram className="w-8 h-8" />
              </Link>
              <Link to="/" className="text-[#4c1571f1] hover:text-gray-50">
                <BsTwitter className="w-8 h-8" />
              </Link>
              <Link to="/" className="text-[#4c1571f1] hover:text-gray-50">
                <BsGithub className="w-8 h-8" />
              </Link>
              <Link to="/" className="text-[#4c1571f1] hover:text-gray-50">
                <BsDribble className="w-8 h-8" />
              </Link>
            </div>
            <p className="mt-8 text-base leading-6 text-center text-gray-50">
              Copyright &#169; {new Date().getFullYear()} Inc. All right
              reserved.
            </p>
          </div>
    </div>
  )
}
