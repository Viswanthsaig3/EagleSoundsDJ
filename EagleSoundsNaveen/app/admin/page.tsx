'use client';

import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-dark p-8 rounded-lg shadow-lg border border-blue-900/30">
        <h1 className="text-3xl font-bold text-primary mb-6">Eagle Sounds Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/admin/image-manager" 
            className="block p-6 bg-darker rounded-lg border border-blue-900/30 hover:border-primary/50 transition-all"
          >
            <h2 className="text-xl font-bold text-primary mb-2">Image Manager</h2>
            <p className="text-blue-300">
              Upload, manage, and organize all images for the Eagle Sounds website.
              Use AI-generated prompts to create realistic images for the site.
            </p>
          </Link>
          
          <div className="block p-6 bg-darker rounded-lg border border-blue-900/30 opacity-50">
            <h2 className="text-xl font-bold text-primary mb-2">Content Editor</h2>
            <p className="text-blue-300">
              Edit website content, testimonials, and service details. (Coming Soon)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
