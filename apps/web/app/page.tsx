import { Activity, Upload, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Text } from "@workspace/ui/components/vector/text"
import { Button } from "@workspace/ui/components/vector/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/vector/card"
import { Input } from "@workspace/ui/components/vector/input"
import { Label } from "@workspace/ui/components/vector/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/vector/select"
import { Textarea } from "@workspace/ui/components/vector/textarea"
import { CalendarExample } from "@/examples/calendar"
import { CommandExample } from "@/examples/command"
import { ChartExample } from "@/components/blocks/chart"
import { LoginForm } from "@/components/blocks/login-form"

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-4 pt-10">
      <Text variant="jumbo">
        Based on the most fucked up minds of the galaxy
      </Text>
      <Text variant="h1">Build your retro component library</Text>
      <Text variant="p">
        A set of 8-bit styled components and a code distribution platform. Works
        with your favorite frameworks. Open Source. Open Code.
      </Text>

      <Link href="/docs/components/alert" className="w-fit">
        <Button className="w-fit">Get Started</Button>
      </Link>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <CalendarExample />

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <Users className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Product Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full"
                    defaultValue="Gamer Gear"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                    className="min-h-32"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-4 md:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium">
                Total visitors in the last 6 months
              </CardTitle>
              <Users className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <ChartExample />
            </CardContent>
          </Card>

          <LoginForm />
        </div>

        <div className="flex w-full flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger id="status" aria-label="Select status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Active</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <CommandExample />

          <Card>
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Image
                  alt="Product image"
                  className="aspect-square w-full rounded-md object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="grid grid-cols-3 gap-2">
                  <button>
                    <Image
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src="/placeholder.svg"
                      width="84"
                    />
                  </button>
                  <button>
                    <Image
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src="/placeholder.svg"
                      width="84"
                    />
                  </button>
                  <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                    <Upload className="size-4 text-muted-foreground" />
                    <span className="sr-only">Upload</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
