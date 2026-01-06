export function SkillItem({ src, alt, label }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] flex items-center justify-center">
                <img src={src} alt={alt} className="w-[40px] h-[40px] object-contain" />
            </div>
            <p className="text-white">{label}</p>
        </div>
    );
}