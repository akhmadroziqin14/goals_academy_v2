import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, FreeMode } from 'swiper/modules';
import ButtonSwiper from '@/Components/ButtonSwiper';
import ButtonPill from "@/Components/ButtonPill";

export default function Webinar ({ data, active, status }) {
    return (
        <section id="webinar" className={`${active || status ? '' : 'hidden'} my-8 xl:my-12 3xl:my-16 overflow-hidden`}>
            <div className="container mx-auto hidden md:block">
                <h2 className="mb-4 sm:mb-6 xl:mb-10 3xl:mb-14">Webinar Skripsi</h2>
                <div className="grid grid-cols-3 md:gap-8 xl:gap-16 pb-2">
                    {data.map((item, index) => {
                        return (
                            <WebinarCard key={index} item={item} className="w-[70vw] md:w-[21vw] 3xl:w-[20vw]" />
                        )
                    })}
                </div>
            </div>
            <WebinarMobile data={data} />
        </section>
    )
}

function WebinarMobile ({ data }) {
    return (
        <div className="container mx-auto md:hidden">
            <div className="flex justify-between mb-6 xs:mb-8">
                <div className="md:w-6/12">
                    <h2>Webinar Skripsi</h2>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <ButtonSwiper name="webinar-prev" direction="left" />
                    <ButtonSwiper name="webinar-next" direction="right" />
                </div>
            </div>
            <Swiper
            modules={[Navigation, Pagination, A11y, FreeMode]}
            className='swiper-custom'
            wrapperClass="-ms-2"
            slidesPerView={"auto"}
            grabCursor={true}
            freeMode={true}
            navigation={{ nextEl: ".webinar-next", prevEl: ".webinar-prev" }}
            >
                {data.map((item, index) => {return (
                    <SwiperSlide key={index} style={{ width: "fit-content" }} className="p-4 md:p-2 lg:p-3 xl:p-4">
                        <WebinarCard item={item} className="w-[70vw]" />
                    </SwiperSlide>
                )})}
            </Swiper>
        </div>
    )
}

function WebinarCard ({ item, className }) {
    const currency = Intl.NumberFormat('id-ID')

    return (
        <div className={`relative shadow-centered rounded-3xl md:rounded-lg xl:rounded-3xl overflow-hidden ${className}`}>
            <div className="absolute right-0 bg-secondary text-white text-center font-poppins font-medium w-5/12 p-1 xl:text-20">
                14 : 27 : 32
            </div>
            <div className="w-full h-[40vw] md:h-[12vw] overflow-hidden">
                <img className="w-full" src={item.image} alt={item.title} />
            </div>
            <div className="p-4 md:p-3 lg:p-4 2xl:p-6 3xl:p-8">
                <p className="font-medium text-16 xs:text-20 md:text-10 lg:text-14 xl:text-16 2xl:text-20 3xl:text-24 h-12 xs:h-16 md:h-7 lg:h-8 2xl:h-12 3xl:h-16">{item.title}</p>
                <p className="font-bold font-poppins text-primary text-20 xs:text-24 md:text-14 lg:text-18 xl:text-24 2xl:text-28 3xl:text-32 my-4 md:my-3 lg:my-4 xl:my-6">IDR {currency.format(item.price)}</p>
                <ButtonPill href={item.link} className="w-full">Beli Sekarang</ButtonPill>
            </div>
        </div>
    )
}
