import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
    const { data: reviewsData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['reviewsData'],
        queryFn: async () => {
            const res = await fetch('/reviews.json');
            const data = await res.json();
            return data;
        },
    });

    return [reviewsData, loading, refetch];
};

export default useReviews;