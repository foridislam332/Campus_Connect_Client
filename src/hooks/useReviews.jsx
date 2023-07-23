import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useReviews = () => {
    const { data: reviewsData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['reviewsData'],
        queryFn: async () => {
            const res = await useAxios('/reviews');
            return res.data;
        },
    });

    return [reviewsData, loading, refetch];
};

export default useReviews;