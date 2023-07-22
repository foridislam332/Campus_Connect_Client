import { useQuery } from "@tanstack/react-query";

const useColleges = () => {
    const { data: collegesData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['collegesData'],
        queryFn: async () => {
            const res = await fetch('/colleges.json');
            const data = await res.json();
            return data;
        },
    });

    return [collegesData, loading, refetch];
};

export default useColleges;