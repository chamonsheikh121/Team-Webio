import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaEye } from "react-icons/fa";
import WeHaveCompleted from "./WeHaveCompleted";
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library


const Portfolio = () => {
    const swiperRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const portfolioImages = [
        {
            "projectName": "Travel agency",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739008163/project1_iglyke.png",
           
        },
        {
            "projectName": "Trade Development Corporation",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739008025/proejct5_evijvr.png",
            

        },
        {
            "projectName": "Restaurant management system",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739007755/project3_rghw7d.png",
           
        },
        {
            "projectName": "Online Restaurant",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739007691/project4_kef8iw.png",
            
        },
        {
            "projectName": "Car selling",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739007699/project6_pcguzz.png",
            
        },
        {
            "projectName": "bLood Donation non-profit",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739007681/project2_rbgwdy.png",
            
        },
        {
            "projectName": "Photography website",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739029448/camera_b5qfzi.png",
            
        },
        {
            "projectName": "Sports",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739029441/play_muhkcp.png",
        }

    ];


    // const portfolioImages = [
    //     { id: 1, imageLink: "https://swiperjs.com/demos/images/nature-1.jpg", projectName: "Mountain Adventure" },
    //     { id: 2, imageLink: "https://swiperjs.com/demos/images/nature-2.jpg", projectName: "Serene Waters" },
    //     { id: 3, imageLink: "https://swiperjs.com/demos/images/nature-3.jpg", projectName: "Forest Escape" },
    //     { id: 4, imageLink: "https://swiperjs.com/demos/images/nature-4.jpg", projectName: "Sunset Bliss" },
    //     { id: 5, imageLink: "https://swiperjs.com/demos/images/nature-5.jpg", projectName: "Desert Wonders" },
    //     { id: 6, imageLink: "https://swiperjs.com/demos/images/nature-6.jpg", projectName: "Snowy Peaks" },
    //     { id: 7, imageLink: "https://swiperjs.com/demos/images/nature-7.jpg", projectName: "Ocean View" },
    //     { id: 8, imageLink: "https://swiperjs.com/demos/images/nature-8.jpg", projectName: "Autumn Trail" },
    //     { id: 9, imageLink: "https://swiperjs.com/demos/images/nature-9.jpg", projectName: "Hidden Paradise" },
    // ];



    useEffect(() => {

        AOS.init({
            duration: 2000,
            easing: 'ease',
            once: false,
        });


        AOS.refresh();

    }, []);


    // Function to handle slide change and apply the blur effect
    const handleSlideChange = () => {
        const slides = swiperRef.current.swiper.slides;
        slides.forEach((slide) => {
            slide.style.filter = "blur(8px)"; // Blur all slides
            slide.style.transform = "scale(0.8)"; // Reduce size of side slides
        });
        slides[swiperRef.current.swiper.activeIndex].style.filter = "blur(0px)"; // Keep center slide clear
        slides[swiperRef.current.swiper.activeIndex].style.transform = "scale(1)"; // Keep center slide at full size
    };

    return (
        <div className="relative">
            <div className="absolute w-full -top-16">
                <div className="max-w-7xl mx-auto">
                    <WeHaveCompleted />
                </div>
            </div>
            <section className="bg-gray-900 text-purple-600 pb-44">
                <div className="pb-32 pt-52 pl-10">
                    <h2 data-aos="fade-up" className="text-5xl font-extrabold mb-6"><span className="text-purple-100">Our</span> Portfolio</h2>
                    <p data-aos="fade-up" className="text-lg mb-8 text-purple-100">
                        Explore some of our best work, crafted with precision and creativity.
                    </p>
                </div>

                <div data-aos="zoom-in-down">
                    <div

                        className="w-full"
                        onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
                        onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
                    >
                        <Swiper
                            ref={swiperRef}
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={1.2} // Default: Center image full, side images partially visible
                            spaceBetween={10}
                            touchRatio={1} // Ensure smooth touch scrolling
                            resistanceRatio={0.85} // Less resistance for better swipe feel
                            breakpoints={{
                                480: { slidesPerView: 1.3, spaceBetween: 10 }, // Small devices: One full image, others slightly visible
                                768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets: Normal view
                                1024: { slidesPerView: 2, spaceBetween: 20 }, // Large screens: Normal behavior
                            }}
                            coverflowEffect={{
                                rotate: 30,
                                stretch: 0,
                                depth: 200,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            pagination={{ clickable: true }}
                            navigation={false}

                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            speed={700}
                            onSlideChange={handleSlideChange}
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            className="rounded-xl shadow-xl"
                        >
                            {portfolioImages.map((project, index) => (
                                <SwiperSlide
                                    key={project.id}
                                    className="flex justify-center relative transition-all duration-500"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <img
                                        src={project.imageLink}
                                        alt={project.projectName}
                                        className="rounded-lg transition-all object-cover shadow-2xl shadow-purple-800 w-full h-[500px]"
                                        loading="lazy"
                                    />

                                    {/* Hover Effect for "View Details" Button */}
                                    {hoveredIndex === index && (
                                        <div className="absolute inset-0 bg-gray-700 bg-opacity-50 flex flex-col items-center justify-center rounded-lg transition-opacity duration-500">
                                            <h3 className="text-2xl text-white font-bold mb-4">{project.projectName}</h3>
                                            <Link
                                                
                                                  onClick={(e) => {
                                                    e.preventDefault(); // Prevent React Router's default navigation
                                                    window.location.href = '/projects'; // Force a full reload
                                                }}
                                                to={`/projects`} // Dynamic Link
                                                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
                                            >
                                                <FaEye className="text-xl" />
                                                View all
                                            </Link>
                                        </div>
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
