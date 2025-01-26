import { NextResponse } from "next/server";
import {PrismaClient} from '@prisma/client'
import { randomUUID } from "crypto"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }
  const file = (await request.formData()).get("file");
  if (file === null) {
    return NextResponse.json({ message: "No file found" }, { status: 400 });
  }
  const reportID =  await ReadFileContent(file as File)
  return NextResponse.json({ message: "File uploaded successfully" , reportID : reportID},{status :200})
}


export async function ReadFileContent(file: File) : Promise<string> {
    const text = await file.text();
    const lines = text.split('\n');

    const reportID = randomUUID()
    await prisma.report.create({
      data: {
        id: reportID
      }
    })

    for (let i = 1; i < lines.length -1 ; i++) {
      const line = lines[i];
      const data = line.split(',');
      const date = new Date(`${data[0]} ${data[1]}`);
      const entry = data[2]; 
      const item = data[3];  
      const amount = data[4];  
      const calories = parseFloat(data[5]); 
      const carbs = parseFloat(data[6]);  
      const fat = parseFloat(data[7]);  
      const protein = parseFloat(data[8]);  
      const cholest = parseFloat(data[9])/1000;  
      const sodium = parseFloat(data[10])/1000;  
      const sugar = parseFloat(data[11]); 
      const fiber = parseFloat(data[12]); 
      

      const foodLog = {
        Date: date,
        Entry: entry,
        Item: item,
        Amount: amount,
        Calories: calories,
        Carbs: carbs,
        Fat: fat,
        Protein: protein,
        Cholest: cholest,
        Sodium: sodium,
        Sugar: sugar,
        Fiber: fiber,
        reportId: null  
      };
      const response = await prisma.foodLog.create({
        data: {
          Date: date,
          Entry: foodLog.Entry,
          Item: foodLog.Item,
          Amount: foodLog.Amount,
          Calories: foodLog.Calories,
          Carbs: foodLog.Carbs,
          Fat: foodLog.Fat,
          Protein: foodLog.Protein,
          Cholest: foodLog.Cholest,
          Sodium: foodLog.Sodium,
          Sugar: foodLog.Sugar,
          Fiber: foodLog.Fiber,
          reportId: reportID
        }
      })
    }
    return reportID
}