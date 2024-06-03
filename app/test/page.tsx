import axios from "axios";

export const dynamic = "force-dynamic";

const Page = async () => {
  const data = await test();
  return (
    <div>
      Test Page {Date.now()} {data.status}
    </div>
  );
};

async function test() {
  // intentionally didn't use fetch
  return await axios.get("https://httpbin.org/get");
}

export default Page;
