import ExamData from "../../data/exams.json";
const splittedData = ExamData.slice(0, 4)


const ExamsContent = () => {
    return (
        <div className=" bg-white border-2 border-[#F1EDE7] max-md:h-[20rem] h-56 w-full rounded-2xl pb-16 pt-8">


            <div className="grid grid-flow-col max-md:grid-flow-dense max-md:grid-cols-2  gap-2  h-full items-center px-4 pb-6">
                {window.innerWidth < 780 ? splittedData.map((item) => {
                    return (
                        <div key={item.id} className="even:bg-[#E8E8E8] bg-[#582270]  even:text-[#582270] h-full w-full rounded-2xl flex pl-4 pt-3 items-start max-lg:text-[1.1rem] max-sm:text-[0.9rem] max-md:text-[1.1rem] max-xl:text-[1.3vw] text-[2rem] text-start font-semibold text-[#E8E8E8] ">
                            <div className="max-w-[9rem] max-sm:max-w-[7rem] max-md:max-w-[9rem] max-lg:max-w-[8rem]">{item.syntax}</div>
                        </div>
                    )
                }) : ExamData.map((item) => {
                    return (
                        <div key={item.id} className="even:bg-[#E8E8E8] bg-[#582270]  even:text-[#582270] h-full w-full rounded-2xl flex pl-4 pt-3 items-start max-lg:text-[1.1rem] max-md:text-[1.2rem]  max-xl:text-[1.1rem] text-[1rem] text-start font-semibold text-[#E8E8E8] ">
                            <div className="max-w-[6rem]  max-md:max-w-[12rem] max-lg:max-w-[8rem]">{item.syntax}</div>
                        </div>
                    )
                })}



            </div>
            <div className="w-full h-0.5 bg-[#F1EDE7]"></div>
            <p className=" text-[#582270] max-sm:text-[3.5vw] max-md:text-[1.4rem] text-end pr-6 text-2xl font-bold py-3">Şu ana dek 4 sınava girdin</p>
        </div>
    );
}


export default ExamsContent;
