'use client';

import { LanguagePageShell } from '../components/LanguagePageShell';
import { Card } from 'primereact/card';


export default function ReadingsPage() {
  return (
    <LanguagePageShell>
      {(language) => (
        <BookCards />
      )}
    </LanguagePageShell>
  );
}

export function BookCards() {
  return (
    <div className="flex gap-12 p-[5rem]">
      <Card title="Book Title" className="w-full max-w-[20%]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
          numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </Card>

      <Card title="Book Title" className="w-full max-w-[20%]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
          numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </Card>
    </div>
  );
}
