-- DropForeignKey
ALTER TABLE "FoodLog" DROP CONSTRAINT "FoodLog_reportId_fkey";

-- AlterTable
ALTER TABLE "FoodLog" ALTER COLUMN "reportId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "FoodLog" ADD CONSTRAINT "FoodLog_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE SET NULL ON UPDATE CASCADE;
