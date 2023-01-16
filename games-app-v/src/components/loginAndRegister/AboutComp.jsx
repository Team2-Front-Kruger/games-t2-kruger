import {
  RiFacebookLine,
  RiTwitterLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";
const AboutComp = () => {
  return (
    <main className="lg:pl-[580px]  p-8 pt-52">
      <div className=" text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <div className="bg-white hover:bg-cyan-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer">
          <div className="flex justify-center py-8">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/294775826_444050540952095_4645322085065350241_n.jpg?ccb=11-4&oh=01_AdRqtrW6UA3Li9DNA1-lwH4s5-w3Fgsb92Ym-PnbYkD2sQ&oe=63D1D717"
              alt="bryan"
              lazyload="true"
              className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-300"
            />
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <h3 className="font-semibold text-xl group-hover:text-white transition-all">
              Bryan Quisaguano
            </h3>
            <p className="text-gray-600 group-hover:text-gray-300">
              Desarrollador FullStack "React-Spring"
            </p>
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/bryan-quisaguano/"
                target="_blank"
                className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
              >
                <RiLinkedinLine />
              </a>
              <a
                href="https://twitter.com/BryanAr85746106"
                target="_blank"
                className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
              >
                <RiTwitterLine />
              </a>
              <a
                href="https://github.com/BryanArmando"
                target="_blank"
                className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
              >
                <RiGithubLine />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white hover:bg-cyan-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer">
          <div className="flex justify-center py-8">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/315366406_131828406188151_4693699854617595623_n.jpg?ccb=11-4&oh=01_AdShF_Eudss7hJFSOLYntoDHiFICSI7lCMCnlyTM-jj50g&oe=63D1DF8C"
              alt="JT Devs"
              lazyload="true"
              className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-300"
            />
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <h3 className="font-semibold text-xl group-hover:text-white transition-all">
              Javier Yanez
            </h3>
            <p className="text-gray-600 group-hover:text-gray-300">
              Desarrollador FullStack "React-Spring"
            </p>
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/javier-yanez-st/"
                target="_blank"
                className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
              >
                <RiLinkedinLine />
              </a>
              <a
                href="https://twitter.com/azraedd"
                target="_blank"
                className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
              >
                <RiTwitterLine />
              </a>
              <a
                href="https://github.com/eddyjav"
                target="_blank"
                className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
              >
                <RiGithubLine />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white hover:bg-cyan-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer">
          <div className="flex justify-center py-8">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/322450307_534424128653099_8420749515188157528_n.jpg?ccb=11-4&oh=01_AdQsInbzrE07FroEzXEAbWErXWj43nAsaMq60v75n1D21w&oe=63D1BF1D"
              alt="JT Devs"
              lazyload="true"
              className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-300"
            />
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <h3 className="font-semibold text-xl group-hover:text-white transition-all">
              Luis Anrrango
            </h3>
            <p className="text-gray-600 group-hover:text-gray-300">
              Desarrollador FullStack "React-Spring"
            </p>
            <div className="flex items-center">
              <a
                href="https://www.facebook.com/luis.rigoberto.750"
                target="_blank"
                className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
              >
                <RiFacebookLine />
              </a>
              <a
                href="https://www.linkedin.com/in/luis-anrrango-a8a25a133"
                target="_blank"
                className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
              >
                <RiLinkedinLine />
              </a>
              <a
                href="https://github.com/LuisRAnrrango"
                target="_blank"
                className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
              >
                <RiGithubLine />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutComp;
