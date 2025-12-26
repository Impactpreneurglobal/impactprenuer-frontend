"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import { BlogCard } from "@/src/components/common/BlogCard";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";

const blogPosts = [
  {
    id: 1,
    title: "Young Investors: A Guide to Financial Freedom",
    date: "28 October, 2025",
    subtitle:
      "Learn how young people can start their investment journey with practical tips and strategies.",
    body: `
    <article>
  <p>
    Financial freedom is often seen as a distant goal—something reserved for adults
    with high-paying jobs or years of experience. But the truth is, the journey to
    financial freedom can (and should) start young. Becoming a young investor isn’t
    about having a lot of money; it’s about building the right mindset, habits, and
    knowledge early.
  </p>

  <p>
    This guide breaks down what young investing means, why it matters, and how to
    start wisely.
  </p>

  <h2>What Does Financial Freedom Mean?</h2>

  <p>
    Financial freedom means having enough financial stability to make life choices
    without constant stress about money. It doesn’t necessarily mean being rich—it
    means:
  </p>

  <ul>
    <li>Having control over your finances</li>
    <li>Being able to save and invest consistently</li>
    <li>Not living paycheck to paycheck</li>
    <li>Preparing for the future with confidence</li>
  </ul>

  <p>
    For young people, financial freedom starts with education and discipline, not
    wealth.
  </p>

  <h2>Why Young People Should Start Investing Early</h2>

  <p>
    One of the biggest advantages young investors have is time.
  </p>

  <ul>
    <li>
      <strong>Compound growth:</strong> Money invested early has more time to grow.
    </li>
    <li>
      <strong>Learning from mistakes:</strong> Starting young allows room to fail,
      learn, and improve.
    </li>
    <li>
      <strong>Confidence with money:</strong> Early exposure builds financial
      confidence and responsibility.
    </li>
    <li>
      <strong>Reduced future pressure:</strong> You’re less likely to struggle
      financially later in life.
    </li>
  </ul>

  <p>
    Even small amounts invested consistently can make a big difference over time.
  </p>

  <h2>The Mindset of a Young Investor</h2>

  <p>
    Before investing money, you must invest in the right mindset.
  </p>

  <ul>
    <li><strong>Long-term thinking:</strong> Avoid the “get-rich-quick” mentality.</li>
    <li><strong>Patience:</strong> Real wealth grows slowly.</li>
    <li><strong>Curiosity:</strong> Always seek to understand how money works.</li>
    <li>
      <strong>Discipline:</strong> Save and invest regularly, not randomly.
    </li>
  </ul>

  <p>
    A strong mindset protects you from bad financial decisions.
  </p>

  <h2>Key Financial Skills Every Young Investor Should Learn</h2>

  <h3>Budgeting</h3>
  <p>Know how much you earn, spend, save, and invest.</p>

  <h3>Saving</h3>
  <p>Always pay yourself first—save before spending.</p>

  <h3>Investing Basics</h3>
  <p>
    Understand simple concepts like risk, return, assets, and diversification.
  </p>

  <h3>Avoiding Bad Debt</h3>
  <p>Not all debt is good. Learn the difference early.</p>

  <h3>Delayed Gratification</h3>
  <p>
    Choosing long-term benefits over short-term pleasure is a superpower.
  </p>

  <h2>Simple Investment Options for Young Investors</h2>

  <p>
    Young investors should start simple and safe:
  </p>

  <ul>
    <li>
      <strong>Savings &amp; fixed accounts:</strong> Low risk, good for beginners
    </li>
    <li>
      <strong>Mutual funds:</strong> Diversification with professional management
    </li>
    <li>
      <strong>Stocks (with guidance):</strong> Ownership in companies
    </li>
    <li>
      <strong>Skill investment:</strong> Learning valuable skills that increase
      future income
    </li>
  </ul>

  <p>
    The goal isn’t complexity; it’s consistency and understanding.
  </p>

  <h2>Common Mistakes Young Investors Should Avoid</h2>

  <ul>
    <li>Investing without understanding</li>
    <li>Following social media hype</li>
    <li>Risking money you can’t afford to lose</li>
    <li>Ignoring savings while chasing investments</li>
    <li>Expecting instant results</li>
  </ul>

  <p>
    Smart investors focus on learning, not gambling.
  </p>

  <h2>Building Wealth Beyond Money</h2>

  <p>
    Financial freedom isn’t only about money—it’s also about:
  </p>

  <ul>
    <li>Knowledge</li>
    <li>Skills</li>
    <li>Discipline</li>
    <li>Decision-making ability</li>
  </ul>

  <p>
    Investing in education, personal development, and problem-solving skills often
    gives higher returns than money alone.
  </p>

  <h2>Final Thoughts</h2>

  <p>
    Becoming a young investor is one of the smartest decisions you can make. You
    don’t need to be rich to start—you need to be intentional. With the right
    mindset, basic financial knowledge, and consistent habits, financial freedom
    becomes achievable, not mythical.
  </p>

  <p>
    <strong>Start small. Stay consistent. Think long-term.</strong>
  </p>

  <p>
    Your future self will thank you.
  </p>
</article>
`,
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/young-investors-guide",
    category: "Finance",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Leadership in the Modern World",
    date: "10 November, 2025",
    subtitle:
      "Explore the essential leadership qualities needed for today's rapidly changing environment.",
    body: `
    <article>
  <p>
    Financial freedom is often seen as a distant goal—something reserved for adults
    with high-paying jobs or years of experience. But the truth is, the journey to
    financial freedom can (and should) start young. Becoming a young investor isn’t
    about having a lot of money; it’s about building the right mindset, habits, and
    knowledge early.
  </p>

  <p>
    This guide breaks down what young investing means, why it matters, and how to
    start wisely.
  </p>

  <h2>What Does Financial Freedom Mean?</h2>

  <p>
    Financial freedom means having enough financial stability to make life choices
    without constant stress about money. It doesn’t necessarily mean being rich—it
    means:
  </p>

  <ul>
    <li>Having control over your finances</li>
    <li>Being able to save and invest consistently</li>
    <li>Not living paycheck to paycheck</li>
    <li>Preparing for the future with confidence</li>
  </ul>

  <p>
    For young people, financial freedom starts with education and discipline, not
    wealth.
  </p>

  <h2>Why Young People Should Start Investing Early</h2>

  <p>
    One of the biggest advantages young investors have is time.
  </p>

  <ul>
    <li>
      <strong>Compound growth:</strong> Money invested early has more time to grow.
    </li>
    <li>
      <strong>Learning from mistakes:</strong> Starting young allows room to fail,
      learn, and improve.
    </li>
    <li>
      <strong>Confidence with money:</strong> Early exposure builds financial
      confidence and responsibility.
    </li>
    <li>
      <strong>Reduced future pressure:</strong> You’re less likely to struggle
      financially later in life.
    </li>
  </ul>

  <p>
    Even small amounts invested consistently can make a big difference over time.
  </p>

  <h2>The Mindset of a Young Investor</h2>

  <p>
    Before investing money, you must invest in the right mindset.
  </p>

  <ul>
    <li><strong>Long-term thinking:</strong> Avoid the “get-rich-quick” mentality.</li>
    <li><strong>Patience:</strong> Real wealth grows slowly.</li>
    <li><strong>Curiosity:</strong> Always seek to understand how money works.</li>
    <li>
      <strong>Discipline:</strong> Save and invest regularly, not randomly.
    </li>
  </ul>

  <p>
    A strong mindset protects you from bad financial decisions.
  </p>

  <h2>Key Financial Skills Every Young Investor Should Learn</h2>

  <h3>Budgeting</h3>
  <p>Know how much you earn, spend, save, and invest.</p>

  <h3>Saving</h3>
  <p>Always pay yourself first—save before spending.</p>

  <h3>Investing Basics</h3>
  <p>
    Understand simple concepts like risk, return, assets, and diversification.
  </p>

  <h3>Avoiding Bad Debt</h3>
  <p>Not all debt is good. Learn the difference early.</p>

  <h3>Delayed Gratification</h3>
  <p>
    Choosing long-term benefits over short-term pleasure is a superpower.
  </p>

  <h2>Simple Investment Options for Young Investors</h2>

  <p>
    Young investors should start simple and safe:
  </p>

  <ul>
    <li>
      <strong>Savings &amp; fixed accounts:</strong> Low risk, good for beginners
    </li>
    <li>
      <strong>Mutual funds:</strong> Diversification with professional management
    </li>
    <li>
      <strong>Stocks (with guidance):</strong> Ownership in companies
    </li>
    <li>
      <strong>Skill investment:</strong> Learning valuable skills that increase
      future income
    </li>
  </ul>

  <p>
    The goal isn’t complexity; it’s consistency and understanding.
  </p>

  <h2>Common Mistakes Young Investors Should Avoid</h2>

  <ul>
    <li>Investing without understanding</li>
    <li>Following social media hype</li>
    <li>Risking money you can’t afford to lose</li>
    <li>Ignoring savings while chasing investments</li>
    <li>Expecting instant results</li>
  </ul>

  <p>
    Smart investors focus on learning, not gambling.
  </p>

  <h2>Building Wealth Beyond Money</h2>

  <p>
    Financial freedom isn’t only about money—it’s also about:
  </p>

  <ul>
    <li>Knowledge</li>
    <li>Skills</li>
    <li>Discipline</li>
    <li>Decision-making ability</li>
  </ul>

  <p>
    Investing in education, personal development, and problem-solving skills often
    gives higher returns than money alone.
  </p>

  <h2>Final Thoughts</h2>

  <p>
    Becoming a young investor is one of the smartest decisions you can make. You
    don’t need to be rich to start—you need to be intentional. With the right
    mindset, basic financial knowledge, and consistent habits, financial freedom
    becomes achievable, not mythical.
  </p>

  <p>
    <strong>Start small. Stay consistent. Think long-term.</strong>
  </p>

  <p>
    Your future self will thank you.
  </p>
</article>
`,
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/leadership-modern-world",
    category: "Leadership",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "From Idea to Startup: A Step-by-Step Guide",
    date: "5 December, 2025",
    subtitle:
      "Turn your innovative ideas into viable businesses with this comprehensive guide.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/idea-to-startup-guide",
    category: "Entrepreneurship",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Financial Literacy for All Ages",
    date: "18 January, 2026",
    subtitle:
      "Essential money management skills everyone should know regardless of age or income.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/financial-literacy-all-ages",
    category: "Finance",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "The Future of Technology Innovation",
    date: "12 February, 2026",
    subtitle:
      "Discover emerging technologies that will shape our future and how to prepare for them.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/future-technology-innovation",
    category: "Technology",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Unlocking Creative Potential",
    date: "25 February, 2026",
    subtitle:
      "Practical techniques to enhance creativity and apply it to problem-solving.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/unlocking-creative-potential",
    category: "Creativity",
    readTime: "4 min read",
  },
  {
    id: 7,
    title: "The Entrepreneur's Mindset",
    date: "10 March, 2026",
    subtitle:
      "Develop the mindset needed to overcome challenges and build successful ventures.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/entrepreneur-mindset",
    category: "Entrepreneurship",
    readTime: "9 min read",
  },
  {
    id: 8,
    title: "Digital Marketing Trends 2026",
    date: "22 March, 2026",
    subtitle:
      "Stay ahead of the curve with the latest digital marketing trends and strategies.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/digital-marketing-trends-2026",
    category: "Marketing",
    readTime: "7 min read",
  },
  {
    id: 9,
    title: "Building Sustainable Businesses",
    date: "5 April, 2026",
    subtitle:
      "Learn how to create businesses that are profitable, sustainable, and socially responsible.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/building-sustainable-businesses",
    category: "Sustainability",
    readTime: "11 min read",
  },
  {
    id: 10,
    title: "Remote Work Best Practices",
    date: "18 April, 2026",
    subtitle:
      "Maximize productivity and maintain work-life balance while working remotely.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/remote-work-best-practices",
    category: "Work",
    readTime: "6 min read",
  },
  {
    id: 11,
    title: "AI and Its Impact on Employment",
    date: "2 May, 2026",
    subtitle:
      "Understanding how artificial intelligence is transforming the job market and how to adapt.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/ai-impact-employment",
    category: "Technology",
    readTime: "12 min read",
  },
  {
    id: 12,
    title: "Community Building Strategies",
    date: "15 May, 2026",
    subtitle:
      "Effective ways to build and engage communities around your brand or cause.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/community-building-strategies",
    category: "Community",
    readTime: "8 min read",
  },
  {
    id: 13,
    title: "Personal Development Roadmap",
    date: "28 May, 2026",
    subtitle:
      "Create a personalized plan for continuous growth and self-improvement.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/personal-development-roadmap",
    category: "Personal Growth",
    readTime: "5 min read",
  },
  {
    id: 14,
    title: "Social Media Algorithms Explained",
    date: "10 June, 2026",
    subtitle:
      "Understand how social media algorithms work and how to optimize your content.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/social-media-algorithms",
    category: "Marketing",
    readTime: "9 min read",
  },
  {
    id: 15,
    title: "The Power of Networking",
    date: "22 June, 2026",
    subtitle:
      "Build meaningful professional relationships that can advance your career or business.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/power-of-networking",
    category: "Career",
    readTime: "6 min read",
  },
  {
    id: 16,
    title: "Mental Health for Entrepreneurs",
    date: "5 July, 2026",
    subtitle:
      "Essential strategies for maintaining mental wellbeing while building a business.",
    body: "",
      imageUrl: "/images/slide1.png",
    // ctaText: "Read more",
    // ctaHref: "/blogs/mental-health-entrepreneurs",
    category: "Wellness",
    readTime: "10 min read",
  },
]


export default function blogDetailPage() {
  const { id } = useParams();

  const blog = blogPosts.find(
    (item) => String(item.id) === String(id)
  );

  const otherBlogs = blogPosts.filter(
    (item) => String(item.id) !== String(id)
  ).slice(0, 4);

  if (!blog) return null;

  return (
    <GeneralLayout>
      <main className="py-20 px-4 sm:px-6 lg:px-20">

        {/* ===== Breadcrumb ===== */}
        <Breadcrumb className="mb-6 py-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="/blogs">blogs</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>{blog.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* ===== Layout ===== */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT — blog Details */}
          <section className="flex-1 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#004119]">
              {blog.title}
            </h1>

            <p className="text-sm text-muted-foreground">
              {blog.date}
            </p>
            <div className="overflow-hidden">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-[300px] lg:h-[428px] object-cover"
              />
            </div>


            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl">
              {blog.subtitle}
            </p>

            {/* render body */}
            <div
              className="text-muted-foreground text-base prose prose-sm sm:prose lg:prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            ></div>

            <Button variant="secondary" className="flex items-center gap-2 w-fit">
              Register <ArrowRight size={16} />
            </Button>
          </section>

          {/* RIGHT — Sidebar */}
          <aside className="w-full lg:w-[320px] space-y-6 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-normal text-[#8A8A8A]">
              See more blogs
            </h2>

            {/* Desktop button */}
            <Link
              href="/blogs"
              className="hidden md:block"
            >
              <Button variant="ghost" className="flex items-center gap-1">
                See all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Cards */}
          <div className="space-y-4 flex flex-col items-center md:items-stretch">
            {otherBlogs.map((item) => (
              <BlogCard
                key={item.id}
                id={item.id}
                title={item.title}
                date={item.date}
                subtitle={item.subtitle}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>

          {/* Mobile button (bottom & centered) */}
          <div className="flex justify-center md:hidden pt-2">
            <Link href="/blogs">
              <Button variant="ghost" className="flex items-center gap-1">
                See all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </aside>


        </div>
      </main>
    </GeneralLayout>
  );
}
