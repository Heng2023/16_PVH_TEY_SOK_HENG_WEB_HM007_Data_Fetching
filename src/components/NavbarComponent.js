import Link from "next/link";

export function NavbarComponent() {
  return (
    <nav>
      <div className="w-full px-7 -mt-6 flex items-center justify-between absolute z-50">
        <div>
          <Link href="/">
            <img src="../images/legend-logo.png" className="h-[10rem]" />
          </Link>
        </div>

        <div className="ml-[27.2rem]">
          <ul className="flex gap-7 items-center px-2">
            <li>
              <a
                href="/"
                className="font-semibold text-sm capitalize text-white hover:text-black hover:bg-white transition duration-300 px-4 py-2 rounded"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-semibold text-sm capitalize text-white hover:text-black hover:bg-white transition duration-300 px-4 py-2 rounded"
              >
                popular
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-semibold text-sm capitalize text-white hover:text-black hover:bg-white transition duration-300 px-4 py-2 rounded"
              >
                romance
              </a>
            </li>
            <li>
              <a
                href="/"
                className="font-semibold text-sm capitalize text-white hover:text-black hover:bg-white transition duration-300 px-4 py-2 rounded"
              >
                anime
              </a>
            </li>
          </ul>
        </div>

        <div>
          <input
            type="text"
            placeholder="Type to search..."
            className="cursor-pointer rounded-md pl-4 text-sm h-[2.5rem] shadow-xl"
          ></input>
        </div>
      </div>
    </nav>
  );
}
