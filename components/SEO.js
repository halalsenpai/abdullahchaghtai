import Head from 'next/head';

export const SEO = ({ 
  title = "Abdullah Chaghtai - Full Stack Engineer & Technical Lead",
  description = "Abdullah Chaghtai is a Full Stack Engineer and Technical Lead specializing in scalable applications, AI integration, and enterprise solutions.",
  image = "/static/abd.jpeg",
  url = "https://halalsenpai.com"
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://halalsenpai.com${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://halalsenpai.com${image}`} />
      
      {/* Additional SEO */}
      <meta name="author" content="Abdullah Chaghtai" />
      <meta name="keywords" content="Abdullah Chaghtai, Full Stack Engineer, Technical Lead, Software Developer, Web Development, AI Integration, Enterprise Solutions, React, Node.js, Next.js, Pakistan, Bashalog" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abdullah Chaghtai",
            "url": url,
            "image": `https://halalsenpai.com${image}`,
            "sameAs": [
              "https://github.com/halalsenpai",
              "https://linkedin.com/in/halalsenpai",
              "https://bashalog.com"
            ],
            "jobTitle": "Full Stack Engineer & Technical Lead",
            "worksFor": {
              "@type": "Organization",
              "name": "Bashalog"
            },
            "description": description,
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "University of Karachi - UBIT"
            }
          })
        }}
      />
    </Head>
  );
}; 