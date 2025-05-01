// app/components/UploadAndPreview.tsx
'use client';

import { useState } from 'react';
import { CldImage } from 'next-cloudinary';

export default function UploadAndPreview() {
  const [image, setImage] = useState<{ url: string; publicId: string } | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setImage({ url: data.url, publicId: data.publicId });
  }

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {image && (
        <div className="mt-4">
          <p className="mb-2">Uploaded Image (Optimized):</p>
          <CldImage
            width="400"
            height="300"
            src={image.publicId}
            alt="Uploaded Image"
            crop="fill"
          />
        </div>
      )}
    </div>
  );
}
