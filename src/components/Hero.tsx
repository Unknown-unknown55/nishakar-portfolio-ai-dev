import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Profile Image */}
        <div className="relative inline-block">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-48 md:h-48 mx-auto mb-8 relative">
            <img
              src={profileImage}
              alt="Nishakar T - AI/ML Engineering Student"
              className="w-full h-full rounded-full object-cover border-4 border-white/30 relative z-10 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 animate-pulse -z-10"></div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-hero font-bold text-gradient animate-slide-up">
            Nishakar T
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up">
            AI/ML Engineering Student | Full-Stack Developer | Problem Solver
          </p>
        </div>

        {/* Short Bio */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Highly motivated AI/ML engineering student specializing in full-stack development 
          and end-to-end AI systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button
            size="lg"
            className="hero-gradient text-white hover-lift px-8 py-3"
            onClick={() => scrollToSection("portfolio")}
          >
            View Portfolio
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hover-lift px-8 py-3"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 pt-8 animate-fade-in">
          <a
            href="https://github.com/NISHAKAR06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover-lift"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/nishakar314"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover-lift"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-2xl flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;