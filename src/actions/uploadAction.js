'use server';
import { uploadImage } from "@/lib/cloudinary";
import { createImage } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function uploadAction(prevState, formData) {
  const image = formData.get('upload');

  if (!image || image.size === 0) return {message: 'Invalid'};

  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (e) {
    throw new Error('Image upload failed, post was not created. Please try again later.');
  }

  const upload = {
    title: 'For User',
    url: imageUrl
  }
  await createImage(upload);

  revalidatePath('/gallery', 'layout');
}
