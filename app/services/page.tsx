import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Service 1",
    description: "Comprehensive solution for your business needs",
    features: [
      "Feature 1 description",
      "Feature 2 description",
      "Feature 3 description",
    ],
  },
  {
    title: "Service 2",
    description: "Advanced tools for maximum efficiency",
    features: [
      "Feature 1 description",
      "Feature 2 description",
      "Feature 3 description",
    ],
  },
  {
    title: "Service 3",
    description: "Expert consultation and support",
    features: [
      "Feature 1 description",
      "Feature 2 description",
      "Feature 3 description",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Discover how we can help your business grow
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}