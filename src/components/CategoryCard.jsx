const CategoryCard = ({ item }) => {
    const { icon, category, semester } = item;
    return (
        <div className='border rounded-3xl border-dashed p-6'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full bg-navy bg-opacity-50 mx-auto mb-8 mt-4'>
                <img className='w-full' src={icon} alt={category} />
            </div>
            <h3 className='text-navy text-2xl font-semibold'>{category}</h3>
            <p className='text-red '>{semester}</p>
        </div>
    );
};

export default CategoryCard;