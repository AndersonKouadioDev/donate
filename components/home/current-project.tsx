import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const projects = [
  {
    title: "Clean Water Initiative",
    description: "Providing clean water to rural communities",
    raised: 15000,
    goal: 50000,
    category: "Health",
  },
  {
    title: "Education for All",
    description: "Building schools in underprivileged areas",
    raised: 25000,
    goal: 100000,
    category: "Education",
  },
  {
    title: "Hunger Relief Program",
    description: "Distributing food to families in need",
    raised: 10000,
    goal: 30000,
    category: "Food",
  },
]

export function CurrentProjects() {
  return (
    <section className="container py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Our Current Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="mb-2">{project.category}</Badge>
              <Progress value={(project.raised / project.goal) * 100} className="h-2 mb-2" />
              <div className="flex justify-between text-sm text-gray-500">
                <span>${project.raised.toLocaleString()} raised</span>
                <span>Goal: ${project.goal.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

