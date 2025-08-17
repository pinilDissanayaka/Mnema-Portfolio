import {  roadmap1, roadmap2, roadmap3, roadmap4 } from "../assets";

const roadmap = [
    {
        id: "0",
        title: "Voice recognition",
        text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "Gamification",
        text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Chatbot customization",
        text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Integration with APIs",
        text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap4,
    }
];

const Project = () => (
    <div className="overflow-hidden" id="project">
        <div className="container md:pb-10">
            <div className="max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center">
                <h2 className="h2">What we’re working on</h2>
            </div>

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {roadmap.map((item) => {

                    return (
                        <div className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6" key={item.id}>
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                <div className="relative z-1">
                                    <div className="mb-10 -my-10 -mx-15">
                                        <img className="w-full" src={item.imageUrl} width={628} height={426} alt={item.title} />
                                    </div>
                                    <h4 className="h4 mb-4">{item.title}</h4>
                                    <p className="body-2 text-n-4">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    </div>
);

export default Project;
