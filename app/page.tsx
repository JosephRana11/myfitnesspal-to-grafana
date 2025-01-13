import Image from "next/image";
import QuestionMarkIcon from "./components/icons/questionMarkIcon";
import Button from "./components/atoms/Button";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between p-8 py-4 border-b-[1px] border-gray-200">
        <h1 className="text-2xl font-bold tracking-tight">
          My Fitness Pal to Grafana
        </h1>
        <div className="p-2 bg-gray-200 rounded-lg">
          <QuestionMarkIcon className="font-bold" />
        </div>
      </nav>
      <main className="flex flex-col mt-32 items-center w-full text-center">
        <div className="flex flex-col gap-5 lg:max-w-2xl w-full">
          <h1 className="text-2xl font-bold">Upload your Data</h1>
          <p className="font-medium">
            You can upload your fitness data from MyFitnessPal and visualize it
            in Grafana. This can help you better understand your data and
            fitness goals.
          </p>
          <div className="flex flex-col py-20  border-dashed rounded-lg border-4 border-gray-400 w-full items-center">
            <p className="text-lg font-bold">Drag and Drop or</p>
            <p>select a CSV file from your computer.</p>
           <Button>
             Browse Files
           </Button>
          </div>
          <div className="w-full flex justify-end">
            <Button className="bg-sky-500 hover:bg-sky-300 hover:text-gray-100 text-white">
              Next
            </Button>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
