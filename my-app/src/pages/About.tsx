import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <div>
            <div className="xl:container xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="lg:w-10/12 w-full">
                    <p className="font-semibold text-center text-3xl leading-3 text-black dark:text-indigo-500 hover:text-indigo-800 cursor-pointer">TIN TỨC</p>
                </div>
                <div className="lg:mt-14 sm:mt-10 mt-12">
                    <img className="lg:block hidden w-full" src="https://bizweb.dktcdn.net/100/419/519/articles/layer-1216.jpg?v=1614150226627" alt="Group of people Chilling" />
                    <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" />
                </div>
                <div>
                    <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 dark:text-white lg:text-2xl text-xl lg:leading-10 leading-9 mt-2">Những phụ kiện thời trang độc đáo bạn cần có</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white mt-6">Một cô nàng sành điệu là người luôn cập nhật nhanh nhạy những xu hướng hot trên thế giới, đồng thời phải là người có cá tính thời trang, tự tin thể hiện phong cách khác biệt, không dễ bị hòa lẫn giữa đám đông. Nhưng, cho dù là cô nàng cá tính đến mức nào thì đối với họ, một số món đồ dưới đây sẽ không thể nào vắng bóng trong tủ quần áo.</p>
                </div>
                <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                    <div className="w-full xl:w-5/12 lg:w-6/12">
                        <div>
                            <h2 className="font-medium lg:text-xl text-xl lg:leading-9 leading-7 text-gray-800 dark:text-white">1. Cặp kính râm cổ điển</h2>
                            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white mt-4">Một cặp kính râm có thể thay đổi hoàn toàn diện mạo phong cách của bạn. Vì thế đừng bao giờ để kính râm thiếu vắng trong tủ đồ của mình, nhất là một kiểu kính cổ điển như mắt mèo chẳng hạn.</p>
                        </div>
                        <div>
                            <h2 className="font-medium lg:text-xl text-xl lg:leading-9 leading-7 text-gray-800 dark:text-white">2. Một vài món phụ kiện "độc"</h2>
                            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white mt-4">Phụ kiện cũng là yếu tố đóng vai trò rất quan trọng làm nên một phong cách thật chất. Một bộ cánh sẽ trở nên tẻ nhạt nếu như thiếu sự tô điểm của phụ kiện lấp lánh.</p>
                        </div>
                        <div>
                            <h2 className="font-medium lg:text-xl text-xl lg:leading-9 leading-7 text-gray-800 dark:text-white">3. Một đôi giày cao gót màu đen thật "cool"</h2>
                            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white mt-4">Giày cao gót màu đen được xếp vào danh sách những món đồ "bất tử" trong làng thời trang. Nhưng nếu là một đôi giày cách điệu thì vẻ đẹp đó lại càng trở nên ấn tượng hơn.</p>
                        </div>
                        <div>
                            <h2 className="font-medium lg:text-xl text-xl lg:leading-9 leading-7 text-gray-800 dark:text-white">4. Áo khoác da</h2>
                            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white mt-4">Đồ da luôn làm nên sự cá tính và chiếc áo khoác da thì lại có thể phối với rất nhiều trang phục mang phong cách khác nhau.</p>
                        </div>

                    </div>
                    <div className="lg:flex items-center w-full lg:w-1/2">
                        <img className="lg:block hidden w-full" src="https://bizweb.dktcdn.net/thumb/large/100/004/348/articles/phu-kien.jpg?v=1443596439817" alt="people discussing on board" />
                        <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
                        <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About