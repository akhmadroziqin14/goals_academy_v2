import figure1 from "/resources/img/figure-1.svg";

export default function Hero () {
    return (
        <section id="hero" className="my-16 xl:my-24 3xl:my-20">
            <div className="container mx-auto flex flex-wrap flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0">
                <div className="md:w-5/12 my-auto">
                    <h1 className="text-end md:text-start before:icon-primary sm:before:w-0 md:before:w-10 md:before:h-10 md:before:-ms-8 md:before:-mt-5 xl:before:w-20 xl:before:h-20 xl:before:-ms-16 xl:before:-mt-10">
                        Cepat Lulus Bareng <span className="text-primary">Goals.</span>
                    </h1>
                    <p className="text-end md:text-start mt-4 mb-8 xl:mt-4 xl:mb-12 3xl:mt-6 3xl:mb-16">
                        Percepat kelulusanmu bersama tutor yang solutif dan friendly dimana saja dan kapanpun kalian berada.
                    </p>
                    <form action="" className="md:w-11/12 flex justify-between border-1 xl:border-2 border-primary rounded-full p-1 3xl:p-2 -z-20">
                        <input type="text" className="w-7/12 md:w-7/12 bg-transparent border-none active:border-none focus:outline-none xl:leading-6 py-2 px-3 xl:py-2 xl:px-3 3xl:py-3" placeholder="Masukkan emailmu disini ..." />
                        <button type="submit" className="w-5/12 md:w-5/12 hover:sweep-right md:before:p-0.5 lg:before:p-1 xl:before:p-0.5 3xl:before:p-2 before:content-mail-20 xs:before:content-mail-32 md:before:content-mail-20 xl:before:content-mail-32 after:content-discount after:text-primary after:font-medium border-1 xl:border-2 border-primary rounded-full"></button>
                    </form>
                </div>
                <div className="sm:w-10/12 md:w-6/12">
                    <img className="w-full h-80 sm:h-auto md:h-80 lg:h-96 xl:h-[32rem] 3xl:h-[44rem]" src={figure1} alt="Figure 1" />
                </div>
            </div>
        </section>
    )
}
