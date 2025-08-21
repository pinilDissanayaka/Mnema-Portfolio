import Lightning from "../components/lightning";

const Hero = () => {
    return (
        <div className="h-screen flex items-center relative overflow-hidden">
            {/* Lightning Background */}
            <div className="absolute inset-0 opacity-30">
                <Lightning
                    hue={220}
                    xOffset={0}
                    speed={0.8}
                    intensity={1.2}
                    size={1}
                />
            </div>
            
            {/* Content */}
            <div className="container relative z-10">
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">We craft software that's smart by design, scalable by default, and built for the real world.</p>
                    <h1 className="h1 mb-6">
                        Mnema builds beautiful, working software. At global scale.
                    </h1>
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                </div>
            </div>
        </div>
    );
};

export default Hero;
