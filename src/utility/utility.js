export async function fetcher(...args) {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
}

export const visitorDes = [
    {
        title: "Total Visitor",
        visitor: 13900
    },
    {
        title: "This Month",
        visitor: 4200
    },
    {
        title: "This Week",
        visitor: 1400
    },
    {
        title: "Last week",
        visitor: 1100
    }
]

export const BookCtg = [
    "Mystery",
    "Fiction",
    "Fantasy",
    "Horror",
    "History",
    "Self-help",
    "Autobiography",
    "Biography",
  ]