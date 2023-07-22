
const CollegeGallery = () => {
    const collegeImages = [
        'https://i.ibb.co/zrnsbkY/g-6.jpg',
        'https://i.ibb.co/G7thsBD/g-5.jpg,',
        '',
        '',
        '',
        '',
        // Add more image URLs here
    ];

    return (
        <section className="py-20">
            <div className="container">
                <div className="text-center max-w-lg mx-auto mb-14">
                    <h1 className="text-navy text-5xl font-bold mb-5 drop-shadow-lg">Colleges Gallery</h1>
                    <p className="text-gray">Welcome to our Colleges Gallery, a curated collection of diverse educational institutions from around the world</p>
                </div>

                <div class="w-full mx-auto relative bg-gray-50">
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="flex flex-1 flex-col gap-4">
                            <div class="flex flex-1 flex-col">
                                {/* <!-- img_01 -->  */}
                                <img class="object-cover h-full" src="https://i.ibb.co/zrnsbkY/g-6.jpg" />
                            </div>
                            <div class="md:flex flex-1 flex-row gap-4">
                                <div class="flex flex-1 flex-col mb-4 md:mb-0">
                                    {/* <!-- img_02 -->  */}
                                    <img class="object-cover h-full" src="https://i.ibb.co/LzWLkkT/g-4.jpg" />
                                </div>
                                <div class="md:flex flex-1 flex-col">
                                    {/* <!-- img_03 -->  */}
                                    <img class="object-cover h-full" src="https://i.ibb.co/3kcvz3K/g-8.jpg" />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-1 flex-col gap-4">
                            <div class="md:flex flex-1 flex-row gap-4">
                                <div class="flex flex-1 flex-col mb-4 md:mb-0">
                                    {/* <!-- img_04 --> */}
                                    <img class="object-cover h-full" src="https://i.ibb.co/fMPLXvd/g-9.jpg" />
                                </div>
                                <div class="md:flex flex-1 flex-col">
                                    {/* <!-- img_05 --> */}
                                    <img class="object-cover h-full" src="https://i.ibb.co/xzXCrY1/g-7.jpg" />
                                </div>
                            </div>
                            <div class="flex flex-1 flex-col">
                                {/* <!-- img_06 --> */}
                                <img class="object-cover h-full" src="https://i.ibb.co/4MsrLCG/g-3.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollegeGallery;