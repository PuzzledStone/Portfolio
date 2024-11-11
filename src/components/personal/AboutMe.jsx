export function AboutMe() {
    return (
      <div className="flex items-center justify-center bg-gray-900  min-h-[90vh] py-8 px-6 md:px-8">
        <div className="flex flex-col w-auto max-w-6xl mx-auto text-center space-y-16 p-6">

          <div className="relative flex flex-col items-center justify-between gap-8">
            <div className="absolute top-0 inset-x-0 flex items-center justify-center">
              <div className="flex-grow border-t border-light-blue"></div>
                <span className="text-white mx-4">Introduction</span>
              <div className="flex-grow border-t border-light-blue"></div>
            </div>
            <div className="flex-1 text-lg text-white mx-auto mt-16">
              <p>I'm a passionate backend developer with a strong foundation in web and application development. My focus is on building scalable, performant, and secure systems. I've worked with technologies like Node.js, Python, React, and MySQL, and I'm always looking to optimize and improve the code I work with.</p>
            </div>
          </div>
  
          <div className="relative flex flex-col items-center justify-between gap-8">
            <div className="absolute top-0 inset-x-0 flex items-center justify-center">
              <div className="flex-grow border-t border-light-blue"></div>
                <span className="text-white mx-4">Education</span>
              <div className="flex-grow border-t border-light-blue"></div>
            </div>
            <div className="flex-1 text-lg text-white mx-auto mt-16">
              <p>Bachelor's Degree in Computer Science and Information Technology at Universidad de Costa Rica (2020-2025)</p>
            </div>
          </div>
  
          <div className="relative flex flex-col items-center justify-between gap-8">
            <div className="absolute top-0 inset-x-0 flex items-center justify-center">
              <div className="flex-grow border-t border-light-blue"></div>
              <span className="text-white mx-4">Hobbies & Passions</span>
              <div className="flex-grow border-t border-light-blue"></div>
            </div>
            <div className="flex-1 text-lg text-white mx-auto mt-16">
              <p>Outside of coding, I am deeply interested in backend architecture, system optimization, and experimenting with new technologies. I love staying up-to-date with the latest trends in server-side development, cloud infrastructure, and software performance.</p>
              <p className="mt-4">I am passionate about creating efficient, secure, and scalable systems. I enjoy collaborating with other developers to solve complex problems and continuously improve the quality of the code I write.</p>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  