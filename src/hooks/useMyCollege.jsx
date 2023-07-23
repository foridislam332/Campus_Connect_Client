import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useMyCollege = () => {
    const { user } = useAuth();
    const { data: myCollegeData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['myCollegeData'],
        queryFn: async () => {
            const res = await useAxios(`/my_college/${user?.email}`);
            return res.data;
        },
    });

    return [myCollegeData, loading, refetch];
};

export default useMyCollege;