import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fish } from 'lucide-react';

const fishFacts = [
  "There are over 34,000 known species of fish.",
  "The oldest known age for a fish was 205 years old.",
  "Some species of fish can fly, while others can climb trees.",
  "Goldfish have a memory span of up to three months.",
  "Fish have been on Earth for more than 500 million years.",
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % fishFacts.length);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Fascinating World of Fish</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About Fish</CardTitle>
              <CardDescription>Discover the aquatic wonders</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Fish are aquatic animals that play a crucial role in marine ecosystems. They come in a vast array of shapes, sizes, and colors, adapting to various water environments around the world.
              </p>
              <div className="mt-4 flex items-center justify-center">
                <Fish className="text-blue-500" size={48} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fish Fact Generator</CardTitle>
              <CardDescription>Learn interesting facts about fish</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{fishFacts[factIndex]}</p>
              <Button onClick={nextFact} className="w-full">Next Fact</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Types of Fish</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {['Clownfish', 'Shark', 'Tuna', 'Salmon', 'Angelfish', 'Goldfish'].map((fish) => (
                  <div key={fish} className="bg-white p-4 rounded-lg shadow">
                    <img 
                      src={`https://source.unsplash.com/200x200/?${fish}`} 
                      alt={fish} 
                      className="mx-auto object-cover w-full h-40 mb-2 rounded"
                    />
                    <p className="text-center font-semibold">{fish}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
