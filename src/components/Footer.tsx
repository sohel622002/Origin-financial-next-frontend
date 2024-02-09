import Link from "next/link";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-[rgb(23,14,75)]">
      <div className="text-white lg:w-4/5 mx-auto p-4 py-10 flex flex-col gap-10 lg:gap-40 lg:flex-row border-b-2">
        <div>
          <h1 className="text-3xl">Origin Fincancial</h1>
          <p className="mt-2">
            We have been caring for you in our clinics
            <br />
            for over 100 years.
          </p>
        </div>
        <div>
          <div>
            <p className="mb-5 text-lg">Pages</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li>
                <Link href="/teamdetails">Team Details</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <p className="mb-5 text-lg">Follow Us</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="facebook.com" className="flex gap-2 items-center">
                  <span>
                    <FaFacebook />
                  </span>
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="instargram.com" className="flex gap-2 items-center">
                  <span>
                    <FaInstagram />
                  </span>
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="twitter.com" className="flex gap-2 items-center">
                  <span>
                    <FaTwitter />
                  </span>
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="youtube.com" className="flex gap-2 items-center">
                  <span>
                    <FaYoutube />
                  </span>
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-gray-300 lg:w-4/5 mx-auto p-4 py-10">
        <p>copyright origins financial | Developed by Gumbytes Technologies</p>
      </div>
    </section>
  );
}
