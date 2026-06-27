import Image from "next/image";
import Navbar from "./components/Navbar";
import { getAllNotes, urlFor, type Locale } from "./lib/sanity";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const lang: Locale = "en";

export default async function Home() {
  const notes = await getAllNotes(lang);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
        {notes.map((note, idx) => (
          <Card key={note.currentSlug ?? idx} className="group overflow-hidden flex flex-col">

            <div className="relative w-full h-[200px] overflow-hidden">
              <Image
                src={urlFor(note.titleImage).url()}
                alt={note.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <CardHeader className="pb-2">
              {note.series && (
                <p className="text-[0.65rem] font-sans tracking-[0.12em] uppercase text-[#d4510a]/70 mb-1">
                  {note.series.title}
                </p>
              )}
              <CardTitle className="text-lg leading-tight line-clamp-2">
                {note.title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {note.excerpt}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1" />

            <CardFooter>
              
              <a
                href={`/notes/${note.currentSlug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                Read more →
              </a>
            </CardFooter>

          </Card>
        ))}
      </div>
    </div>
  );
}