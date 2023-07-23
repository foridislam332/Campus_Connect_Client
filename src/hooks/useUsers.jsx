import useAuth from './useAuth';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const { user } = useAuth();
    const { data: userData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await useAxios.get(`/users/${user?.email}`);
            return res.data;
        },
    });

    return [userData, loading, refetch];
};

export default useUsers;