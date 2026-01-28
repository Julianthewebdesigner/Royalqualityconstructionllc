import React from 'react';
import {
  Layout,
  Layers,
  Palette,
  Square,
  Hammer,
  Umbrella
} from 'lucide-react';
import { ServiceDetail } from './types';

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "remodeling",
    title: "Remodeling & Renovations",
    description: "Complete kitchen, bathroom, and full-home updates tailored to your lifestyle.",
    image: "/images/remodeling-repair.jpeg",
    icon: <Layout className="w-6 h-6" />,
    longDescription: "Transform your Seattle, Tacoma, or Puyallup home with our comprehensive remodeling and renovation services. From kitchen makeovers to complete home transformations, we bring your vision to life with expert craftsmanship and attention to detail. Our team specializes in creating functional, beautiful spaces that enhance your lifestyle while increasing your home's value throughout the Puget Sound region.",
    process: {
      title: "Our Remodeling Process",
      steps: [
        {
          title: "Initial Consultation",
          description: "We meet with you at your Seattle-area home to discuss your vision, budget, and timeline. We'll assess the space and provide expert recommendations tailored to your needs."
        },
        {
          title: "Design & Planning",
          description: "Our team creates detailed plans and 3D renderings of your remodel. We handle all permits and ensure compliance with local Seattle, Tacoma, and Puyallup building codes."
        },
        {
          title: "Material Selection",
          description: "We help you choose quality materials that fit your style and budget. From cabinets to countertops, flooring to fixtures, we guide you through every decision."
        },
        {
          title: "Expert Construction",
          description: "Our skilled craftsmen execute the remodel with precision and care. We maintain a clean workspace and keep you updated throughout the entire process."
        },
        {
          title: "Final Walkthrough",
          description: "We conduct a thorough inspection with you to ensure every detail meets your expectations and our high standards of quality."
        }
      ]
    },
    whyChooseUs: [
      "Over 10 years of experience serving Seattle, Tacoma, and Puyallup homeowners",
      "Licensed and insured for your protection",
      "Transparent pricing with no hidden fees",
      "Expert project management from start to finish",
      "High-quality materials and craftsmanship",
      "Clean, respectful work environment",
      "On-time project completion",
      "Comprehensive warranty on all work"
    ],
    seoTitle: "Home Remodeling & Renovation Services | Seattle, Tacoma, Puyallup | Royal Quality Construction",
    seoDescription: "Expert home remodeling and renovation services in Seattle, Tacoma, and Puyallup. Kitchen remodels, bathroom renovations, and full home transformations. Licensed & insured. Free estimates.",
    seoKeywords: [
      "home remodeling Seattle",
      "home renovation Tacoma",
      "kitchen remodel Puyallup",
      "bathroom renovation Seattle",
      "home renovation contractor",
      "remodeling services Tacoma",
      "Seattle home improvement"
    ]
  },
  {
    id: "flooring",
    title: "Flooring Installation",
    description: "Expert installation of hardwood, tile, laminate, and vinyl for a lasting finish.",
    image: "/images/flooring.jpeg",
    icon: <Layers className="w-6 h-6" />,
    longDescription: "Upgrade your Seattle, Tacoma, or Puyallup home with professional flooring installation services. We specialize in hardwood, engineered wood, luxury vinyl plank (LVP), laminate, and tile flooring. Our expert installers ensure a flawless finish that will last for decades, enhancing both the beauty and value of your home throughout the Puget Sound area.",
    process: {
      title: "Our Flooring Installation Process",
      steps: [
        {
          title: "Floor Assessment",
          description: "We evaluate your existing floors, measure the space, and assess subfloor conditions to ensure proper installation preparation."
        },
        {
          title: "Material Selection",
          description: "We help you choose the perfect flooring material for your Seattle-area home's style, traffic patterns, and budget. We provide samples and expert recommendations."
        },
        {
          title: "Subfloor Preparation",
          description: "We prepare and level the subfloor, addressing any moisture issues or structural concerns to ensure a solid foundation."
        },
        {
          title: "Professional Installation",
          description: "Our skilled craftsmen install your new floors with precision, using industry best practices and professional-grade tools for a perfect finish."
        },
        {
          title: "Finishing Touches",
          description: "We install trim, transitions, and baseboards, then thoroughly clean the area and conduct a final quality inspection."
        }
      ]
    },
    whyChooseUs: [
      "Experienced with all flooring types and materials",
      "Proper subfloor preparation for long-lasting results",
      "Precision installation with minimal waste",
      "Serving Seattle, Tacoma, and Puyallup communities",
      "Competitive pricing on materials and labor",
      "Clean, efficient installation process",
      "Furniture moving and floor removal services available",
      "Quality guarantee on all installations"
    ],
    seoTitle: "Professional Flooring Installation | Seattle, Tacoma, Puyallup | Royal Quality Construction",
    seoDescription: "Expert flooring installation in Seattle, Tacoma, and Puyallup. Hardwood, laminate, vinyl, and tile flooring services. Licensed professionals. Free estimates.",
    seoKeywords: [
      "flooring installation Seattle",
      "hardwood flooring Tacoma",
      "vinyl plank flooring Puyallup",
      "laminate flooring Seattle",
      "tile flooring installation",
      "floor installation contractor Tacoma",
      "flooring services Puyallup"
    ]
  },
  {
    id: "drywall",
    title: "Drywall & Painting",
    description: "Seamless drywall repair and premium painting for a fresh, clean look.",
    image: "/images/drywall 2.jpeg",
    icon: <Palette className="w-6 h-6" />,
    longDescription: "Give your Seattle, Tacoma, or Puyallup home a fresh new look with our professional drywall and painting services. Whether you need drywall repair, new installation, or interior/exterior painting, our skilled craftsmen deliver smooth, flawless finishes that transform your space. We use premium materials and proven techniques to ensure lasting beauty throughout the Puget Sound region.",
    process: {
      title: "Our Drywall & Painting Process",
      steps: [
        {
          title: "Surface Inspection",
          description: "We thoroughly inspect walls and ceilings for damage, assess repair needs, and evaluate surface conditions for optimal paint adhesion."
        },
        {
          title: "Drywall Repair & Installation",
          description: "We repair holes, cracks, and water damage, or install new drywall as needed. All surfaces are properly taped, mudded, and sanded smooth."
        },
        {
          title: "Surface Preparation",
          description: "We clean, prime, and prepare all surfaces. We carefully protect floors, furniture, and fixtures with drop cloths and plastic sheeting."
        },
        {
          title: "Professional Painting",
          description: "Using premium paints and professional techniques, we apply even coats for a beautiful, long-lasting finish. Multiple coats ensure optimal coverage."
        },
        {
          title: "Cleanup & Inspection",
          description: "We remove all protection materials, touch up any imperfections, and conduct a thorough final inspection to ensure perfection."
        }
      ]
    },
    whyChooseUs: [
      "Expert drywall repair and installation",
      "Premium paint brands for lasting beauty",
      "Meticulous surface preparation",
      "Serving Seattle, Tacoma, and Puyallup homeowners",
      "Clean, efficient work process",
      "Color consultation available",
      "Interior and exterior painting services",
      "Satisfaction guarantee on all projects"
    ],
    seoTitle: "Drywall Repair & Painting Services | Seattle, Tacoma, Puyallup | Royal Quality Construction",
    seoDescription: "Professional drywall repair and painting services in Seattle, Tacoma, and Puyallup. Interior & exterior painting, drywall installation. Licensed & insured. Free estimates.",
    seoKeywords: [
      "drywall repair Seattle",
      "painting services Tacoma",
      "interior painting Puyallup",
      "exterior painting Seattle",
      "drywall installation Tacoma",
      "house painting contractor",
      "drywall contractor Puyallup"
    ]
  },
  {
    id: "tile",
    title: "Custom Tile Installation",
    description: "Precision tile work for backsplashes, showers, and detailed floor patterns.",
    image: "/images/tile.jpeg",
    icon: <Square className="w-6 h-6" />,
    longDescription: "Elevate your Seattle, Tacoma, or Puyallup home with expert custom tile installation. From stunning kitchen backsplashes to luxurious bathroom showers and elegant floor patterns, our skilled tile setters deliver precise, beautiful results. We work with ceramic, porcelain, natural stone, and glass tile to create the perfect look for your space throughout the Puget Sound area.",
    process: {
      title: "Our Custom Tile Installation Process",
      steps: [
        {
          title: "Design Consultation",
          description: "We discuss your vision, style preferences, and functional needs. We help you select tile materials, patterns, and layouts that complement your Seattle-area home."
        },
        {
          title: "Surface Preparation",
          description: "We ensure surfaces are level, clean, and properly waterproofed. For showers, we install cement board and waterproof membranes to prevent moisture damage."
        },
        {
          title: "Layout Planning",
          description: "We create a detailed tile layout to minimize cuts, optimize pattern symmetry, and ensure the best visual result for your space."
        },
        {
          title: "Professional Installation",
          description: "Using thin-set mortar and precise spacing, we install each tile with expert craftsmanship. We ensure level surfaces and consistent grout lines throughout."
        },
        {
          title: "Grouting & Sealing",
          description: "We apply grout with attention to detail, clean excess, and seal as needed to protect your investment and ensure long-lasting beauty."
        }
      ]
    },
    whyChooseUs: [
      "Expert tile installation with 10+ years experience",
      "Precision layout and pattern work",
      "Proper waterproofing for wet areas",
      "Serving Seattle, Tacoma, and Puyallup communities",
      "Work with all tile materials and styles",
      "Clean, organized work process",
      "Attention to detail in every project",
      "Quality craftsmanship guarantee"
    ],
    seoTitle: "Custom Tile Installation Services | Seattle, Tacoma, Puyallup | Royal Quality Construction",
    seoDescription: "Expert tile installation in Seattle, Tacoma, and Puyallup. Backsplashes, shower tile, floor tile, and custom patterns. Licensed professionals. Free estimates.",
    seoKeywords: [
      "tile installation Seattle",
      "backsplash installation Tacoma",
      "shower tile Puyallup",
      "bathroom tile Seattle",
      "kitchen tile Tacoma",
      "tile contractor Puyallup",
      "custom tile work Seattle"
    ]
  },
  {
    id: "framing",
    title: "Framing & Carpentry",
    description: "Solid structural framing and detailed finish carpentry you can depend on.",
    image: "/images/framing-carpentry.jpeg",
    icon: <Hammer className="w-6 h-6" />,
    longDescription: "Build with confidence in Seattle, Tacoma, and Puyallup with our expert framing and carpentry services. From structural framing for additions and remodels to detailed finish carpentry including custom trim, doors, and built-ins, our skilled carpenters deliver solid, precise work. We follow code requirements and use quality materials to ensure your project stands the test of time throughout the Puget Sound region.",
    process: {
      title: "Our Framing & Carpentry Process",
      steps: [
        {
          title: "Project Planning",
          description: "We review plans, verify measurements, and ensure all materials meet local Seattle, Tacoma, and Puyallup building codes and structural requirements."
        },
        {
          title: "Framing Installation",
          description: "We construct walls, floors, roofs, and structural elements with precision. All framing is square, level, and properly fastened to code standards."
        },
        {
          title: "Rough Carpentry",
          description: "We install door and window frames, blocking, and backing for fixtures. We coordinate with other trades for electrical, plumbing, and HVAC."
        },
        {
          title: "Finish Carpentry",
          description: "We install trim, molding, doors, built-ins, and custom woodwork with meticulous attention to detail and craftsmanship."
        },
        {
          title: "Final Inspection",
          description: "We conduct a thorough quality check, make any necessary adjustments, and ensure all work meets our high standards and building codes."
        }
      ]
    },
    whyChooseUs: [
      "Expert framing and structural carpentry",
      "Detailed finish carpentry and trim work",
      "Code-compliant construction",
      "Serving Seattle, Tacoma, and Puyallup areas",
      "Quality materials and hardware",
      "Precise measurements and installations",
      "Both residential and commercial experience",
      "Structural integrity guarantee"
    ],
    seoTitle: "Framing & Carpentry Services | Seattle, Tacoma, Puyallup | Royal Quality Construction",
    seoDescription: "Professional framing and carpentry services in Seattle, Tacoma, and Puyallup. Structural framing, finish carpentry, custom trim work. Licensed & insured. Free estimates.",
    seoKeywords: [
      "framing contractor Seattle",
      "carpentry services Tacoma",
      "finish carpentry Puyallup",
      "structural framing Seattle",
      "custom carpentry Tacoma",
      "framing services Puyallup",
      "carpenter Seattle"
    ]
  },
  {
    id: "exterior",
    title: "Decks & Siding",
    description: "Durable outdoor spaces and exterior protection built for Seattle weather.",
    image: "/images/Deck.jpeg",
    icon: <Umbrella className="w-6 h-6" />,
    longDescription: "Enhance your Seattle, Tacoma, or Puyallup home's exterior with our professional deck and siding services. We build beautiful, durable decks perfect for Pacific Northwest living, and install high-quality siding that protects your home from the elements. Whether you need a new deck, siding replacement, or repairs, our experienced team delivers lasting results that withstand the Puget Sound weather.",
    process: {
      title: "Our Deck & Siding Installation Process",
      steps: [
        {
          title: "Site Evaluation",
          description: "We assess your property, discuss your outdoor living goals, and evaluate site conditions. For siding, we inspect existing conditions and moisture issues."
        },
        {
          title: "Design & Planning",
          description: "We create detailed plans that meet local Seattle, Tacoma, and Puyallup building codes. We help you select materials suited for Pacific Northwest weather."
        },
        {
          title: "Foundation & Framing",
          description: "For decks, we install proper footings and build a level, sturdy frame. For siding, we prepare walls, install moisture barriers, and ensure proper flashing."
        },
        {
          title: "Material Installation",
          description: "We install decking boards with proper spacing for drainage, or apply siding with correct techniques to shed water and prevent moisture intrusion."
        },
        {
          title: "Finishing Details",
          description: "We add railings, stairs, trim, and caulking as needed. We clean up thoroughly and conduct a final inspection to ensure quality and safety."
        }
      ]
    },
    whyChooseUs: [
      "Built for Pacific Northwest weather conditions",
      "Quality materials designed to last",
      "Code-compliant construction throughout Seattle, Tacoma, Puyallup",
      "Expert moisture management techniques",
      "Beautiful, functional outdoor spaces",
      "Structural integrity and safety",
      "Clean, efficient installation",
      "Warranty on materials and workmanship"
    ],
    seoTitle: "Deck Building & Siding Installation | Seattle, Tacoma, Puyallup | Royal Quality Construction",
    seoDescription: "Professional deck building and siding installation in Seattle, Tacoma, and Puyallup. Weather-resistant materials, expert installation. Licensed & insured. Free estimates.",
    seoKeywords: [
      "deck builder Seattle",
      "siding installation Tacoma",
      "deck construction Puyallup",
      "siding contractor Seattle",
      "deck repair Tacoma",
      "exterior siding Puyallup",
      "deck services Seattle"
    ]
  }
];
