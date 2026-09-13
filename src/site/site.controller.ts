import { Controller, Get, NotFoundException, Param, Render } from '@nestjs/common';
import {
  BUSINESS,
  PLACEHOLDER_IMAGES,
  NAV_LINKS,
  PROJECTS,
  BLOG_POSTS,
  TESTIMONIALS,
  STATS,
} from '../common/site-data';

// Shared data injected into every page render
function base(active: string, title: string, description: string) {
  return {
    title: `${title} | ${BUSINESS.name}`,
    description,
    active,
    business: BUSINESS,
    nav: NAV_LINKS,
    img: PLACEHOLDER_IMAGES,
  };
}

@Controller()
export class SiteController {
  @Get()
  @Render('pages/home')
  home() {
    return {
      ...base('home', 'Interior Designers in Noida & Delhi NCR', 'Forever Dream Spaces designs residential and commercial interiors that feel handcrafted for you.'),
      projects: PROJECTS.slice(0, 6),
      testimonials: TESTIMONIALS,
      stats: STATS,
      blog: BLOG_POSTS.slice(0, 3),
    };
  }

  @Get('about')
  @Render('pages/about')
  about() {
    return {
      ...base('about', 'About Us', 'Meet the studio behind Forever Dream Spaces — our story, our values and our design process.'),
      stats: STATS,
    };
  }

  @Get('services')
  @Render('pages/services')
  services() {
    return base('services', 'Interior Design Services', 'Explore our residential and commercial interior design services.');
  }

  @Get('services/residential-interior-design')
  @Render('pages/residential')
  residential() {
    return {
      ...base('services', 'Residential Interior Design', 'Comfortable, beautiful residential interiors — living rooms, bedrooms, kitchens and more, designed around how you live.'),
      projects: PROJECTS.filter((p: (typeof PROJECTS)[number]) => p.category === 'Residential'),
    };
  }

  @Get('services/commercial-interior-design')
  @Render('pages/commercial')
  commercial() {
    return {
      ...base('services', 'Commercial Interior Design', 'Offices, retail and hospitality interiors engineered for brand, productivity and experience.'),
      projects: PROJECTS.filter((p: (typeof PROJECTS)[number]) => p.category === 'Commercial'),
    };
  }

  @Get('projects')
  @Render('pages/projects')
  projects() {
    return {
      ...base('projects', 'Our Projects', 'A showcase of residential and commercial interior design projects by Forever Dream Spaces.'),
      projects: PROJECTS,
    };
  }

  @Get('projects/:slug')
  @Render('pages/project-detail')
  projectDetail(@Param('slug') slug: string) {
    const project = PROJECTS.find((p: (typeof PROJECTS)[number]) => p.slug === slug);
    if (!project) throw new NotFoundException();
    const related = PROJECTS.filter((p: (typeof PROJECTS)[number]) => p.slug !== slug).slice(0, 3);
    return {
      ...base('projects', project.title, project.desc),
      project,
      related,
    };
  }

  @Get('blog')
  @Render('pages/blog')
  blog() {
    return {
      ...base('blog', 'Blog', 'Interior design ideas, trends and guides from Forever Dream Spaces.'),
      posts: BLOG_POSTS,
    };
  }

  @Get('blog/:slug')
  @Render('pages/blog-post')
  blogPost(@Param('slug') slug: string) {
    const post = BLOG_POSTS.find((p: (typeof BLOG_POSTS)[number]) => p.slug === slug);
    if (!post) throw new NotFoundException();
    const related = BLOG_POSTS.filter((p: (typeof BLOG_POSTS)[number]) => p.slug !== slug).slice(0, 2);
    return {
      ...base('blog', post.title, post.excerpt),
      post,
      related,
    };
  }

  @Get('contact')
  @Render('pages/contact')
  contact() {
    return base('contact', 'Contact Us', 'Get in touch with Forever Dream Spaces for a free interior design consultation.');
  }
}
