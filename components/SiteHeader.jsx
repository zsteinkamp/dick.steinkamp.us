// ./components/SiteHeader.jsx
const { default: Link } = require("next/link");
const SiteHeader = () => {
  return (
    <header className="flex items-center mb-4 pl-8 pr-8 pb-4 pt-4 border-b-2 border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800 noprint">
      <Link href={"/"} className="transition-colors">
        <figure title="steinkamp.us">
          <h1 className="font-condensed text-3xl hover:text-black dark:hover:text-white">🚗 dick.steinkamp.us</h1>
        </figure>
      </Link>
      <nav className="site-nav grow flex gap-8 justify-end">
        <input type="checkbox" id="nav-trigger" className="nav-trigger" />
        <label htmlFor="nav-trigger">
          <span className="menu-icon">
            <svg viewBox="0 0 18 15" width="1.5rem" height="1.5rem">
              <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z"/>
            </svg>
          </span>
        </label>

        <div className="trigger font-condensed">
          <Link className="page-link" href="/">Posts</Link>
          <Link className="page-link" href="/timeline">Timeline</Link>
        </div>
      </nav>

    </header>
  );
};

export default SiteHeader;
