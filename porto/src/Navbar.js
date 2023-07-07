export default function Navbar() {
    return (
        <nav className="nav bg-stone-200 text-black font-bold flex justify-between items-center px-8 py-4 gap-8">
            <a href="/" className="site-title text-4xl no-underline">Site Name</a>
            <ul className="flex gap-4 list-none">
                <li>
                    <a href="/pricing">Pricing</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    )
}