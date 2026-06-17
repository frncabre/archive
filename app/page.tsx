import Image from "next/image";
import Navbar from "./components/Navbar";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
        {data.map((post, idx) => (
          <Card key={post.currentSlug ?? idx} className="group overflow-hidden flex flex-col">

            {/* Imagen — fuera del CardHeader para que llegue al borde */}
            <div className="relative w-full h-[200px] overflow-hidden">
              <Image
                src={urlFor(post.titleImage).url()}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Título + descripción */}
            <CardHeader className="pb-2">
              <CardTitle className="text-lg leading-tight line-clamp-2">
                {post.title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {post.smallDescription}
              </CardDescription>
            </CardHeader>

            {/* Espacio extra si querés meter más info */}
            <CardContent className="flex-1" />

            {/* Link al fondo */}
            <CardFooter>
              <a
                href={`/blog/${post.currentSlug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                Leer más →
              </a>
            </CardFooter>

          </Card>
        ))}
      </div>
    </div>
  );
}