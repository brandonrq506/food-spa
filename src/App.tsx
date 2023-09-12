import { Header } from "@/components/layout";
import { MealSummary, MealList } from "@/features/meals";

function App() {

    return (
        <>
            <Header />
            <MealSummary />
            <MealList />
        </>
    );
}

export default App;

/* 
Before continuing:
- Read your notes and the docs if needed: Create the api calls for the Cart. Do not send request on first render.
- To create the animation for when you add/remove an item look at the boop effect.
- Study the Bulletproof react Form components and how they are used.
- Study the SWR docs and how to use it.
- For cartItems try to use Composition + Context API.
*/