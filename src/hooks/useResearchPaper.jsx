import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useResearchPaper = () => {
    const { data: researchPaperData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['researchPaperData'],
        queryFn: async () => {
            const res = await useAxios('/researchPaper');
            return res.data;
        },
    });

    return [researchPaperData, loading, refetch];
};

export default useResearchPaper;