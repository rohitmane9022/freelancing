import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Audio from "../Images/addOns/Audio.png"

export default function AddOns() {
  const addOns = [
    {
      title: "Audio Guest Book",
      description: "Because Voices Hold More Than Words",
      content: `Some moments are too special to be left on paper. FotoRoo's Audio Guest Book captures the raw emotions, laughter, and heartfelt messages of your guests—preserved in sound, not just ink.

At weddings, milestone celebrations, and corporate galas, this elegant, vintage-inspired phone lets guests leave timeless audio keepsakes that you can relive forever. From tearful toasts to inside jokes, their voices become an unforgettable part of your story.

No apps. No awkward typing. Just pure nostalgia, bottled in sound.
Ditch the pen. Dial in the magic.

How Does It Work?
Step 1 – Pick up the phone. Step 2 – Leave your message after the beep. Step 3 – Hang up to save your recording.`,
      image: Audio, 
    },
    {
      title: "Keep Sake Album",
      description: "Timeless Memories, Beautifully Preserved",
      content: `Turn your special moments into a lasting keepsake with the FotoRoo Keepsake Album. It's the perfect way to collect all the photos taken in the booth, along with heartfelt messages from your guests. After your event, you'll have a beautifully crafted album to look back on and cherish for years to come.`,
      image: Audio, 
    },
    {
      title: "Photo Booth",
      description: "Capture the Fun, Frame the Memories",
      content: `Elevate your event with our state-of-the-art photo booth. Perfect for weddings, parties, and corporate events, our booth combines cutting-edge technology with timeless fun. Guests can strike a pose, add digital props, and instantly print high-quality photos to take home.

Features include customizable backdrops, props, and photo templates to match your event theme. Share your photos instantly on social media or via email. With our user-friendly interface, creating lasting memories has never been easier or more enjoyable.`,
      image: Audio, 
    },
  ]

  return (
    <section className="w-full py-12 bg-muted/30">
      <div className="container">
       
        <div className="mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {addOns.map((booth) => (
           <Card key={booth.id} className="flex flex-col h-full overflow-hidden border-2">
           <div className="relative aspect-[4/3] overflow-hidden">
             <img
               src={booth.image || "/placeholder.svg"}
               alt={booth.name}
               className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
             />
           </div>
           <CardHeader className="flex flex-col items-start">
             <CardTitle className="text-xl font-bold mb-2">{booth.title}</CardTitle>
             <p className="text-sm text-muted-foreground italic mb-2">{booth.description}</p>
             <p className="text-base font-semibold">{booth.price}</p>
           </CardHeader>
           <CardContent className="flex-grow flex flex-col">
             <div className="prose max-w-none text-sm mb-4">
               {booth.content.split("\n\n").map((paragraph, index) => (
                 <p key={index} className="mb-2">
                   {paragraph}
                 </p>
               ))}
             </div>
             {/* Position the button at the bottom */}
             <button
               className="btn mt-auto block w-full"
               onClick={() => handleLearnMore(booth.id)}
             >
               Learn More
             </button>
           </CardContent>
         </Card>
         
          ))}
        </div>
      </div>
    </section>
  )
}

