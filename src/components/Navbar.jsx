export default function Navbar() {
  return (
    <section id="Navbar" className="h-[65px] z-10 fixed w-full shadow-lg flex items-center justify-center py-2 bg-white">
      <div className="w-3/4 flex justify-between">
        <div className="flex gap-5 items-center font-light capitalize text-sm">
          <a href="/">
            <svg viewBox="0 0 82 24" height="32" class="css-8oysku">
              <g fill="none" fill-rule="evenodd">
                <path fill="#2D5BA8" d="M0 24h30.471V0H0z"></path>
                <path fill="#FF8571" d="M30.471 24H81.62V0H30.471z"></path>
                <path
                  fill="#2D5BA8"
                  d="M52.108 11.021H46.923V6h-2.849v12h2.849v-4.394H52.108V18h2.849V6h-2.849zM69.277 15.22c-1.96 0-3.537-1.557-3.537-3.475 0-1.918 1.576-3.492 3.537-3.492 1.942 0 3.518 1.574 3.518 3.492s-1.576 3.475-3.518 3.475m0-9.681c-3.482 0-6.285 2.786-6.285 6.206 0 3.42 2.803 6.189 6.285 6.189 3.463 0 6.266-2.769 6.266-6.189S72.74 5.54 69.277 5.54"
                ></path>
                <path
                  fill="#FF8571"
                  d="M17.542 5.846h-3.628l-4.91 4.723V5.846h-2.86v11.762h2.86v-3.311l1.209-1.23 3.59 4.541h4.05l-5.662-6.623zM30.212 15.218l-.046.002c-1.96 0-3.536-1.556-3.536-3.475 0-1.918 1.576-3.492 3.536-3.492l.046.001V5.54l-.046-.001c-3.481 0-6.284 2.786-6.284 6.206 0 3.42 2.803 6.189 6.284 6.189l.046-.001v-2.715z"
                ></path>
                <path
                  d="M30.212 5.539h-.01v2.714h.01c1.942 0 3.518 1.574 3.518 3.492s-1.576 3.474-3.518 3.474h-.01v2.715h.01c3.463 0 6.267-2.769 6.267-6.189S33.675 5.54 30.212 5.54"
                  fill="#2D5BA8"
                ></path>
              </g>
            </svg>
          </a>
          <ul className="flex py-2 gap-5">
            <a href="/Easy" className="cursor-pointer hover:underline">
              easy
            </a>
            <a href="/Essential" className="cursor-pointer hover:underline">
              essential
            </a>
            <a href="/Extra" className="cursor-pointer hover:underline">
              extra
            </a>
          </ul>
        </div>
        <div className="flex gap-4">
          <button className="text font-[500] font-[Nunito]] hover:underline">
            Log In
          </button>
          <button className="bg-[#395ba4] text-white py-3 px-2 rounded hover:shadow-xl hover:-translate-y-1 transition-all">
            Open Account
          </button>
        </div>
      </div>
    </section>
  );
}
