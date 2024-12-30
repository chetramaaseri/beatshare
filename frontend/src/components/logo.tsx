import siteLogo from '../assets/logo.png'
const Logo = () => (
    <div className="flex items-center space-x-2 py-3 sm:py-2">
        <span className="text-3xl font-bold text-foreground">
            Beat
        </span>
        <img 
            src={siteLogo}
            width={200}
            height={200}
            className="w-10 h-10"
            alt="beatshare"
        />
        <span className="text-3xl font-bold text-foreground">
            Share
        </span>
    </div>
);
export default Logo;
