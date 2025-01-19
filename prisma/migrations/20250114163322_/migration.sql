/*
  Warnings:

  - Made the column `reportId` on table `FoodLog` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "FoodLog" DROP CONSTRAINT "FoodLog_reportId_fkey";

-- AlterTable
ALTER TABLE "FoodLog" ALTER COLUMN "Calories" DROP NOT NULL,
ALTER COLUMN "Fat" DROP NOT NULL,
ALTER COLUMN "Protein" DROP NOT NULL,
ALTER COLUMN "Cholest" DROP NOT NULL,
ALTER COLUMN "Sodium" DROP NOT NULL,
ALTER COLUMN "Sugar" DROP NOT NULL,
ALTER COLUMN "reportId" SET NOT NULL,
ALTER COLUMN "Fiber" DROP NOT NULL,
ALTER COLUMN "Carbs" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "FoodLog" ADD CONSTRAINT "FoodLog_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
