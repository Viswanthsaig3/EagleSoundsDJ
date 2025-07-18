'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ImageRequirement = {
  category: string;
  id: string;
  targetFilename: string;
  targetPath: string;
  dimensions: string;
  purpose: string;
  aspectRatio?: string;
};

const ImageManager = () => {
  const [imageRequirements, setImageRequirements] = useState<ImageRequirement[]>([]);
  const [uploadStatus, setUploadStatus] = useState<Record<string, { success: boolean; message: string; path?: string }>>({});
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Load image requirements
    const requirements = [
      // Logo
      { category: "Logo", id: "logo", targetFilename: "logo.png", targetPath: "/", dimensions: "Transparent background recommended", purpose: "Site Logo" },
      { category: "Logo", id: "favicon", targetFilename: "favicon.ico", targetPath: "/", dimensions: ".ico format", purpose: "Favicon" },
      
      // Hero Images (Homepage & General)
      { category: "Hero Images", id: "hero-dj", targetFilename: "hero-dj.jpg", targetPath: "/", dimensions: "1920x1080px (16:9)", purpose: "Hero Carousel - DJ" },
      { category: "Hero Images", id: "hero-photo", targetFilename: "hero-photo.jpg", targetPath: "/", dimensions: "1920x1080px (16:9)", purpose: "Hero Carousel - Photography" },
      { category: "Hero Images", id: "hero-smoke", targetFilename: "hero-smoke.jpg", targetPath: "/", dimensions: "1920x1080px (16:9)", purpose: "Hero Carousel - Smoke Effects" },
      { category: "Hero Images", id: "hero-complete", targetFilename: "hero-complete.jpg", targetPath: "/", dimensions: "1920x1080px (16:9)", purpose: "Hero Carousel - Complete Solutions" },
      { category: "Hero Images", id: "hero1", targetFilename: "hero1.jpg", targetPath: "/", dimensions: "1920x1080px (16:9)", purpose: "Generic Hero 1 (if used)" },

      // Service Images (Homepage)
      { category: "Service Images", id: "dj-service-home", targetFilename: "dj-service.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Homepage DJ Service Card" },
      { category: "Service Images", id: "lighting-service-home", targetFilename: "lighting-service.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Homepage Lighting Service Card" },
      { category: "Service Images", id: "photo-service-home", targetFilename: "photo-service.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Homepage Photography Service Card" },
      { category: "Service Images", id: "smoke-service-home", targetFilename: "smoke-service.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Homepage Smoke Service Card" },
      
      // Page Specific Images
      { category: "Page Specific Images", id: "why-choose-us", targetFilename: "why-choose-us.jpg", targetPath: "/", dimensions: "800x600px (4:3)", purpose: "Why Choose Us section image" },
      { category: "Page Specific Images", id: "about-hero", targetFilename: "about-hero.jpg", targetPath: "/", dimensions: "1920x1080px (16:9)", purpose: "About Page Hero Background" },
      { category: "Page Specific Images", id: "contact-hero", targetFilename: "contact-hero.jpg", targetPath: "/", dimensions: "1920x1080px (16:9)", purpose: "Contact Page Hero Background" },
      { category: "Page Specific Images", id: "vendor-bg", targetFilename: "vendor-bg.jpg", targetPath: "/", dimensions: "1920x1080px (16:9)", purpose: "Vendor Page Hero Background" },
      { category: "Page Specific Images", id: "about-image", targetFilename: "about-image.jpg", targetPath: "/", dimensions: "800x600px (4:3)", purpose: "Feature image for About page" },
      { category: "Page Specific Images", id: "founder", targetFilename: "founder.jpg", targetPath: "/", dimensions: "400x400px (1:1)", purpose: "Photo of Tholuchuri Naveen (About Page)" },

      // Team Images
      { category: "Team Images", id: "team1", targetFilename: "team1.jpg", targetPath: "/", dimensions: "400x400px (1:1)", purpose: "Team Member 1 (Founder/CEO)" },

      // Testimonial Images
      { category: "Testimonial Images", id: "testimonial1", targetFilename: "testimonial1.jpg", targetPath: "/", dimensions: "200x200px (1:1)", purpose: "Testimonial Client 1" },
      { category: "Testimonial Images", id: "testimonial2", targetFilename: "testimonial2.jpg", targetPath: "/", dimensions: "200x200px (1:1)", purpose: "Testimonial Client 2" },
      { category: "Testimonial Images", id: "testimonial3", targetFilename: "testimonial3.jpg", targetPath: "/", dimensions: "200x200px (1:1)", purpose: "Testimonial Client 3" },

      // Gallery Images
      ...Array.from({ length: 9 }, (_, i) => ({
        category: "Gallery Images",
        id: `gallery${i + 1}`,
        targetFilename: `gallery${i + 1}.jpg`,
        targetPath: "/",
        dimensions: "800x800px (1:1)",
        purpose: `Gallery Image ${i + 1}`
      })),
      
      // Event Preview Images
      ...Array.from({ length: 8 }, (_, i) => ({
        category: "Event Preview Images",
        id: `event${i + 1}`,
        targetFilename: `event${i + 1}.jpg`,
        targetPath: "/",
        dimensions: "600x600px (1:1)",
        purpose: `Event Preview Image ${i + 1}`
      })),

      // DJ Services (Vendor Page)
      { category: "DJ Services", id: "dj-wedding", targetFilename: "dj-wedding.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Wedding DJ (Vendor)" },
      { category: "DJ Services", id: "dj-roadshow", targetFilename: "dj-roadshow.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Roadshow DJ (Vendor)" },
      { category: "DJ Services", id: "dj-live", targetFilename: "dj-live.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Live Show DJ (Vendor)" },
      { category: "DJ Services", id: "dj-college", targetFilename: "dj-college.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "College Event DJ (Vendor)" },

      // Photography Services (Vendor Page)
      { category: "Photography Services", id: "photo-wedding", targetFilename: "photo-wedding.jpg", targetPath: "/", dimensions: "800x600px (4:3)", purpose: "Wedding Photography (Vendor)" },
      { category: "Photography Services", id: "photo-birthday", targetFilename: "photo-birthday.jpg", targetPath: "/", dimensions: "800x600px (4:3)", purpose: "Birthday Photography (Vendor)" },
      { category: "Photography Services", id: "photo-party", targetFilename: "photo-party.jpg", targetPath: "/", dimensions: "800x600px (4:3)", purpose: "Party Photography (Vendor)" },
      { category: "Photography Services", id: "photo-corporate", targetFilename: "photo-corporate.jpg", targetPath: "/", dimensions: "800x600px (4:3)", purpose: "Corporate Photography (Vendor)" },

      // Lighting Services (Vendor Page)
      { category: "Lighting Services", id: "lighting-indoor", targetFilename: "lighting-indoor.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Indoor Lighting (Vendor)" },
      { category: "Lighting Services", id: "lighting-outdoor", targetFilename: "lighting-outdoor.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Outdoor Lighting (Vendor)" },
      { category: "Lighting Services", id: "lighting-birthday", targetFilename: "lighting-birthday.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Birthday Lighting (Vendor)" },
      { category: "Lighting Services", id: "lighting-wedding", targetFilename: "lighting-wedding.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Wedding Lighting (Vendor)" },
      
      // Smoke Machine Services (Vendor Page)
      { category: "Smoke Machine Services", id: "smoke-fog", targetFilename: "smoke-fog.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Fog Machine (Vendor)" },
      { category: "Smoke Machine Services", id: "smoke-haze", targetFilename: "smoke-haze.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Haze Machine (Vendor)" },
      { category: "Smoke Machine Services", id: "smoke-co2", targetFilename: "smoke-co2.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "CO2 Jet (Vendor)" },
      { category: "Smoke Machine Services", id: "smoke-custom", targetFilename: "smoke-custom.jpg", targetPath: "/", dimensions: "600x400px (3:2)", purpose: "Custom Smoke Package (Vendor)" },

      // Social Media Assets
      { category: "Social Media Assets", id: "social-instagram", targetFilename: "instagram.png", targetPath: "/social/", dimensions: "64x64px (1:1)", purpose: "Instagram Icon" },
      { category: "Social Media Assets", id: "social-youtube", targetFilename: "youtube.png", targetPath: "/social/", dimensions: "64x64px (1:1)", purpose: "YouTube Icon" },
      { category: "Social Media Assets", id: "social-facebook", targetFilename: "facebook.png", targetPath: "/social/", dimensions: "64x64px (1:1)", purpose: "Facebook Icon" },
      { category: "Social Media Assets", id: "social-whatsapp", targetFilename: "whatsapp.png", targetPath: "/social/", dimensions: "64x64px (1:1)", purpose: "WhatsApp Icon" },
      { category: "Social Media Assets", id: "social-instagram-naveen", targetFilename: "instagram-naveen.png", targetPath: "/social/", dimensions: "64x64px (1:1)", purpose: "Owner's Instagram Icon" },
      { category: "Social Media Assets", id: "social-banner", targetFilename: "social-banner.jpg", targetPath: "/", dimensions: "1200x628px (1.91:1)", purpose: "Social Sharing Banner (og-image)" },
      { category: "Social Media Assets", id: "twitter-image", targetFilename: "twitter-image.jpg", targetPath: "/", dimensions: "1200x628px (1.91:1)", purpose: "Twitter Card Image" },
    ];

    setImageRequirements(requirements);
    
    // Initialize status
    const initialStatus: Record<string, { success: boolean; message: string; path?: string }> = {};
    requirements.forEach(img => {
      initialStatus[img.id] = { success: false, message: 'Not uploaded yet' };
    });
    
    setUploadStatus(initialStatus);
    setLoading(false);
    
    // Set first category as active by default
    if (requirements.length > 0) {
      setActiveCategory(requirements[0].category);
    }
  }, []);

  // Get all unique categories
  const categories = Array.from(new Set(imageRequirements.map(img => img.category)));
  
  // Filter requirements by category and search term
  const filteredRequirements = imageRequirements.filter(img => 
    (activeCategory === null || img.category === activeCategory) &&
    (filter === '' || 
      img.purpose.toLowerCase().includes(filter.toLowerCase()) || 
      img.id.toLowerCase().includes(filter.toLowerCase()) ||
      img.targetFilename.toLowerCase().includes(filter.toLowerCase()))
  );

  const getAIPrompt = (img: ImageRequirement) => {
    // Detailed, realistic prompts for Indian event context
    switch (img.id) {
      case "logo":
        return "Design a modern, vibrant logo for 'Eagle Sounds', an Indian premium DJ and event services brand. The logo should feature an abstract eagle, neon blue and green accents, and convey energy, music, and celebration. Transparent background, suitable for dark themes, and easily recognizable for Indian audiences.";
      case "favicon":
        return "Create a minimal, recognizable favicon for 'Eagle Sounds', featuring a stylized eagle head or music note in neon blue, optimized for a small .ico format. Should be clear and distinct even at small sizes, matching the Indian brand identity.";
      case "hero-dj":
        return "A hyper-realistic photo of a professional Indian DJ performing at a grand wedding or sangeet, with neon blue and green lighting, a large crowd of Indian guests dancing in colorful attire, and premium sound equipment. The scene should capture the energy, joy, and vibrancy of a high-end Indian celebration.";
      case "hero-photo":
        return "A professional Indian photographer capturing candid moments at a luxurious Indian wedding, with colorful sarees, sherwanis, joyful guests, and elegant floral decorations. The lighting should be warm and festive, highlighting the emotion and grandeur of Indian celebrations.";
      case "hero-smoke":
        return "A dramatic Indian event scene with a DJ on stage, vibrant colored lighting, and thick atmospheric smoke effects on the dance floor. Indian guests in festive clothing are dancing and enjoying the immersive, energetic atmosphere.";
      case "hero-complete":
        return "A grand Indian event setup showing a DJ, dynamic lighting, elaborate decorations, and a happy crowd in traditional Indian attire. Neon blue and green accents, festive mood, and a sense of premium, full-service event management for Indian weddings or parties.";
      case "hero1":
        return "A close-up of DJ equipment with glowing neon lights, hands mixing music, and a blurred crowd of Indian guests in the background. The scene should feel modern, energetic, and professional, reflecting Indian wedding or party vibes.";
      case "dj-service-home":
        return "A professional DJ booth setup at an Indian wedding or party, with neon blue lighting, high-end speakers, and a DJ performing for a lively crowd in colorful Indian outfits. The mood is energetic and festive.";
      case "lighting-service-home":
        return "A stunning lighting setup at a lavish Indian event, with beams of colored light, spotlights, and a festive atmosphere. The venue is decorated with drapes and flowers, and Indian guests are enjoying the ambiance.";
      case "photo-service-home":
        return "A photographer taking pictures at a glamorous Indian event, capturing candid moments of happy guests in sarees and suits, with elegant decor and vibrant lighting. The scene is lively and authentic.";
      case "smoke-service-home":
        return "A dance floor at an Indian wedding or party, filled with atmospheric smoke and colorful lights, with people in Indian attire dancing and enjoying the celebration. The effect is dramatic and immersive.";
      case "why-choose-us":
        return "A collage of happy Indian clients, professional DJ setups, and vibrant event scenes from Indian weddings and parties, representing trust, quality, and satisfaction. Include Indian cultural elements and joyful expressions.";
      case "about-hero":
        return "A wide shot of a premium Indian event with DJ, colorful lighting, and elaborate decorations, showing the Eagle Sounds team in action. The scene should feel professional, welcoming, and distinctly Indian.";
      case "contact-hero":
        return "A stylish Indian event venue with a DJ booth, colorful lighting, and a welcoming atmosphere, inviting visitors to get in touch. Indian guests are mingling and enjoying the ambiance.";
      case "vendor-bg":
        return "A panoramic view of a large Indian event with DJ, vibrant lighting, elaborate decorations, and a festive crowd in traditional Indian clothing. Neon blue and green accents throughout.";
      case "about-image":
        return "A candid photo of the Eagle Sounds team, dressed professionally, setting up equipment at an Indian event. The background shows Indian decor and teamwork in action.";
      case "founder":
        return "A professional portrait of Tholuchuri Naveen, founder of Eagle Sounds, in a smart outfit, with a subtle Indian event background. The expression is confident and approachable.";
      case "team1":
        return "A professional portrait of Tholuchuri Naveen, founder and CEO of Eagle Sounds, with a confident and friendly expression, set against a subtle Indian event backdrop.";
      case "testimonial1":
        return "A happy Indian bride in a red saree at her wedding, smiling and enjoying the music, with vibrant lighting and traditional Indian decorations in the background.";
      case "testimonial2":
        return "A corporate event organizer in formal Indian attire, giving a thumbs up at a successful event with DJ and lighting in the background, attended by Indian professionals.";
      case "testimonial3":
        return "A young Indian woman celebrating her birthday at a lively party, surrounded by friends in colorful outfits, with balloons, lights, and festive Indian decor.";
      case "social-instagram":
        return "A modern Instagram icon with neon blue and green accents, styled to match the Eagle Sounds brand and appeal to Indian audiences.";
      case "social-youtube":
        return "A modern YouTube icon with neon blue and green accents, styled to match the Eagle Sounds brand and appeal to Indian audiences.";
      case "social-facebook":
        return "A modern Facebook icon with neon blue and green accents, styled to match the Eagle Sounds brand and appeal to Indian audiences.";
      case "social-whatsapp":
        return "A modern WhatsApp icon with neon blue and green accents, styled to match the Eagle Sounds brand and appeal to Indian audiences.";
      case "social-instagram-naveen":
        return "A modern Instagram icon with a small badge or overlay indicating 'Naveen', styled for the Eagle Sounds brand and Indian audience.";
      case "social-banner":
        return "A social media banner for Eagle Sounds, featuring the logo, neon blue and green accents, and icons for Instagram, YouTube, Facebook, and WhatsApp. The design should appeal to Indian event clients.";
      case "twitter-image":
        return "A Twitter card image for Eagle Sounds, showing a vibrant Indian event scene with DJ, lighting, and decorations, plus the logo and social handles. The crowd is in Indian attire, and the mood is festive.";
      default:
        // Gallery, event, and other images
        if (img.id.startsWith("gallery")) {
          return `A high-quality, realistic photo of a real Indian event by Eagle Sounds: ${img.purpose}. Neon blue and green lighting, happy Indian guests in traditional attire, and a premium DJ setup.`;
        }
        if (img.id.startsWith("event")) {
          return `A preview image for a major Indian event by Eagle Sounds: ${img.purpose}. Professional DJ, vibrant lighting, elaborate Indian decorations, and a festive crowd in Indian clothing.`;
        }
        if (img.id.startsWith("dj-")) {
          return `A professional, realistic photo of ${img.purpose}, showing an Indian DJ performing with high-end equipment, neon blue lighting, and an energetic Indian crowd.`;
        }
        if (img.id.startsWith("photo-")) {
          return `A professional, realistic photo of ${img.purpose}, capturing candid moments, happy Indian guests in colorful attire, and elegant Indian event settings.`;
        }
        if (img.id.startsWith("lighting-")) {
          return `A photo of ${img.purpose}, with colorful lighting effects, modern equipment, and a festive Indian atmosphere.`;
        }
        if (img.id.startsWith("smoke-")) {
          return `A photo of ${img.purpose}, with dramatic smoke or haze effects, colorful lighting, and a lively Indian event scene.`;
        }
        return `A realistic, high-quality image for: ${img.purpose}, matching the Eagle Sounds brand (neon blue/green, premium, energetic, Indian event style).`;
    }
  };

  const handleFileChange = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    // Reset status for this image
    setUploadStatus(prev => ({
      ...prev,
      [id]: { success: false, message: 'Ready to upload' }
    }));
  };

  const handleUpload = async (id: string, targetFilename: string, targetPath: string) => {
    const fileInput = document.getElementById(`file-${id}`) as HTMLInputElement;
    
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      setUploadStatus(prev => ({
        ...prev,
        [id]: { success: false, message: 'Please select a file first' }
      }));
      return;
    }
    
    const file = fileInput.files[0];
    
    // Set status to uploading
    setUploadStatus(prev => ({
      ...prev,
      [id]: { success: false, message: 'Uploading...' }
    }));
    
    try {
      const formData = new FormData();
      formData.append('imageFile', file);
      formData.append('targetFilename', targetFilename);
      formData.append('targetPath', targetPath);
      
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setUploadStatus(prev => ({
          ...prev,
          [id]: { 
            success: true, 
            message: 'Uploaded successfully!', 
            path: result.filePath 
          }
        }));
      } else {
        setUploadStatus(prev => ({
          ...prev,
          [id]: { success: false, message: `Error: ${result.message || 'Upload failed'}` }
        }));
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus(prev => ({
        ...prev,
        [id]: { success: false, message: `Network error: ${error instanceof Error ? error.message : String(error)}` }
      }));
    }
  };

  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    alert('AI prompt copied to clipboard!');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-darker flex items-center justify-center">
        <div className="text-white text-xl">Loading image requirements...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-darker text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Eagle Sounds - Image Manager</h1>
          <Link href="/admin" className="bg-darker py-2 px-4 border border-primary text-primary rounded hover:bg-primary hover:text-darker transition-colors">
            Back to Admin
          </Link>
        </div>
        
        <div className="mb-8 bg-dark p-4 rounded-lg">
          <p className="mb-4">
            This page helps you manage all images required for the Eagle Sounds website. 
            Upload images for each section, and they will be automatically renamed and placed in the correct location.
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-blue-300 mb-1">Search images:</label>
              <input
                type="text"
                id="search"
                className="bg-darker border border-blue-900 rounded p-2 text-white w-full md:w-64"
                placeholder="Search by name or purpose..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            
            <div className="md:ml-4">
              <label className="block text-sm font-medium text-blue-300 mb-1">Filter by category:</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`px-3 py-1 rounded text-sm ${activeCategory === null ? 'bg-primary text-darker' : 'bg-darker text-blue-300 hover:bg-blue-900/50'}`}
                >
                  All
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-1 rounded text-sm ${activeCategory === category ? 'bg-primary text-darker' : 'bg-darker text-blue-300 hover:bg-blue-900/50'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredRequirements.map((img) => (
            <div key={img.id} className="bg-dark p-6 rounded-lg shadow-lg border border-blue-900/30 hover:border-primary/50 transition-all">
              <h2 className="text-xl font-bold text-primary mb-1">{img.purpose}</h2>
              <p className="text-blue-300 text-sm mb-4">{img.category}</p>
              
              <div className="mb-4">
                <p className="text-sm mb-1">
                  <span className="font-medium text-blue-200">Target filename:</span> <code className="bg-darker px-2 py-1 rounded">{img.targetPath === "/" ? "" : img.targetPath}{img.targetFilename}</code>
                </p>
                <p className="text-sm mb-1">
                  <span className="font-medium text-blue-200">Dimensions:</span> {img.dimensions}
                </p>
              </div>
              
              {uploadStatus[img.id]?.path && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-blue-200 mb-1">Current image:</p>
                  <div className="relative h-40 bg-darker rounded overflow-hidden">
                    <Image
                      src={uploadStatus[img.id].path as string}
                      alt={img.purpose}
                      fill
                      className="object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor={`file-${img.id}`} className="block text-sm font-medium text-blue-200 mb-1">
                  Select image to upload:
                </label>
                <input
                  type="file"
                  id={`file-${img.id}`}
                  accept="image/*"
                  onChange={(e) => handleFileChange(img.id, e)}
                  className="block w-full text-sm text-blue-300
                    file:mr-4 file:py-2 file:px-4
                    file:rounded file:border-0
                    file:text-sm file:font-medium
                    file:bg-blue-900/20 file:text-blue-300
                    hover:file:bg-blue-900/30
                    cursor-pointer"
                />
              </div>
              
              <div className="mb-4 flex items-center gap-4">
                <button
                  onClick={() => handleUpload(img.id, img.targetFilename, img.targetPath)}
                  className="bg-primary hover:bg-blue-700 text-darker font-medium py-2 px-4 rounded transition-colors"
                >
                  Upload Image
                </button>
                
                <div className={`text-sm ${uploadStatus[img.id]?.success ? 'text-green-500' : 'text-blue-300'}`}>
                  {uploadStatus[img.id]?.message}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-blue-900/30">
                <div className="flex justify-between mb-2">
                  <h3 className="text-md font-medium text-blue-200">AI Image Generation Prompt:</h3>
                  <button
                    onClick={() => copyPrompt(getAIPrompt(img))}
                    className="text-xs bg-blue-900/20 text-blue-300 px-2 py-1 rounded hover:bg-blue-900/40"
                  >
                    Copy Prompt
                  </button>
                </div>
                <div className="bg-blue-900/10 p-3 rounded text-sm text-blue-200 italic">
                  {getAIPrompt(img)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageManager;
