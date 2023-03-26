import Counter from "../counter/counter";
import Post from "../mutate/mutate";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
    next: { revalidate: 10 },
  });
  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log("🚀  file: page.tsx:10  Dashboard  data:", data);
  return (
    <>
      <p>dashboard page</p>
      <Counter />
      <Post />
      <hr className="my-4" />
      {data.map((item: any) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.id}</p>
          </div>
        );
      })}
    </>
  );
}
