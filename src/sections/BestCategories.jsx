import CategoryCard from '../components/CategoryCard';
import useBestCategory from '../hooks/useBestCategory';

const BestCategories = () => {
    const [categoriesData] = useBestCategory();
    console.log(categoriesData)
    return (
        <section className='container py-20 md:py-[120px]'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                <div className='mt-8'>
                    <h1 className='text-red text-[40px] leading-[50px] font-bold mb-10'>Our Best <br /> Categories</h1>
                    <button className='btn_primary'>More Categories</button>
                </div>
                <div className='md:col-span-3'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                        {
                            categoriesData.map((item, index) => <CategoryCard key={index} item={item} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestCategories;