import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black-800 py-4">
      <nav className="container mx-auto md:px-28 mx-auto">
        <ul className="flex justify-between">
          <li>
            <Link className="text-white" href="/">
              Subspace
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
