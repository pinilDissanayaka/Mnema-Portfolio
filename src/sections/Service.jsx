const services = [
    {
        title: "Design",
        description: "Custom AI chatbot, advanced analytics, dedicated account"
    },
    {
        title: "Development",
        description: "AI chatbot, personalized recommendations",
    },
    {
        title: "Marketing",
        description: "Marketing AI chatbot, campaign management, performance analytics",
    },
];

const OurServices = () => {
    return (
        <div className="overflow-hidden h-screen" id="services">
            <div className="container relative z-2">
                <div className="relative">
                    <div className="flex gap-[1rem] max-lg:flex-wrap">
                        {services.map((item, i) => (
                            <div key={i} className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
                                <h4 className="h4 mb-4">{item.title}</h4>

                                <p className="body-2 min-h-[4rem] mb-3 text-white/50">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
