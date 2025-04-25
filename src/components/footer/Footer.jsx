export function Footer() {
    const redirectWhatsapp = () => {
        window.open('https://wa.me/+50686083131', '_blank');
    }

    const redirectLinkedin = () => {
        window.open('https://www.linkedin.com/in/ian-miranda-castell%C3%B3n-3385ab2a2/', '_blank');
    }

    const redirectGithub = () => {
        window.open('https://github.com/PuzzledStone', '_blank');
    }

    const redirectInstagram = () => {
        window.open('https://instagram.com/miranda.1103', '_blank');
    }

    return (
        <div className="flex gap-16 justify-center my-16">
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
    );
}