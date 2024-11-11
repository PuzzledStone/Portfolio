

export function Introduction() {
    return (
        <div className="flex items-center text-white w-full justify-center my-24 gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl space-y-6">

                <div className="flex flex-col items-left justify-center w-full space-y-3 p-4">
                    <div className="space-y-2"> 
                        <h1 className="text-3xl font-bold">Hi, I'm</h1>
                        <h1 className="text-4xl font-bold">Ian Miranda</h1>
                    </div>
                    <div className="flex space-x-4 p-2">
                        <a href="linkedin.com/in/ianmiranda"><img src="/imgs/icons/linkedin.png" className="w-8 h-8 object-contain" alt="linkedin" /></a>
                        <a href="github.com/ianmiranda"><img src="/imgs/icons/github.png" className="w-8 h-8 object-contain"  alt="github" /> </a>
                        <a href="instagram.com/ianmiranda"><img src="/imgs/icons/instagram.png" className="w-8 h-8 object-contain"  alt="instagram" /></a>
                        <a href="whatsapp.com/+50686083131"><img src="/imgs/icons/whatsapp.png" className="w-8 h-8 object-contain"  alt="whatsapp" /></a>
                    </div>
                </div>
            
                <div className="flex flex-col items-center justify-center w-full text-center">
                    <div className="flex w-80 h-80 bg-white justify-center items-center rounded-full overflow-hidden space-y-6">
                        <img className="w-full h-full object-cover" src="/imgs/personal/ProfilePhoto.png" alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
}
