import { firebaseApi } from "@/libs/axios";
import { MEALS_ENDPOINT } from "@/libs/axios";

import { useHTTP } from "@/hooks/useHTTP";

import { Meal } from "@/types";

type MealDTO = Omit<Meal, "id">;

type FirebaseResponse = {
    [key: string]: MealDTO;
}

const getMeals = async (): Promise<Meal[]> => {
    const response = await firebaseApi.get<FirebaseResponse>(`/${MEALS_ENDPOINT}.json`);
    const mealsArray: Meal[] = Object.entries(response.data).map(([id, data]) => ({ ...data, id }));
    return mealsArray;
}

//TODO: Implement Calls with SWR.
//TODO: Implement notification system.
export const useGetMeals = () => {
    //const addNotification = useNotifications();
    const { data, error, isLoading } = useHTTP(getMeals);

    if (error) {
        //addNotification({ type: "error", message: "Error while fetching meals" });
    }

    return { data, error, isLoading };
};