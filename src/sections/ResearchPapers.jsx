import { Link } from "react-router-dom";
import useResearchPaper from "../hooks/useResearchPaper";

const ResearchPapers = () => {
    const [researchPaperData] = useResearchPaper();

    return (
        <section className="py-20 bg-[#f4f6f9]">
            <div className="container">
                <div className="text-center max-w-lg mx-auto mb-14">
                    <h1 className="text-navy text-5xl font-bold mb-5 drop-shadow-lg">Research Paper</h1>
                    <p className="text-gray">This research paper critically analyzes various climate change mitigation strategies, including renewable energy</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {researchPaperData.map((paper, index) => (
                        <div key={index} className="bg-white shadow-md p-4 hover:shadow-2xl duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-navy text-xl font-semibold">{paper.studentName}</h3>

                                    <p className="text-sm italic font-light">{paper.date}</p>
                                </div>
                                <img className="w-20" src={paper.studentImage} alt={paper.studentName} />
                            </div>

                            <p className="text-gray text-base italic mb-4 line-clamp-2">{paper.title}</p>

                            <Link to={paper.url} target="_blank" rel="noopener noreferrer" className="btn_primary block text-center">
                                Read Paper
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchPapers;