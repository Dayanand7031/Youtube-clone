import React from 'react';

function ListItems() {
    const categories = [
        "All",
        "Music",
        "Mixes",
        "APIs",
        "Podcasts",
        "web Development",
        "Indian pop Music",
        "Data Type",
        "Web Series",
        "Live",
        "Sports",
        "Albums",
        "Deep Learning",
        "News",

    ]
    return (
        <div className='flex overflow-x-scroll hide-scroll-bar px-4 scrollbar-none'>
            <div className='flex space-x-4 flex-nowrap'>
                {categories.map((category) => {
                    return (
                        <div key={category} className='mb-3 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-3 py-1 font-medium text-gray-700 cursor-pointer'>
                            {category}
                        </div>

                    );
                })}
            </div>
        </div>
    );
}

export default ListItems;
