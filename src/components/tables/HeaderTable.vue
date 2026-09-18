<script>
export default {
    props:{
        columns:{
            type: Array,
            required:true,
        }
    }
}
</script>

<template>
        <thead class="table-header">
             <tr>
                <th
                    v-for="column in columns"
                    :key="column.key"
                >
                    {{ column.title }}
                </th>
            </tr>
        </thead>
</template>

<style>
.table-header{
    width: 100%;
    border-collapse: collapse;
    font-size:medium;
    background-color: aliceblue;
    position: sticky;
    top: 0;  

    th{
        padding: 20px;
        align-items: start;
        /* border: 1px solid rgb(246, 244, 244); */
    }
}

</style>