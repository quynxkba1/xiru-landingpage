import Image from 'next/image'

function BackgroundAILogo() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[280px] sm:w-[400px] md:w-[600px] lg:w-[900px]">
        {/* Animated gif background */}
        <Image
          src="/bg-ai-logo-original.gif"
          width={900}
          height={900}
          alt=""
          aria-hidden="true"
          unoptimized
          className="object-contain"
        />
        {/* XIRU logo centered on top */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Image
            src="/images/logo/logo (1).svg"
            width={195}
            height={63}
            alt="XIRU"
            className="w-[80px] sm:w-[120px] md:w-[160px] lg:w-[195px] h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default BackgroundAILogo