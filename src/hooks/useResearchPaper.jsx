import { useQuery } from '@tanstack/react-query';

const useResearchPaper = () => {
    const { data: researchPaperData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['researchPaperData'],
        queryFn: async () => {
            const res = await fetch('/reasearchPaper.json');
            const data = await res.json();
            return data;
        },
    });

    return [researchPaperData, loading, refetch];
};

export default useResearchPaper;