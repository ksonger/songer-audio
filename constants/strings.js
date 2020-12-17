import paths from './paths'

export const homePageCards = {
  enso: {
    copy: "Songer Audio's first loudspeaker is a solid hardwood, hand-crafted 140 liter bass reflex design. It delivers true full-range sound across the frequency spectrum with breathtaking detail, imaging and transients.",
    title: "The Enso Loudspeaker",
    path: paths.PRODUCTS.ENSO,
    cta: 'Learn More',
    eventKey: '1',
    label: 'products'
  },
  onimaru: {
    copy: "The product of years of research and development, the Onimaru field coil driver is hand-constructed from the finest materials, offering exceptionally lifelike musical reproduction for a variety of design applications.",
    title: "The Onimaru Driver",
    path: paths.TECHNOLOGY,
    cta: "Learn More",
    eventKey: '2',
    label: 'technology'
  }
}

export const technologies = {
  onimaru: {
    title: "The Onimaru Field Coil Driver",
    copy: "The product of years of research and development, the Onimaru field coil driver is hand-constructed from the finest materials, offering exceptionally lifelike musical reproduction for a variety of design applications.",
    carousel: [
      {
        src: '/products_driver_web.png'
      },
    ],
    specifications: [
      {
        "title": "System",
        "description": "6 Ohm 1.6 Tesla Field Coil"
      },
      {
        "title": "Efficiency (12v)",
        "description": "96.5 dB SPL (2.83 V/1m)"
      },
      {
        "title": "Impedance",
        "description": "11 Ohms"
      },
      {
        "title": "Fs",
        "description": "19Hz"
      },
      {
        "title": "Qts (12v)",
        "description": "OB Version: 0.18 / BR Version: 0.46"
      },
      {
        "title": "Mms",
        "description": "13.5 grams"
      },
      {
        "title": "Inductance",
        "description": "0.38 mH (10k) / 0.62 mH (1k)"
      },
      {
        "title": "Vas",
        "description": "700 liters"
      },
      {
        "title": "Weight",
        "description": "33 lbs"
      },
    ],
  }
}

export const productCards = {
  enso: {
    title: "The Enso Loudspeaker",
    copy: "Songer Audio's first loudspeaker is a solid hardwood, hand-crafted 140 liter bass reflex design. The Enso is a singular expression of the years of research and development that resulted in the Onimaru field coil driver.  It delivers true full-range sound across the frequency spectrum with breathtaking detail, phase accuracy, imaging and transients.",
    menu: "enso",
    carousel: [
      {
        src: '/prod_loudspeaker_web.png'
      },
    ],
    specifications: [
      {
        "title": "System",
        "description": "Point source full-range ported loudspeaker"
      },
      {
        "title": "Frequency Response",
        "description": "35Hz - 14,000Hz"
      },
      {
        "title": "Efficiency",
        "description": "93 dB SPL (2.83 V/1m)"
      },
      {
        "title": "Dimensions",
        "description": "(W x H x D) 15 x 47 x 20 in"
      },
      {
        "title": "Materials",
        "description": "Hardwood (cherry shown), Leather, Brass"
      },
      {
        "title": "Weight",
        "description": "120 lbs"
      },
      {
        "title": "Connections",
        "description": "5-way binding posts, 3-pin XLR power"
      },
    ],
    price: "$22,900",
    graphs: [
      {
        title: "Frequency Response / SPL",
        description: "(Vector average of 20-600Hz nearfield response, & 400-20,000Hz spatially averaged 30° window @ 7ft)",
        src: "/final_production_spl_fr.png"
      },
      {
        title: "Total Harmonic Distortion",
        description: "(Measured at 1m)",
        src: "/final_production_thd_1m.png"
      }
    ],
    eventKey: '1',
  },
  rengo: {
    title: "The Rengo Loudspeaker",
    copy: "Coming soon, Songer Audio's second offering is a solid hardwood, hand-crafted two-way open baffle design. The pinnacle expression of our technology and design philosophy, the 96dB efficient Rengo offers flat, extended response from 25Hz to 14kHz.  It's magnet mounted Onimaru field coil driver eliminates baffle resonances for incredibly accurate sound reproduction down to 240Hz, while the novel constrained baffle loaded woofer perfectly compliments it with equally musical and yet deep, controlled bass response.",
    menu: "rengo",
    carousel: [
      {
        src: '/rengo_front_render_web.png'
      },
      {
        src: '/rengo_back_render_web.png'
      },
    ],
    specifications: [
      {
        "title": "System",
        "description": "Two-way full-range open baffle loudspeaker"
      },
      {
        "title": "Frequency Response",
        "description": "25Hz - 14,000Hz"
      },
      {
        "title": "Efficiency",
        "description": "96 dB SPL (2.83 V/1m)"
      },
      {
        "title": "Dimensions",
        "description": "(W x H x D) 21 x 47 x 16 in"
      },
      {
        "title": "Materials",
        "description": "Hardwood, Brass"
      },
      {
        "title": "Weight",
        "description": "170 lbs"
      },
      {
        "title": "Connections",
        "description": "5-way binding posts, 3-pin XLR power"
      },
    ],
    price: "Coming Soon",
    graphs: [],
    eventKey: '2',
  }
}

export const homeCopy = {
  header: `The medium is engineering. The result is art.`,
  p1: `Songer Audio field coil loudspeakers and drivers are functional works of art, of uncompromising craftsmanship.  Each piece is 100% designed, made and assembled by hand. Our products express a philosophy of simplicity, excellence, and a relentless dedication to provide the purest possible experience of music.`
}

export const menu = [
  {
    "description": "Songer Audio Home",
    "id": "0",
    "isVisible": true,
    "label": "home",
    "path": "/",
    "sortOrder": 0
  },
  {
    "description": "Songer Audio Products",
    "id": "1",
    "isVisible": true,
    "label": "products",
    "path": "/products",
    "sortOrder": 1
  },
  {
    "description": "Songer Audio Technology",
    "id": "2",
    "isVisible": true,
    "label": "technology",
    "path": "/technology",
    "sortOrder": 2
  },
  {
    "description": "Songer Audio News",
    "id": "3",
    "isVisible": true,
    "label": "news",
    "path": "/news",
    "sortOrder": 3
  },
  {
    "description": "About Songer Audio",
    "id": "4",
    "isVisible": true,
    "label": "about",
    "path": "/about",
    "sortOrder": 4
  },
  {
    "description": "Contact Songer Audio",
    "id": "5",
    "isVisible": true,
    "label": "contact",
    "path": "/contact",
    "sortOrder": 5
  },
  {
    "description": "Songer Audio Admin",
    "id": "6",
    "isVisible": false,
    "label": "admin",
    "path": "/admin",
    "sortOrder": 6
  }
]