-- Create a demo user for testing
-- Password: demo123456

INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  role
) VALUES (
  '550e8400-e29b-41d4-a716-446655440000',
  '00000000-0000-0000-0000-000000000000',
  'demo@gsgroups.net',
  '$2a$10$8K1p/a0dhrxSHxN1nByqhOxnYiudrQy4sU2b1Fspfx0wvAuBjn.S6', -- demo123456
  NOW(),
  NOW(),
  NOW(),
  '{"provider": "email", "providers": ["email"]}',
  '{"full_name": "Demo User"}',
  false,
  'authenticated'
);

-- Insert corresponding user record
INSERT INTO public.users (
  id,
  email,
  full_name,
  role,
  is_active,
  created_at,
  updated_at
) VALUES (
  '550e8400-e29b-41d4-a716-446655440000',
  'demo@gsgroups.net',
  'Demo User',
  'admin',
  true,
  NOW(),
  NOW()
);

-- Create admin user
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  role
) VALUES (
  '550e8400-e29b-41d4-a716-446655440001',
  '00000000-0000-0000-0000-000000000000',
  'admin@gsgroups.net',
  '$2a$10$8K1p/a0dhrxSHxN1nByqhOxnYiudrQy4sU2b1Fspfx0wvAuBjn.S6', -- demo123456
  NOW(),
  NOW(),
  NOW(),
  '{"provider": "email", "providers": ["email"]}',
  '{"full_name": "Admin User"}',
  false,
  'authenticated'
);

-- Insert corresponding admin user record
INSERT INTO public.users (
  id,
  email,
  full_name,
  role,
  is_active,
  created_at,
  updated_at
) VALUES (
  '550e8400-e29b-41d4-a716-446655440001',
  'admin@gsgroups.net',
  'Admin User',
  'super_admin',
  true,
  NOW(),
  NOW()
);
