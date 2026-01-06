export function AboutMe() {
    return (
      <div id="about" className="flex items-center justify-center bg-gray-900  min-h-[90vh] py-8 px-6 md:px-8">
        <div className="flex flex-col w-auto max-w-6xl mx-auto text-center space-y-16 p-5">

          <div className="relative flex flex-col items-center justify-between gap-8">
            <div className="absolute top-0 inset-x-0 flex items-center justify-center">
              <div className="flex-grow border-t border-light-blue"></div>
                <span className="text-white mx-4 text-2xl">Introduction</span>
              <div className="flex-grow border-t border-light-blue"></div>
            </div>
            <div className="flex-1 text-lg text-white mx-auto mt-16">
              <p>
                I'm a passionate software developer specializing in <strong>C#/.NET</strong> and <strong>React</strong>, focused on building scalable, high-performance, and secure applications.<br />
                I have strong experience across web and application development, including work with SQL Server, Oracle, and MySQL, and I’m always looking for ways to optimize systems and improve code quality.
              </p>
            </div>
          </div>
  
          <div className="relative flex flex-col items-center justify-between gap-8">
            <div className="absolute top-0 inset-x-0 flex items-center justify-center">
              <div className="flex-grow border-t border-light-blue"></div>
                <span className="text-white mx-4 text-2xl">Education</span>
              <div className="flex-grow border-t border-light-blue"></div>
            </div>
            <div className="flex-1 text-lg text-white mx-auto mt-16">
              <p>Bachelor's Degree in Computer Science and Information Technology at Universidad de Costa Rica (2020-2025)</p>
            </div>
          </div>
  
          <div className="relative flex flex-col items-center justify-between gap-8">
            <div className="absolute top-0 inset-x-0 flex items-center justify-center">
              <div className="flex-grow border-t border-light-blue"></div>
              <span className="text-white mx-4 text-2xl">Hobbies & Passions</span>
              <div className="flex-grow border-t border-light-blue"></div>
            </div>
            <div className="flex-1 text-lg text-white mx-auto mt-16">
              <p>Outside of coding, I am deeply interested in backend architecture, system optimization, and experimenting with new technologies. <br />I love staying up-to-date with the latest trends in server-side development, cloud infrastructure, and software performance.</p>
              <p className="mt-4">I am passionate about creating efficient, secure, and scalable systems. I enjoy collaborating with other developers to solve complex problems and continuously improve the quality of the code I write.</p>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  