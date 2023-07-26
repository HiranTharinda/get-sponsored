import { createStore } from "vuex";
import axios from "axios";

// Define the type for the state
interface State {
    title: string;
    total: number | null;
    filteredTotal: number | null;
    paginated: number | null;
    companiesCount: string;
    data: any[]; // Change 'any' to the actual type of your job data
}

const store = createStore<State>({
    state: {
        title: " ",
        total: null,
        filteredTotal: null,
        paginated: null,
        companiesCount: "71K",
        data: [],
    },
    mutations: {
        setData(state: State, data: any[]) {
            state.data = data;
        },
        resetData(state: State) {
            state.data = [];
        },
        addData(state: State, newData: any[]) {
            state.data.push(...newData);
        },
        setTotal(state: State, total: number) {
            state.total = total;
        },
        setPaginated(state: State, paginated: number) {
            state.paginated = paginated;
        },
        setFilteredTotal(state: State, filteredTotal: number) {
            state.filteredTotal = filteredTotal;
        },
        updateTitle(state: State, newTitle: string) {
            state.title = newTitle;
        },
    },
    actions: {
        fetchData(
            { commit }: { commit: Commit },
            { title, offset, limit }: { title: string; offset: number; limit: number }
        ) {
            // Fetch data from the API using the provided offset and limit
            return new Promise<void>((resolve, reject) => {
                axios
                    .get(`get-jobs?title=${title}&location=&offset=${offset}&limit=${limit}`)
                    .then((response: any) => {
                        const data = response.data;
                        commit("addData", data.paginated_jobs);
                        commit("setTotal", data.total_jobs);
                        commit("setPaginated", data.paginated_jobs.length);
                        commit("setFilteredTotal", data.no_filtered_jobs);
                        commit("setTotal", data.total_jobs);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        resetData({ commit }: { commit: any }) {
            commit("resetData");
        },
    },
});

export default store;