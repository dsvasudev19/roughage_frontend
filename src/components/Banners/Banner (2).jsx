import { XMarkIcon } from "@heroicons/react/20/solid";
import {HeartHandshake, History, Mail, SearchX, Store} from "lucide-react";

export default function Example() {
  return (
    <>
    <div className="container">
          <div className="block sm:block md:blcok lg:flex xl:flex items-center gap-x-6 overflow-hidden px-6 py-2.5">

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 p-2 lg:p-0 justify-center">
        <p className="text-md leading-6 text-gray-900">
          <strong className="font-semibold  text-gray-900">
            SpackDigi 2023
          </strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          Limited Discounts from June 7 – 9
        </p>

      </div>
      <div className="flex flex-wrap flex-1 justify-end md:justify-center w-full">
        <ul className="flex">
          <li className="text-md justify-between ml-2 flex items-center text-sm lg:text-md cursor-pointer">
            <SearchX className="mr-2 hidden sm:block" size={20} />
            <a href="/about">About Us</a>
          </li>
          <div class="w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-900 to-transparent opacity-50 dark:via-neutral-400 ml-1"></div>
          <li className="text-md justify-between ml-2 flex items-center text-sm lg:text-md cursor-pointer">
            <Mail className="mr-2 hidden sm:block" size={20} />

            <a href="/contact">Contact   </a>
          </li>
          {/* <div class="w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-900 to-transparent opacity-50 dark:via-neutral-400 ml-2"></div>
          <li className="text-md ml-5 flex items-center text-sm lg:text-md">
            <Store className="mr-2" size={20} />
            Store
          </li> */}
          <div class="w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-900 to-transparent opacity-50 dark:via-neutral-400 ml-2"></div>
          <li className="text-md justify-between ml-2 flex items-center text-sm lg:text-md cursor-pointer">
            <HeartHandshake className="mr-2 hidden sm:block" size={20} />
            <a href="/TermsAndConditions">Terms</a>
          </li>
          <div class="w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-900 to-transparent opacity-50 dark:via-neutral-400 ml-1"></div>
          <li className="text-md justify-between ml-2 flex items-center text-sm lg:text-md cursor-pointer">
            <History className="mr-2 hidden sm:block" size={20} />
            Support 24/7
          </li>
        </ul>
      </div>
    </div>
    </div>
    </>
  );
}
