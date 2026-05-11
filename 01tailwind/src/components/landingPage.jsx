import bgImage from "../assets/bg.png.png";

function LandingPage() {
  return (
    <>
      <head>
        <title>Best Used Phones in Lahore - Grab the Deal Now</title>
      </head>

      <body>
        {/* Navbar */}
        <nav className="bg-purple-800 text-white flex justify-between items-center px-4">
          {/* <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="logo"
            className="h-12 w-12 rounded-xl py-2"
          />*/}
          <span className="text-xl font-bold flex items-center">PhonesMania</span>

          <ul className="flex space-x-9 py-4">
            <li className="cursor-pointer hover:text-fuchsia-300">Home</li>
            <li className="cursor-pointer hover:text-fuchsia-300">Pages</li>
            <li className="cursor-pointer hover:text-fuchsia-300">Sections</li>
            <li className="cursor-pointer hover:text-fuchsia-300">Docs</li>
          </ul>
        </nav>

        {/* Main Section */}
        <main className="bg-fuchsia-200 flex items-center justify-between px-10 py-20">
          
          {/* Left Content */}
          <div className="w-1/2">
            <h1 className="text-6xl font-bold">
              The Best Phones in the Town
            </h1>

            <p className="py-6 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Saepe voluptatum quaerat, inventore at veniam qui ea
              nesciunt nisi.
            </p>

            <button className="bg-purple-800 px-5 py-2 mr-4 rounded-2xl hover:bg-purple-400 hover:text-black text-white">
              Click Me
            </button>

            <button className="bg-purple-800 px-5 py-2 rounded-2xl hover:bg-purple-400 hover:text-black text-white">
              Contact Us
            </button>
          </div>

          {/* Right Image */}
          <div className="w-1/2 flex justify-center">
            <img
              src={bgImage}
              alt="image"
              className="h-80 "
            />
          </div>
        </main>
      </body>
    </>
  );
}

export default LandingPage;