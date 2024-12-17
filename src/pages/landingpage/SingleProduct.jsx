

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { Button } from '../components/ui/'

gsap.registerPlugin(ScrollTrigger)

const showcaseItems = [
  {
    id: 1,
    title: "Infinia",
    subtitle: "From Errand-Running To Gym-Training!",
    description: "This athleisure brand, for both men and women, has simple designs, wearable styles, and will make you look sporty chic all the time.",
    techStack: "TECHNICAL IMPLEMENTATION",
    techDescription: "An e-commerce website integrating Shopify with a custom full-stack application, combining Shopify's scalability with the flexibility of a tailored front-end and back-end architecture.",
    bgColor: "",
    image: "/kids1.jpg",
  },
  {
    id: 2,
    title: "FitFlex",
    subtitle: "Your Perfect Workout Companion",
    description: "Premium fitness wear that adapts to your movement. Engineered for performance, designed for style.",
    techStack: "MODERN ARCHITECTURE",
    techDescription: "Built with Next.js 13 and TypeScript, featuring real-time inventory management and personalized size recommendations.",
    bgColor: "bg-blue-600",
    image: "/kids1.jpg",
  },
  {
    id: 3,
    title: "SportSync",
    subtitle: "Sync Your Style With Sports",
    description: "Where athletic performance meets street style. Innovative fabrics with cutting-edge design.",
    techStack: "ADVANCED FEATURES",
    techDescription: "Implementing AR try-on capabilities and AI-powered size recommendations using TensorFlow.js and Three.js.",
    bgColor: "bg-purple-600",
    image: "/team.png",
  },
  {
    id: 4,
    title: "UrbanMove",
    subtitle: "Move Through Life in Style",
    description: "Urban athletic wear that transitions seamlessly from workout to hangout. Sustainable materials, timeless designs.",
    techStack: "SUSTAINABLE TECH",
    techDescription: "Green hosting solution with optimized asset delivery and minimal carbon footprint tracking integration.",
    bgColor: "bg-green-600",
    image: "/bg1.jpg",
  },
]

export default function InfiniaShowcase() {
  const containerRef = useRef(null)
  const panelsRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    const panels = panelsRef.current

    if (!container || panels.length === 0) return

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + container.offsetWidth * (panels.length - 1),
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="h-[550px] rounded-xl overflow-hidden"
    >
      <div className="flex mt-24 rounded-xl">
        {showcaseItems.map((item, index) => (
          <div
            key={item.id}
            ref={el => el && (panelsRef.current[index] = el)}
            className={`flex-none w-screen h-full ${item.bgColor} rounded-3xl ml-4 text-white relative`}
          >
            <div className="container mx-auto h-full flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <h1 className="text-5xl font-bold">{item.title}</h1>
                  <h2 className="text-3xl font-semibold">{item.subtitle}</h2>
                  <p className="text-xl">{item.description}</p>
                  
                  <div className="space-y-4">
                    <div className="inline-block bg-white text-black px-4 py-2 rounded-md">
                      <h3 className="font-mono text-sm tracking-wider">{item.techStack}</h3>
                    </div>
                    <p className="text-lg">{item.techDescription}</p>
                  </div>

                  <div className="flex gap-4">
                    {index === 0 && (
                      <>
                        <img
                          src="/bg1.jpg"
                          alt="React"
                          width={32}
                          height={32}
                          className="bg-white rounded-full p-1"
                        />
                        <img
                          src="/bg1.jpg"
                          alt="Node.js"
                          width={32}
                          height={32}
                          className="bg-white rounded-full p-1"
                        />
                        <img
                          src="/bg1.jpg"
                          alt="Shopify"
                          width={32}
                          height={32}
                          className="bg-white rounded-full p-1"
                        />
                      </>
                    )}
                  </div>

                  <button 
                    variant="outline" 
                    size="lg"
                    className="bg-white p-3 rounded-md text-black hover:bg-gray-100"
                  >
                    Learn More
                  </button>
                </div>

                <div className="relative h-[600px] lg:h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[300px] h-[600px] transform rotate-[-5deg]">
                      <img
                        src={item.image}
                        alt={`${item.title} showcase`}
                        fill
                        className="object-cover rounded-[2.5rem] shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

