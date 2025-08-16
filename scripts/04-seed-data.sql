-- Seed data for GSGROUPS

-- Insert default categories
INSERT INTO categories (name, slug, description, color, icon) VALUES
('Web Design', 'web-design', 'Custom website design and development', '#3B82F6', 'globe'),
('Branding', 'branding', 'Logo design and brand identity', '#EF4444', 'palette'),
('Mobile Apps', 'mobile-apps', 'iOS and Android app development', '#10B981', 'smartphone'),
('E-commerce', 'e-commerce', 'Online store development', '#F59E0B', 'shopping-cart'),
('Digital Marketing', 'digital-marketing', 'SEO, PPC, and social media marketing', '#8B5CF6', 'trending-up'),
('Blog', 'blog', 'Company blog and news', '#6B7280', 'edit');

-- Insert default settings
INSERT INTO settings (key, value, description, category, is_public) VALUES
('site_title', '"GSGROUPS - Creative Digital Agency"', 'Main site title', 'general', true),
('site_description', '"We create stunning digital experiences that drive results"', 'Site meta description', 'general', true),
('contact_email', '"hello@gsgroups.com"', 'Main contact email', 'contact', true),
('contact_phone', '"+1 (555) 123-4567"', 'Main contact phone', 'contact', true),
('social_facebook', '"https://facebook.com/gsgroups"', 'Facebook URL', 'social', true),
('social_twitter', '"https://twitter.com/gsgroups"', 'Twitter URL', 'social', true),
('social_instagram', '"https://instagram.com/gsgroups"', 'Instagram URL', 'social', true),
('social_linkedin', '"https://linkedin.com/company/gsgroups"', 'LinkedIn URL', 'social', true),
('google_analytics_id', '""', 'Google Analytics tracking ID', 'analytics', false),
('google_tag_manager_id', '""', 'Google Tag Manager ID', 'analytics', false);

-- Insert homepage
INSERT INTO pages (title, slug, content, is_homepage, status, seo_title, seo_description) VALUES
('Home', 'home', 
'<h1>Welcome to GSGROUPS</h1>
<p>We are a creative digital agency specializing in web design, branding, and digital marketing solutions that drive results.</p>
<h2>Our Services</h2>
<ul>
<li>Custom Web Design & Development</li>
<li>Brand Identity & Logo Design</li>
<li>Mobile App Development</li>
<li>E-commerce Solutions</li>
<li>Digital Marketing & SEO</li>
</ul>', 
true, 'published', 
'GSGROUPS - Creative Digital Agency', 
'Professional web design, branding, and digital marketing services. We create stunning digital experiences that drive results for your business.');

-- Insert sample blog post
INSERT INTO blog_posts (title, slug, content, excerpt, status, published_at, category_id, author_id, seo_title, seo_description) VALUES
('Welcome to GSGROUPS Blog', 'welcome-to-gsgroups-blog',
'<p>Welcome to the official GSGROUPS blog! Here we''ll share insights about web design, digital marketing, and the latest trends in the creative industry.</p>
<p>Stay tuned for regular updates, tutorials, and case studies from our team of experts.</p>',
'Welcome to our blog where we share insights about web design, digital marketing, and creative industry trends.',
'published', NOW(), 
(SELECT id FROM categories WHERE slug = 'blog'), 
NULL,
'Welcome to GSGROUPS Blog - Web Design & Marketing Insights',
'Stay updated with the latest web design trends, digital marketing tips, and creative industry insights from the GSGROUPS team.');
