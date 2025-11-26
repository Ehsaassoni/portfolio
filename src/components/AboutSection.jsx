import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer & R&D Engineer
            </h3>

            <p className="text-muted-foreground">
              I worked at <span className="font-semibold">Sagar Defence Engineering Pvt. Ltd</span> <br />
              for 1.5 years, contributing to secure and innovative defence technology solutions.
              My expertise lies in building scalable applications using the -
              <span className="font-semibold">MERN stack</span>, enhanced with
              <span className="font-semibold">TypeScript, Redux, SQL, and EJS</span>.
            </p>

            <p className="text-muted-foreground">
              Alongside full-stack development, I was actively involved in
              <span className="font-semibold">Research & Development</span>,
              where I explored new technologies, optimized mission-critical systems,
              and delivered reliable solutions for complex challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/projects/Ehsaas-Soni-Resume.pdf"
                download="Ehsaas_Soni_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">MERN & TypeScript Development</h4>
                  <p className="text-muted-foreground">
                    Building robust applications with MongoDB, Express, React, Node.js,
                    and TypeScript for type-safe, scalable solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">State Management & Databases</h4>
                  <p className="text-muted-foreground">
                    Leveraging Redux for predictable state management and SQL for
                    efficient data handling in complex applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Research & Development</h4>
                  <p className="text-muted-foreground">
                    Innovating with EJS templating, modern frameworks, and agile
                    collaboration to deliver defence-grade solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
