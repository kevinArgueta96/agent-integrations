import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to Our Platform
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover amazing features and services that will help you achieve your goals.
              We provide the tools you need to succeed.
            </p>
            <div className="space-x-4">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 p-6 border rounded-lg"
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Feature 1",
    description: "A powerful feature that helps you accomplish amazing things with ease.",
  },
  {
    title: "Feature 2",
    description: "Another great feature that makes your work more efficient and enjoyable.",
  },
  {
    title: "Feature 3",
    description: "Yet another fantastic feature that sets us apart from the competition.",
  },
];