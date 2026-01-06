export function Introduction() {

    const redirectWhatsapp = () => {
        window.open('https://wa.me/+50686083131', '_blank');
    }

    const redirectLinkedin = () => {
        window.open('https://www.linkedin.com/in/ian-miranda-castellon', '_blank');
    }

    const redirectGithub = () => {
        window.open('https://github.com/PuzzledStone', '_blank');
    }

    const redirectInstagram = () => {
        window.open('https://instagram.com/miranda.1103', '_blank');
    }

    const openResume = () => {
        window.open('/files/Ian Miranda Curriculum Vitae.pdf', '_blank');
    }


    return (
        <div id="home" className="flex items-center text-white w-full justify-center mt-6 gap-0 h-[90vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl space-y-6 md:space-y-0">
            <div className="flex flex-col text-center justify-center w-full space-y-6 py-4 px-6 md:px-16 items-center">
              <div className="space-y-2">
                <h1 className="font-bold text-3xl sm:text-4xl whitespace-nowrap sm:whitespace-normal overflow-hidden">
                  Hi, I'm Ian Miranda
                </h1>
                <h2 className="font-bold text-2xl sm:text-3xl whitespace-nowrap">
                  <span className="block sm:inline">Passionate</span>
                  <span className="block sm:inline"> Software Engineer</span>
                </h2>
              </div>
              <div className="flex gap-8 justify-center mt-6">
                <a onClick={redirectLinkedin} className="cursor-pointer">
                  <img
                    src="/imgs/icons/linkedin.png"
                    className="w-8 h-8 object-contain hover:scale-110 duration-300"
                    alt="linkedin"
                  />
                </a>
                <a onClick={redirectGithub} className="cursor-pointer">
                  <img
                    src="/imgs/icons/github.png"
                    className="w-8 h-8 object-contain hover:scale-110 duration-300"
                    alt="github"
                  />
                </a>
                <a onClick={redirectInstagram} className="cursor-pointer">
                  <img
                    src="/imgs/icons/instagram.png"
                    className="w-8 h-8 object-contain hover:scale-110 duration-300"
                    alt="instagram"
                  />
                </a>
                <a onClick={redirectWhatsapp} className="cursor-pointer">
                  <img
                    src="/imgs/icons/whatsapp.png"
                    className="w-8 h-8 object-contain hover:scale-110 duration-300"
                    alt="whatsapp"
                  />
                </a>
              </div>
              <div className="mt-6 flex flex-row gap-6">
                <a href="/files/Ian Miranda Curriculum Vitae.pdf" download={true}>
                    <button className="text-light-blue hover:text-white duration-300">Download CV</button>
                </a>
                <button onClick={openResume}  className="text-light-blue hover:text-white duration-300">View CV</button>  
              </div>
            </div>
      
            <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex w-80 h-80 bg-white justify-center items-center rounded-full overflow-hidden space-y-6">
                        <img className="w-full h-full object-cover" src="/imgs/personal/ProfilePhoto.png" alt="Profile" />
                    </div>
                </div>
            
          </div>
        </div>
      );
      
}
