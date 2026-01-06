import { SkillCarousel } from '../carousel/SkillCarousel.jsx';
import { SkillItem } from '../carousel/SkillItem.jsx';

export function Skills() {
    return (
        <div id="skills" className="flex items-center justify-center min-h-[90vh] bg-gray-900 py-12 px-4 md:px-16">
            <div className="flex flex-col w-auto max-w-6xl mx-auto text-center space-y-16">
                <div className="relative flex flex-col items-center justify-between gap-8">
                    <div className="absolute top-0 inset-x-0 flex items-center justify-center">
                        <div className="flex-grow border-t border-light-blue"></div>
                        <span className="text-white text-2xl mx-4">Skills</span>
                        <div className="flex-grow border-t border-light-blue"></div>
                    </div>
                    <div className="flex-1 text-lg text-white mx-auto mt-16">
                        <p>Here are some of the technologies I have worked with and have experience in:</p>
                    </div>

                    <div className="w-full px-4 sm:px-0 mb-8 space-y-12 mt-4">
                        <section>                           
                            <div className="mb-6">
                                <h3 className="text-white text-2xl mx-4">Frontend</h3>
                                <div className="mt-2 h-px w-full bg-white/10" />
                            </div>
                            <SkillCarousel>
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" label="React" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" label="JavaScript" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" label="HTML" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" label="CSS" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" label="Bootstrap" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="SASS" label="SASS" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="ViteJS" label="ViteJS" />
                            </SkillCarousel>
                        </section>

                        <section>
                            <div className="mb-6">
                                <h3 className="text-white text-2xl mx-4">Backend</h3>
                                <div className="mt-2 h-px w-full bg-white/10" />
                            </div>
                            <SkillCarousel>
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" label="Node.js" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" label="PHP" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" label="Laravel" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" label="Java" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt=".NET" label=".NET" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" label="C#" />
                                <SkillItem src="https://devicon-website.vercel.app/api/wordpress/original.svg" alt="Wordpress" label="Wordpress" />
                            </SkillCarousel>
                        </section>

                        <section>
                            <div className="mb-6">
                                <h3 className="text-white text-2xl mx-4">Databases</h3>
                                <div className="mt-2 h-px w-full bg-white/10" />
                            </div>
                            <SkillCarousel>                                         
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg" alt="SQL Server" label="SQL Server" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" label="MySQL" />
                                <SkillItem src="https://devicon-website.vercel.app/api/oracle/original.svg" alt="Oracle" label="Oracle" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="HeidiSQL" label="HeidiSQL" />
                            </SkillCarousel>
                        </section>

                        <section>
                            <div className="mb-6">
                                <h3 className="text-white text-2xl mx-4">DevOps / Tools</h3>
                                <div className="mt-2 h-px w-full bg-white/10" />
                            </div>
                            <SkillCarousel>
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" alt="Netlify" label="Netlify" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" alt="Vercel" label="Vercel" />
                                <SkillItem src="https://devicon-website.vercel.app/api/amazonwebservices/plain-wordmark.svg" alt="AWS" label="AWS/Azure" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure" label="Azure" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" label="Git" />
                                <SkillItem src="/imgs/icons/github.png" alt="GitHub" label="GitHub" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" alt="NPM" label="NPM" />
                                <SkillItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/composer/composer-original.svg" alt="Composer" label="Composer" />
                                <SkillItem src="https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg" alt="Netbeans" label="NetBeans" />
                            </SkillCarousel>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
