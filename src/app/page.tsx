"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import TagAbout from "@/components/sections/about/TagAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import TeamCardThree from "@/components/sections/team/TeamCardThree";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import ContactCenterForm from "@/components/sections/contact/ContactCenterForm";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Award, Linkedin, Mail, Sparkles, Zap } from "lucide-react";

export default function SkyDriverPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="animatedAurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      {/* Navigation */}
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="SkyDriver"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763567117605-zwjpaq8p.jpg"
          logoAlt="SkyDriver logo"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Pricing", id: "pricing" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Feel the Rush of Freefall"
          description="Experience the ultimate adventure with SkyDriver. Tandem skydiving with certified instructors, breathtaking views, and memories that last a lifetime."
          tag="Take the Leap"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763567119105-mpo7z48v.jpg"
          imageAlt="Skydiver in freefall above clouds"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "Book Your Jump", href: "contact" },
            { text: "Learn More", href: "about" },
          ]}
        />
      </div>

      {/* About Section */}
      <div id="about" data-section="about">
        <TagAbout
          tag="Our Mission"
          description="At SkyDriver, we believe skydiving is more than just jumping from a plane. It's about pushing your limits, conquering fears, and discovering an incredible sense of freedom. With over 20 years of experience and thousands of successful jumps, we provide the safest, most thrilling skydiving experience in the region. Every jump is a story. Every jumper becomes part of our community."
        />
      </div>

      {/* Services Section */}
      <div id="services" data-section="services">
        <FeatureCardOne
          title="Our Skydiving Services"
          description="Comprehensive programs for everyone from first-timers to experienced jumpers"
          tag="What We Offer"
          features={[
            {
              title: "Tandem Skydiving",
              description: "Jump with a certified instructor. Perfect for beginners. Experience freefall from 15,000 feet with expert guidance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763567121107-8yqbmder.jpg",
              imageAlt: "Tandem skydiving instructor and student in freefall",
            },
            {
              title: "AFF Training Program",
              description: "Learn to skydive solo with our accelerated freefall training. Multi-level progression with hands-on instruction.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763567122326-17xij6gz.jpg",
              imageAlt: "Indoor skydiving tunnel training facility",
            },
            {
              title: "Safety & Equipment",
              description: "Military-grade parachutes, redundant systems, and rigorous safety protocols. Your safety is our priority.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763567123592-dqkfe2nw.jpg",
              imageAlt: "Professional skydiving equipment and parachutes",
            },
            {
              title: "Premium Jump Locations",
              description: "Beautiful drop zones with stunning aerial views. Perfect for photography and unforgettable experiences.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763567125313-84kf47la.jpg",
              imageAlt: "Scenic skydiving drop zone with mountains",
            },
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          buttons={[{ text: "Explore All Services", href: "services" }]}
        />
      </div>

      {/* Pricing Section */}
      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Jump Packages"
          description="Choose the perfect package for your skydiving adventure"
          tag="Pricing"
          plans={[
            {
              id: "tandem",
              badge: "Popular",
              badgeIcon: Zap,
              price: "$249",
              subtitle: "First time jumpers",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "#" },
              ],
              features: [
                "15,000 ft altitude",
                "60 second freefall",
                "Expert instructor",
                "Video recording included",
                "Certificate of achievement",
              ],
            },
            {
              id: "aff-level-1",
              badge: "AFF Level 1",
              badgeIcon: Sparkles,
              price: "$299",
              subtitle: "Solo skydiving training",
              buttons: [
                { text: "Enroll Now", href: "contact" },
                { text: "Details", href: "#" },
              ],
              features: [
                "8 hour ground training",
                "First solo jump supervised",
                "14,000 ft altitude",
                "Professional progression",
                "Certification ready",
              ],
            },
            {
              id: "premium",
              badge: "Elite",
              badgeIcon: Award,
              price: "$599",
              subtitle: "Complete training bundle",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Ask Questions", href: "#" },
              ],
              features: [
                "Full AFF Level 1-3 program",
                "12 supervised jumps",
                "Complete equipment",
                "Priority scheduling",
                "Personal coaching",
              ],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      {/* Team Section */}
      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Team"
          description="Experienced instructors dedicated to your safety and success"
          tag="Our Experts"
          members={[
            {
              id: "1",
              name: "Marcus Chen",
              role: "Chief Instructor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763567126235-7zhlpfes.jpg",
              imageAlt: "Marcus Chen, Chief Instructor",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Mail, url: "mailto:marcus@skydriver.com" },
              ],
            },
            {
              id: "2",
              name: "Sarah Johnson",
              role: "Senior Skydiver",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763567127542-bkjijb85.jpg",
              imageAlt: "Sarah Johnson, Senior Skydiver",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Mail, url: "mailto:sarah@skydriver.com" },
              ],
            },
            {
              id: "3",
              name: "David Martinez",
              role: "Pilot & Safety Officer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763567128742-o7bl6vob.jpg",
              imageAlt: "David Martinez, Pilot",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Mail, url: "mailto:david@skydriver.com" },
              ],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Jumpers Say"
          description="Real experiences from real skydivers"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Emily Rodriguez",
              role: "First-time Jumper",
              testimonial: "Absolutely incredible experience! The instructors made me feel completely safe and supported. I'll never forget the moment my parachute opened. Already planning my next jump!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763567130310-k3onbgol.jpg",
              imageAlt: "Emily Rodriguez",
            },
            {
              id: "2",
              name: "James Wilson",
              role: "Thrill Seeker",
              testimonial: "SkyDriver delivers the rush I crave. Professional, safe, and unforgettable. Marcus and the team are world-class. This is skydiving done right.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763567131643-fota9ipm.jpg",
              imageAlt: "James Wilson",
            },
            {
              id: "3",
              name: "Lisa Chang",
              role: "AFF Student",
              testimonial: "The training program is comprehensive and well-structured. Sarah's teaching style is clear and encouraging. I'm progressing through AFF faster than expected!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763567132814-hioytqku.jpg",
              imageAlt: "Lisa Chang",
            },
            {
              id: "4",
              name: "Robert Thompson",
              role: "Adventure Enthusiast",
              testimonial: "Bucket list item checked! The whole team at SkyDriver made this the safest and most thrilling experience of my life. Highly recommend to anyone considering skydiving.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763567139727-nkw4zpc1.jpg",
              imageAlt: "Robert Thompson",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      {/* Contact Section */}
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Take the Leap?"
          description="Fill out the form below to book your skydiving experience or get more information about our programs."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Your Phone Number", required: true },
            { name: "jumpType", type: "text", placeholder: "Select jump type (Tandem, AFF, etc)", required: true },
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your experience level or special requests...",
            rows: 5,
            required: false,
          }}
          buttonText="Book Your Adventure"
        />
      </div>

      {/* Footer Section */}
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="SkyDriver"
          copyrightText="© 2025 SkyDriver Skydiving Center. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                { label: "Tandem Jumping", href: "services" },
                { label: "AFF Training", href: "services" },
                { label: "Safety Training", href: "about" },
                { label: "Gift Certificates", href: "contact" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
              ],
            },
            {
              title: "Contact",
              items: [
                { label: "Email: info@skydriver.com", href: "mailto:info@skydriver.com" },
                { label: "Phone: +1 (555) 123-4567", href: "tel:+15551234567" },
                { label: "Hours: Daily 8AM-6PM", href: "#" },
                { label: "Location: Downtown Airfield", href: "#" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
