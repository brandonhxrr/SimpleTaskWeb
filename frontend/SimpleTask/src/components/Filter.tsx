import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface Option {
  name: string;
  href: string;
  current: boolean;
}

interface FilterOptions {
  options: Option[];
  title: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Filter: React.FC<FilterOptions> = ({ options, title }) => {
  return (
    <Menu as="div" className="relative inline-block text-left pl-5">
      <div>
        <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
          {title}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {options.map((option) => (
            <MenuItem key={option.name}>
              <a
                href={option.href}
                className={classNames(
                  option.current
                    ? "font-medium text-gray-900"
                    : "text-gray-500",
                  "block px-4 py-2 text-sm data-[focus]:bg-gray-100"
                )}
              >
                {option.name}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export { Filter };
