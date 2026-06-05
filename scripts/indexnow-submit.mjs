const site = new URL(process.env.SITE_URL ?? "https://gangnam-massage-5fy.pages.dev/");
const host = site.host;
const key = process.env.INDEXNOW_KEY ?? "e926d9ebeec34dd196aee0797ea4bf3d";
const keyLocation = new URL(`/${key}.txt`, site).toString();

const paths = [
  "/",
  "/gangnam/",
  "/gangnam/sinsa/",
  "/gangnam/apgujeong/",
  "/gangnam/nonhyeon/",
  "/gangnam/cheongdam/",
  "/gangnam/samseong/",
  "/gangnam/daechi/",
  "/gangnam/yeoksam/",
  "/gangnam/dogok/",
  "/gangnam/gaepo/",
  "/gangnam/irwon/",
  "/gangnam/suseo/",
  "/gangnam/segok/",
  "/gangnam/jagok/",
  "/gangnam/yulhyeon/",
  "/service/",
  "/pricing/",
  "/guide/",
  "/reviews/",
  "/contact/",
];

const urlList = paths.map((path) => new URL(path, site).toString());

const endpoints = [
  ["IndexNow", "https://api.indexnow.org/indexnow"],
  ["Naver", "https://searchadvisor.naver.com/indexnow"],
];

const payload = {
  host,
  key,
  keyLocation,
  urlList,
};

async function submit(name, endpoint) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  const detail = text.trim() ? ` ${text.trim()}` : "";

  if (!response.ok && response.status !== 202) {
    throw new Error(`${name} returned ${response.status}.${detail}`);
  }

  console.log(`${name}: ${response.status} ${response.statusText}`);
}

console.log(`Submitting ${urlList.length} URLs for ${host}`);
console.log(`Key file: ${keyLocation}`);

const results = await Promise.allSettled(endpoints.map(([name, endpoint]) => submit(name, endpoint)));
const rejected = results.filter((result) => result.status === "rejected");

if (rejected.length > 0) {
  for (const result of rejected) {
    console.error(result.reason);
  }
  process.exit(1);
}
