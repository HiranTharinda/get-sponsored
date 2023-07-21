import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
    state: {
        title: "",
        total: 0,
        filteredTotal: 0,
        companiesCount: 71,
        data: [], // This will store the job data fetched from the API
    },
    mutations: {
        setData(state, data) {
            state.data = data;
        },
        resetData(state) {
            state.data = [];
        },
        addData(state, newData) {
            state.data.push(...newData);
        },
        setTotal(state, total) {
            state.total = total;
        },
        setFilteredTotal(state, filteredTotal) {
            state.filteredTotal = filteredTotal;
        },
        updateTitle(state, newTitle) {
            state.title = newTitle;
        },
    },
    actions: {
        fetchData({ commit }, { title, offset, limit }) {
            // Fetch data from the API using the provided offset and limit
            return new Promise((resolve, reject) => {
                axios
                    .get(`get-jobs?title=${title}&location=&offset=${offset}&limit=${limit}`)
                    .then((response) => {
                        const data = response.data;
                        commit("addData", data.paginated_jobs);
                        commit("setFilteredTotal", data.no_filtered_jobs);
                        commit("setTotal", data.total_jobs);
                        resolve(data);
                    })
                    .catch((error) => {
                        console.error(error);
                        reject(error);
                    });
            });
        },
        resetData({ commit }) {
            commit("resetData");
        },

    },
});

export default store;
