
'use client'

import React, { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'

export default function TattooBookingApp() {
  const [isLoading, setIsLoading] = useState(true)
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false)
  const bookingUrl = 'https://www.bdcustomtattoos.com/book-online'

  useEffect(() => {
    // Start loading iframe after initial render
    setShouldLoadIframe(true)
    
    // Reduced loading time to 1 second since we're lazy loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col h-screen bg-black">
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <Loader2 className="w-8 h-8 animate-spin text-white" />
        </div>
      ) : (
        shouldLoadIframe && (
          <iframe
            src={bookingUrl}
            className="w-full h-full border-none"
            title="Tattoo Booking"
            sandbox="allow-scripts allow-same-origin"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        )
      )}
    </div>
  )
}
