import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useColleges = () => {
    const { data: collegesData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['collegesData'],
        queryFn: async () => {
            const res = await useAxios('/colleges');
            return res.data;
        },
    });

    return [collegesData, loading, refetch];
};

export default useColleges;