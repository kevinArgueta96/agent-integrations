import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-xl text-muted-foreground">
            Learn more about our company and our mission.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We strive to deliver exceptional value to our clients through innovative solutions
                and outstanding service. Our commitment to excellence drives everything we do.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the leading provider of innovative solutions in our industry,
                recognized for our excellence, integrity, and customer-first approach.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
            <CardDescription>How we got started and where we're headed</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Founded with a passion for excellence, our company has grown from humble beginnings
              to become a trusted partner for businesses worldwide. We believe in continuous
              innovation and maintaining the highest standards in everything we do.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}