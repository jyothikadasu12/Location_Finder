function Header() {

  return (

    <header
      className="
        flex
        h-16
        shrink-0
        items-center
        justify-between
        bg-linear-to-r
        from-blue-700
        via-blue-600
        to-indigo-600
        px-5
        text-white
        shadow-lg
        sm:px-8
      "
    >

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-white/20
            text-xl
          "
        >
          📍
        </div>


        <div>

          <h1 className="text-lg font-bold sm:text-xl">
            Location Finder
          </h1>

          <p className="hidden text-xs text-blue-100 sm:block">
            Explore coordinates and timezones
          </p>

        </div>

      </div>


      <div
        className="
          hidden
          items-center
          gap-2
          rounded-full
          bg-white/10
          px-4
          py-2
          text-xs
          sm:flex
        "
      >

        <span className="h-2 w-2 rounded-full bg-green-400" />

        Map Online

      </div>

    </header>
  );
}

export default Header;