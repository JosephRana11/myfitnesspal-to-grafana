import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }

  const file = (await request.formData()).get("file");

  if (file === null) {
    return NextResponse.json({ message: "No file found" }, { status: 400 });
  }

  console.log(file)
  await ReadFileContent(file as File)

   return NextResponse.json({ message: "File uploaded successfully"},{status :200})
}


export async function ReadFileContent(file: File) {
    const buffer = await file.arrayBuffer();
    console.log(buffer)
    const test = await file.text();
    console.log(test)
}