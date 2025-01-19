/*
  Warnings:

  - Added the required column `Fiber` to the `FoodLog` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `Carbs` on the `FoodLog` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "FoodLog" ADD COLUMN     "Fiber" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "Calories" SET DATA TYPE DOUBLE PRECISION,
DROP COLUMN "Carbs",
ADD COLUMN     "Carbs" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "Fat" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "Protein" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "Cholest" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "Sodium" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "Sugar" SET DATA TYPE DOUBLE PRECISION;
