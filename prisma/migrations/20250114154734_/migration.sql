-- CreateTable
CREATE TABLE "FoodLog" (
    "id" SERIAL NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "Entry" TEXT NOT NULL,
    "Item" TEXT NOT NULL,
    "Amount" TEXT NOT NULL,
    "Calories" INTEGER NOT NULL,
    "Carbs" TEXT NOT NULL,
    "Fat" INTEGER NOT NULL,
    "Protein" INTEGER NOT NULL,
    "Cholest" INTEGER NOT NULL,
    "Sodium" INTEGER NOT NULL,
    "Sugar" INTEGER NOT NULL,
    "reportId" TEXT,

    CONSTRAINT "FoodLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FoodLog_reportId_idx" ON "FoodLog"("reportId");

-- AddForeignKey
ALTER TABLE "FoodLog" ADD CONSTRAINT "FoodLog_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE SET NULL ON UPDATE CASCADE;
