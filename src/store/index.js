import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
    state: {
        title: "",
        total: null,
        filteredTotal: null,
        paginated: null,
        companiesCount: '71K',
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
        setPaginated(state, paginated) {
            state.paginated = paginated;
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
                        commit("setTotal", data.total_jobs);
                        commit("setPaginated", data.paginated_jobs.length);
                        commit("setFilteredTotal", data.no_filtered_jobs);
                        commit("setTotal", data.total_jobs);
                        resolve(data);
                    })
                    .catch((error) => {
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
