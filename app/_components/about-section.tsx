import React from "react";
import { Code, Users, Calendar, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <Card>
    <CardContent className="flex flex-col items-center text-center p-6">
      <div className="rounded-full bg-primary/10 p-3 mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Univac</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            soluta ut, exercitationem maiores cupiditate sunt asperiores
            obcaecati porro facere! Omnis id quisquam nostrum corrupti iusto eum
            sit maxime laboriosam deleniti.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Code className="h-6 w-6 text-primary" />}
            title="Coding"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            soluta ut, exercitationem"
          />
          <FeatureCard
            icon={<Users className="h-6 w-6 text-primary" />}
            title="Collaboration"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            soluta ut, exercitationem"
          />
          <FeatureCard
            icon={<Calendar className="h-6 w-6 text-primary" />}
            title="Workshops"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            soluta ut, exercitationem"
          />
          <FeatureCard
            icon={<Lightbulb className="h-6 w-6 text-primary" />}
            title="Projects"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            soluta ut, exercitationem"
          />
        </div>
        {/* <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At Univac, we aim to bridge the gap between classroom learning and
            real-world application. We're committed to creating an inclusive
            environment where students can explore their passion for computer
            science, develop new skills, and prepare for successful careers in
            the ever-evolving tech industry.
          </p>
        </div>
        <div className="mt-12 bg-muted p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Did You Know?
          </h3>
          <p className="text-center text-muted-foreground">
            The name "Univac" pays homage to the first commercial computer
            produced in the United States. Just as the original UNIVAC pioneered
            the computer age, our club aims to pioneer new frontiers in computer
            science education and innovation.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
