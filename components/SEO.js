import Head from 'next/head';

export const SEO = ({ 
  title = "Abdullah Chaghtai - Top Full Stack Engineer & Technical Lead in Pakistan",
  description = "Abdullah Chaghtai is one of Pakistan's leading Full Stack Engineers, specializing in enterprise solutions, AI integration, and digital transformation. Based in Karachi, delivering world-class software solutions.",
  image = "/static/abd.jpeg",
  url = "https://halalsenpai.com"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${url}/#person`,
        "name": "Abdullah Chaghtai",
        "url": url,
        "image": `${url}${image}`,
        "email": "abdullah.chaghtai@bashalog.com",
        "telephone": "+92 333 2123384",
        "sameAs": [
          "https://github.com/halalsenpai",
          "https://www.linkedin.com/in/halalsenpai",
          "https://bashalog.com"
        ],
        "jobTitle": "Full Stack Engineer & Technical Lead",
        "worksFor": {
          "@type": "Organization",
          "name": "Bashalog",
          "url": "https://bashalog.com",
          "description": "Custom Software Development and ERP Solutions"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "University of Karachi - UBIT"
        },
        "knowsAbout": [
          "Full Stack Development",
          "AI Integration",
          "Enterprise Solutions",
          "React",
          "Node.js",
          "Next.js",
          "Odoo ERP",
          "System Architecture",
          "Project Management"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Software Engineer",
          "occupationLocation": {
            "@type": "City",
            "name": "Karachi, Pakistan"
          },
          "skills": "Full Stack Development, AI Integration, ERP Implementation, Digital Transformation",
          "estimatedSalary": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": {
              "@type": "QuantitativeValue",
              "minValue": 50000,
              "maxValue": 100000,
              "unitText": "YEAR"
            }
          }
        },
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise Software Development",
              "description": "Custom enterprise software solutions with AI integration and cloud architecture",
              "serviceType": "Software Development",
              "provider": {
                "@type": "Person",
                "name": "Abdullah Chaghtai"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Pakistan"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ERP Implementation & Customization",
              "description": "Expert Odoo ERP implementation, customization, and integration services",
              "serviceType": "ERP Solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Integration Services",
              "description": "Integration of AI/ML capabilities into existing business processes and applications"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical Consultation",
              "description": "Expert technical consultation for digital transformation and system architecture"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Stack Development",
              "description": "Modern web applications using React, Next.js, Node.js, and cloud services"
            }
          }
        ],
        "description": "Leading Full Stack Engineer and Technical Lead in Pakistan, specializing in enterprise solutions and digital transformation",
        "award": [
          "Top Software Engineer in Pakistan",
          "Expert Full Stack Developer in Karachi"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        "url": url,
        "name": "Abdullah Chaghtai - Portfolio",
        "description": description,
        "publisher": {
          "@id": `${url}/#person`
        }
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}/#webpage`,
        "url": url,
        "name": title,
        "description": description,
        "about": {
          "@id": `${url}/#person`
        },
        "isPartOf": {
          "@id": `${url}/#website`
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": `${url}/#business`,
        "name": "Abdullah Chaghtai - Software Development Services",
        "image": `${url}${image}`,
        "url": url,
        "email": "abdullah.chaghtai@bashalog.com",
        "telephone": "+92 333 2123384",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Karachi",
          "addressRegion": "Sindh",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.8607",
          "longitude": "67.0011"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Karachi"
          },
          {
            "@type": "Country",
            "name": "Pakistan"
          }
        ]
      }
    ]
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Technical Skills Meta Tags */}
      <meta name="technical-skills" content="React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, AWS, Docker" />
      <meta name="programming-languages" content="JavaScript, TypeScript, Python, SQL" />
      <meta name="frameworks" content="React, Next.js, Express.js, TailwindCSS" />
      <meta name="databases" content="PostgreSQL, MongoDB, Redis" />
      <meta name="cloud-services" content="AWS, Docker, CI/CD" />
      
      {/* Professional Meta Tags */}
      <meta name="profession" content="Full Stack Engineer, Technical Lead" />
      <meta name="experience" content="4+ years" />
      <meta name="specialization" content="Web Development, AI Integration, ERP Solutions" />
      <meta name="industry" content="Software Development, Technology Consulting, Digital Transformation" />
      
      {/* Location Meta Tags */}
      <meta name="geo.region" content="PK-SD" />
      <meta name="geo.placename" content="Karachi, Pakistan" />
      <meta name="geo.position" content="24.8607;67.0011" />
      <meta name="ICBM" content="24.8607, 67.0011" />
      
      {/* Open Graph - Enhanced */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:image:alt" content="Abdullah Chaghtai - Full Stack Engineer" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="profile" />
      <meta property="og:locale" content="en_US" />
      <meta property="profile:first_name" content="Abdullah" />
      <meta property="profile:last_name" content="Chaghtai" />
      <meta property="profile:username" content="halalsenpai" />
      
      {/* Twitter - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@halalsenpai" />
      <meta name="twitter:creator" content="@halalsenpai" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta name="twitter:image:alt" content="Abdullah Chaghtai - Full Stack Engineer" />
      
      {/* Additional SEO */}
      <meta name="author" content="Abdullah Chaghtai" />
      <meta name="keywords" content="
        Abdullah Chaghtai, 
        Top Software Engineer Pakistan, 
        Best Full Stack Developer Karachi, 
        Leading Technical Lead Pakistan, 
        Expert Web Developer Karachi, 
        Enterprise Solutions Pakistan, 
        AI Integration Expert, 
        Top Tech Lead Karachi, 
        Senior Software Engineer Pakistan, 
        Professional Web Development Services, 
        Custom Software Development Pakistan, 
        ERP Solutions Karachi, 
        Digital Transformation Expert, 
        Software Consultant Pakistan, 
        React Developer Karachi, 
        Node.js Expert Pakistan, 
        Next.js Developer, 
        Technical Project Manager, 
        Software Architect Pakistan, 
        Odoo Implementation Expert, 
        Full Stack Development Services Pakistan
      " />
      
      {/* Mobile Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#18181B" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Schema.org JSON-LD - Enhanced */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Industry-specific Meta Tags */}
      <meta name="target" content="Enterprise, Startups, Tech Companies, Pakistan Business" />
      <meta name="classification" content="Technology, Software Development, IT Services" />
      <meta name="subject" content="Professional Software Development Services in Pakistan" />

      {/* Service Area Tags */}
      <meta name="service-area" content="Pakistan, Karachi, Lahore, Islamabad" />
      <meta name="coverage" content="Pakistan" />
      <meta name="distribution" content="Pakistan" />

      {/* Contact Information Meta Tags */}
      <meta name="contact.email" content="abdullah.chaghtai@bashalog.com" />
      <meta name="contact.phone" content="+92 333 2123384" />
      <meta name="contact.country" content="Pakistan" />
      <meta name="contact.city" content="Karachi" />

      {/* Service Offerings Meta Tags */}
      <meta name="services" content="
        Enterprise Software Development,
        Odoo ERP Implementation,
        AI/ML Integration,
        Technical Consultation,
        Full Stack Development,
        System Architecture Design,
        Cloud Solutions,
        Digital Transformation,
        Custom Software Development,
        Business Process Automation
      " />

      <meta name="service-specialties" content="
        React Applications,
        Next.js Development,
        Node.js Backend,
        PostgreSQL Database Design,
        MongoDB Implementation,
        AWS Cloud Architecture,
        Docker Containerization,
        CI/CD Pipeline Setup,
        API Development,
        Microservices Architecture
      " />

      <meta name="business-solutions" content="
        ERP Systems,
        CRM Integration,
        Business Intelligence,
        Data Analytics,
        Process Automation,
        Cloud Migration,
        System Integration,
        Technical Architecture,
        Scalable Solutions,
        Performance Optimization
      " />

      {/* Enhanced Keywords with Service Focus */}
      <meta name="keywords" content="
        Abdullah Chaghtai,
        Enterprise Software Development Pakistan,
        Odoo ERP Expert Karachi,
        AI Integration Specialist Pakistan,
        Custom Software Development Karachi,
        Technical Lead Pakistan,
        Full Stack Development Services,
        React Next.js Development Pakistan,
        Node.js Backend Expert,
        Cloud Architecture Consultant,
        System Integration Specialist,
        Business Process Automation Expert,
        Digital Transformation Consultant Pakistan,
        ERP Implementation Services Karachi,
        Software Architecture Pakistan,
        Technical Project Management,
        API Development Services,
        Database Design Expert,
        Microservices Architecture Pakistan,
        Performance Optimization Specialist,
        Business Intelligence Solutions Karachi
      " />

      {/* Industry Verticals */}
      <meta name="industry-focus" content="
        Enterprise Software,
        E-commerce Solutions,
        Healthcare Systems,
        Financial Services,
        Manufacturing Software,
        Retail Solutions,
        Education Technology,
        Logistics Systems,
        Real Estate Software,
        Business Management Tools
      " />
    </Head>
  );
}; 