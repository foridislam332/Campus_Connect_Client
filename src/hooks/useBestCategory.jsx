import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useBestCategory = () => {
    const { data: categoriesData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['categoriesData'],
        queryFn: async () => {
            const res = await useAxios('/categories');
            return res.data;
        },
    });

    return [categoriesData, loading, refetch];
};

export default useBestCategory;